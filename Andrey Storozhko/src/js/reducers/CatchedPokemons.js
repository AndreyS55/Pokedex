import {
  FETCH_CATCHED_POKEMONS_FAILURE,
  FETCH_CATCHED_POKEMONS_REQUEST,
  FETCH_CATCHED_POKEMONS_SUCCESS,
  UNMOUNT_COMPONENT_CATCHED,
  LOAD_MORE_CATCHED
} from '../actions/catchedPokemonsActions';

const initialState = {
  catchedPokemons: [],
  isLoading: false,
  error: null,
  limit: 50,
  page: 1,
  haveMore: null
};

const catchedPokemons = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATCHED_POKEMONS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_CATCHED_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        catchedPokemons: [...state.catchedPokemons, ...action.catchedPokemons],
        haveMore: action.catchedPokemons.length >= state.limit
      };

    case FETCH_CATCHED_POKEMONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case UNMOUNT_COMPONENT_CATCHED:
      return {
        ...state,
        catchedPokemons: [],
        isLoading: false,
        error: null,
        page: 1,
        haveMore: null
      };

    case LOAD_MORE_CATCHED:
      return {
        ...state,
        page: state.page + 1
      };

    default:
      return state;
  }
};

export default catchedPokemons;
