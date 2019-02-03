import {
  FETCH_SINGLE_POKEMON_FAILURE,
  FETCH_SINGLE_POKEMON_REQUEST,
  FETCH_SINGLE_POKEMON_SUCCESS,
  UNMOUNT_COMPONENT_SINGLE
} from "../actions/singlePokemonActions";

const initialState = {
  pokemon: {},
  isLoading: false,
  error: null
};

const singlePokemon = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_SINGLE_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemon: action.pokemon
      };

    case FETCH_SINGLE_POKEMON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case UNMOUNT_COMPONENT_SINGLE:
      return {
        ...state,
        pokemon: {},
        isLoading: false,
        error: null
      };

    default:
      return state;
  }
};

export default singlePokemon;
