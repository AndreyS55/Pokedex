import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  UNMOUNT_COMPONENT,
  LOAD_MORE
} from '../actions/pokemonsActions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  limit: 10,
  page: 1,
  haveMore: null
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items, ...action.pokemons],
        haveMore: action.pokemons.length >= state.limit
      };

    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case UNMOUNT_COMPONENT:
      return {
        ...state,
        items: [],
        isLoading: false,
        error: null,
        page: 1,
        haveMore: null
      };

    case LOAD_MORE:
      return {
        ...state,
        page: state.page + 1
      };

    default:
      return state;
  }
};

export default pokemons;
