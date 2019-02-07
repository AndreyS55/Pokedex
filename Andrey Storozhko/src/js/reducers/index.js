import { combineReducers } from 'redux';
import allPokemons from './AllPokemons';
import caughtPokemons from './CaughtPokemons';
import singlePokemon from './SinglePokemon';

export default combineReducers({
  allPokemons,
  caughtPokemons,
  singlePokemon
});
