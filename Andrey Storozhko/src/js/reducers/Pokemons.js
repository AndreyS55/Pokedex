import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE
} from '../actions/getPokemonsAction';

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };

    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default pokemons;