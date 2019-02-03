import { combineReducers } from 'redux';
import allPokemons from './AllPokemons';
import catchedPokemons from './CatchedPokemons';

export default combineReducers({
  allPokemons,
  catchedPokemons
});
