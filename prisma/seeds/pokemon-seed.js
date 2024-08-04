import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const pokemons = [
    {
      id:1,
      name: 'bulbasaur',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      moves: [],
      types: ['poison', 'grass'],
      caught: false,
      nickname: null,
      description: 'Bulbasaur, the Seed Pokémon, has a plant bulb on its back. It grows into a large plant as it evolves.'
    },
    {
      id:2,
      name: 'ivysaur',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      moves: [],
      types: ['poison', 'grass'],
      caught: false,
      nickname: null,
      description: 'Ivysaur evolves from Bulbasaur and has a fully-grown plant on its back. It is ready to evolve into Venusaur.'
    },
    {
      id:3,
      name: 'venusaur',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      moves: [],
      types: ['poison', 'grass'],
      caught: false,
      nickname: null,
      description: 'Venusaur, the Flower Pokémon, has a huge flower on its back. It absorbs sunlight and uses it for powerful attacks.'
    },
    {
      id:4,
      name: 'venusaur-mega',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png',
      moves: [],
      types: ['poison', 'grass'],
      caught: false,
      nickname: null,
      description: 'Mega Venusaur has an even larger flower on its back and can use its immense power to overwhelm opponents.'
    },
    {
      id:5,
      name: 'charmander',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      moves: [],
      types: ['fire'],
      caught: false,
      nickname: null,
      description: 'Charmander, the Lizard Pokémon, is known for its fiery tail. It can breathe fire and is a popular starter Pokémon.'
    },
    {
      id:6,
      name: 'charmeleon',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      moves: [],
      types: ['fire'],
      caught: false,
      nickname: null,
      description: 'Charmeleon, the Flame Pokémon, evolves from Charmander. It has a fierce temper and its flames burn hotter as it evolves.'
    },
    {
      id:7,
      name: 'charizard',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      moves: [],
      types: ['flying', 'fire'],
      caught: false,
      nickname: null,
      description: 'Charizard, the Flame Pokémon, is a powerful fire and flying type. It can breathe intense fire and fly at high speeds.'
    },
    {
      id:8,
      name: 'charizard-mega-y',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png',
      moves: [],
      types: ['flying', 'fire'],
      caught: false,
      nickname: null,
      description: 'Mega Charizard Y has enhanced firepower and speed. It uses its flames to create intense heat waves.'
    },
    {
      id:9,
      name: 'charizard-mega-x',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png',
      moves: [],
      types: ['dragon', 'fire'],
      caught: false,
      nickname: null,
      description: 'Mega Charizard X gains a dragon type and becomes even more fearsome. Its flames turn blue and it has increased strength.'
    },
    {
      id:10,
      name: 'squirtle',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      moves: [],
      types: ['water'],
      caught: false,
      nickname: null,
      description: 'Squirtle, the Tiny Turtle Pokémon, is known for its ability to shoot water from its shell. It is a classic starter Pokémon.'
    },
    {
      id:11,
      name: 'wartortle',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      moves: [],
      types: ['water'],
      caught: false,
      nickname: null,
      description: 'Wartortle evolves from Squirtle and has stronger water abilities. It is known for its agility and strong swimming skills.'
    },
    {
      id:12,
      name: 'blastoise',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      moves: [],
      types: ['water'],
      caught: false,
      nickname: null,
      description: 'Blastoise, the Shellfish Pokémon, has powerful water cannons on its shell. It uses them to attack with high-pressure water jets.'
    },
    {
      id:13,
      name: 'blastoise-mega',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png',
      moves: [],
      types: ['water'],
      caught: false,
      nickname: null,
      description: 'Mega Blastoise has even more powerful water cannons and a significantly increased battle capability.'
    },
    {
      id:14,
      name: 'caterpie',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      moves: [],
      types: ['bug'],
      caught: false,
      nickname: null,
      description: 'Caterpie, the Worm Pokémon, is known for its ability to evolve quickly. It has a gentle nature and is often seen in forests.'
    },
    {
      id:15,
      name: 'metapod',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
      moves: [],
      types: ['bug'],
      caught: false,
      nickname: null,
      description: 'Metapod is the cocoon stage of Caterpie, where it undergoes metamorphosis to become Butterfree. It is very vulnerable in this stage.'
    },
    {
      id:16,
      name: 'butterfree',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
      moves: [],
      types: ['flying', 'bug'],
      caught: false,
      nickname: null,
      description: 'Butterfree, the Butterfly Pokémon, has beautiful wings that can scatter scales to release sleep-inducing powder.'
    },
    {
      id:17,
      name: 'weedle',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
      moves: [],
      types: ['poison', 'bug'],
      caught: false,
      nickname: null,
      description: 'Weedle, the Hairy Bug Pokémon, has a poison barb on its head that can inflict pain on its enemies.'
    },
    {
      id:18,
      name: 'kakuna',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
      moves: [],
      types: ['poison', 'bug'],
      caught: false,
      nickname: null,
      description: 'Kakuna is the cocoon stage of Weedle, where it is undergoing metamorphosis. It is defenseless and relies on its hard shell for protection.'
    },
    {
      id:19,
      name: 'beedrill',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
      moves: [],
      types: ['poison', 'bug'],
      caught: false,
      nickname: null,
      description: 'Beedrill, the Poison Bee Pokémon, has venomous stingers on its legs and arms. It attacks in swarms to overpower its enemies.'
    },
    {
      id:20,
      name: 'dugtrio',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
      moves: [],
      types: ['ground'],
      caught: false,
      nickname: null,
      description: 'Despite the closeness between this Pokémon and farmers and other people, no one has ever seen the parts of it concealed underground.',
    },
    {
      id:21,
      name: 'meowth',
      picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
      moves: [],
      types: ['normal'],
      caught: false,
      nickname: null,
      description: 'It loves shiny things. It often fights with\nMurkrow over prey they’re both trying to catch.',
    }
  ];

  for (const pokemon of pokemons) {
    await prisma.pokemon.upsert({
      where: { id: pokemon.id },
      update: pokemon,
      create: pokemon,
    });
  }

  console.log('Pokémon data has been seeded.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
