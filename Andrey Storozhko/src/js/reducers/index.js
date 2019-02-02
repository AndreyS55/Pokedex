import { combineReducers } from 'redux';
import pokemons from './Pokemons';
import catchedPokemons from './CatchedPokemons';

export default combineReducers({
  pokemons,
  catchedPokemons
});
