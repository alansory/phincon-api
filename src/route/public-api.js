import express from "express";
import pokemonController from "../controller/pokemon-controller.js";
import healthController from "../controller/health-controller.js";

const publicRouter = new express.Router();
publicRouter.get('/api/pokemons', pokemonController.listPokemons);
publicRouter.get('/api/pokemons/:id', pokemonController.getPokemon);
publicRouter.put('/api/pokemons/catch/:id', pokemonController.catchPokemon);
publicRouter.put('/api/pokemons/release/:id', pokemonController.releasePokemon);
publicRouter.put('/api/pokemons/rename/:id', pokemonController.renamePokemon);
publicRouter.get('/ping', healthController.ping);

export {
  publicRouter
}