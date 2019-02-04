import { combineReducers } from 'redux';
import allPokemons from './AllPokemons';
import catchedPokemons from './CatchedPokemons';
import singlePokemon from "./SinglePokemon";

export default combineReducers({
  allPokemons,
  catchedPokemons,
  singlePokemon
});
