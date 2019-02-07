import {
  FETCH_CAUGHT_POKEMONS_FAILURE,
  FETCH_CAUGHT_POKEMONS_REQUEST,
  FETCH_CAUGHT_POKEMONS_SUCCESS,
  UNMOUNT_COMPONENT_CAUGHT,
  LOAD_MORE_CAUGHT
} from '../actions/caughtPokemonsActions';

const initialState = {
  caughtPokemons: [],
  isLoading: false,
  error: null,
  limit: 48,
  page: 1,
  haveMore: null
};

const caughtPokemons = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAUGHT_POKEMONS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_CAUGHT_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        caughtPokemons: [...state.caughtPokemons, ...action.caughtPokemons],
        haveMore: action.caughtPokemons.length >= state.limit
      };

    case FETCH_CAUGHT_POKEMONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case UNMOUNT_COMPONENT_CAUGHT:
      return {
        ...state,
        caughtPokemons: [],
        isLoading: false,
        error: null,
        page: 1,
        haveMore: null
      };

    case LOAD_MORE_CAUGHT:
      return {
        ...state,
        page: state.page + 1
      };

    default:
      return state;
  }
};

export default caughtPokemons;
