import pokemonService from "../service/pokemon-service.js";
import response from "../util/response.js";

const listPokemons = async (req, res) => {
  try {
    const result = await pokemonService.listPokemons(req);
    response.successResponse(res, result, 200);
  } catch (err) {
    response.errorResponse(res, err.statusCode || 500, err.message);
  }
}

const getPokemon = async (req, res) => {
  try {
    const result = await pokemonService.getPokemon(req);
    response.successResponse(res, result, 200);
  } catch (err) {
    response.errorResponse(res, err.statusCode || 500, err.message);
  }
}

const catchPokemon = async (req, res) => {
  try {
    const result = await pokemonService.catchPokemon(req);
    response.successResponse(res, result, 200);
  } catch (err) {
    response.errorResponse(res, err.statusCode || 500, err.message);
  }
}

const releasePokemon = async (req, res) => {
  try {
    const result = await pokemonService.releasePokemon(req);
    response.successResponse(res, result, 200);
  } catch (err) {
    response.errorResponse(res, err.statusCode || 500, err.message);
  }
}

const renamePokemon = async (req, res) => {
  try {
    const result = await pokemonService.renamePokemon(req);
    response.successResponse(res, result, 200);
  } catch (err) {
    response.errorResponse(res, err.statusCode || 500, err.message);
  }
}

export default {
  listPokemons,
  getPokemon,
  catchPokemon,
  releasePokemon,
  renamePokemon
}