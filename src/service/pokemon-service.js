import {prismaClient} from '../application/database.js'; 
import { ResponseError } from '../error/response-error.js';

const listPokemons = async (req) => {
  try {
    const page = Number(req.query.page) || 1
    const perPage = Number(req.query.per_page) || 10
    const offset = Number((page - 1) * perPage);
    const isRename = req.query.is_rename === 'true'; 

    // Fetch the paginated pokemons
    const [pokemons, totalCount] = await Promise.all([
      prismaClient.pokemon.findMany({
        skip: offset,
        take: perPage,
        where: {
          ...(isRename ? { nickname: { not: null } } : {}),
        },
      }),
      prismaClient.pokemon.count({
        where: {
          ...(isRename ? { nickname: { not: null } } : {}),
        },
      }), // Get the total number of pokemons
    ]);

    return {
      data: pokemons,
      pagination: {
        page,
        per_page:perPage,
        total_items: totalCount,
        total_pages: Math.ceil(totalCount / perPage),
      },
    };
  } catch (err) {
    throw new ResponseError(500, err.message);
  }
};

const getPokemon = async (req) => {
  try {
    const { identifier } = req.params;
    let pokemon;
    if (!isNaN(parseInt(identifier))) {
      // If the identifier is a number, query by ID
      pokemon = await prismaClient.pokemon.findUnique({
        where: { id: parseInt(identifier) },
      });
    } else {
      // Otherwise, query by Name
      pokemon = await prismaClient.pokemon.findFirst({
        where: { name: identifier },
      });
    }

    if (!pokemon) {
      throw new ResponseError(404, 'Pokémon not found');
    }

    return {
      data:pokemon,
    };
  } catch (err) {
    throw new ResponseError(500, err.message);
  }
};

const catchPokemon = async (req) => {
  try {
    const pokemon = await prismaClient.pokemon.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!pokemon) {
      throw new ResponseError(404, 'Pokémon not found');
    }

    const success = Math.random() > 0.5;
    if (!success) {
      throw new ResponseError(404, 'Failed to catch Pokémon');
    }

    const updatedPokemon = await prismaClient.pokemon.update({
      where: { id: parseInt(req.params.id) },
      data: { caught: true },
    });

   return {
    data:updatedPokemon,
   };

  } catch (err) {
    throw new ResponseError(500, err.message);
  }
};

const releasePokemon = async (req) => {
  try {
    const pokemon = await prismaClient.pokemon.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!pokemon) {
      throw new ResponseError(404, 'Pokémon not found');
    }

    const isPrime = num => {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) if (num % i === 0) return false;
      return true;
    };

    const primeNumber = Math.floor(Math.random() * 100);
    if (!isPrime(primeNumber)) {
      throw new ResponseError(404, 'Failed to release Pokémon');
    }

    const result = await prismaClient.pokemon.update({
      where: { id: parseInt(req.params.id) },
      data: { released: true }, // Set the new 'released' column to true
    });

    return {
      data: result,
    }

  } catch (err) {
    throw new ResponseError(500, err.message);
  }
};

const fibonacci = (n) => {
  let a = 0, b = 1, temp;
  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
};

const renamePokemon = async (req) => {
  try {
    const pokemon = await prismaClient.pokemon.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!pokemon) {
      throw new ResponseError(404, 'Pokémon not found');
    }

    // Compute Fibonacci suffix based on the renameCount
    const renameCount = pokemon.rename_count;
    const fibonacciNumber = fibonacci(renameCount);
    const newName = `${pokemon.name}-${fibonacciNumber}`;

    // Update the Pokémon's nickname and increment renameCount
    const updatedPokemon = await prismaClient.pokemon.update({
      where: { id: parseInt(req.params.id) },
      data: {
        nickname: newName,
        rename_count: { increment: 1 }, // Increment rename_count by 1
      },
    });
    
    return {
      data: updatedPokemon
    }
  } catch (err) {
    throw new ResponseError(500, err.message);
  }
};

export default {
  listPokemons,
  getPokemon,
  catchPokemon,
  releasePokemon,
  renamePokemon
}