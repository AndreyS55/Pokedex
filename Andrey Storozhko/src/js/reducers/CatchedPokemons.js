import { POST_POKEMONS_SUCCESS } from '../actions/pokemonsActions';

const catchedPokemons = (state = [], action) => {
  switch (action.type) {
    case POST_POKEMONS_SUCCESS:
      return [
        ...state,
        action.data
      ];

    default:
      return state;
  }
};

export default catchedPokemons;