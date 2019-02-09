export const FETCH_CAUGHT_POKEMONS_REQUEST = 'FETCH_CAUGHT_POKEMONS_REQUEST';
export const FETCH_CAUGHT_POKEMONS_SUCCESS = 'FETCH_CAUGHT_POKEMONS_SUCCESS';
export const FETCH_CAUGHT_POKEMONS_FAILURE = 'FETCH_CAUGHT_POKEMONS_FAILURE';
export const UNMOUNT_COMPONENT_CAUGHT = 'UNMOUNT_COMPONENT_CAUGHT';
export const LOAD_MORE_CAUGHT = 'LOAD_MORE_CAUGHT';

const API_URL = 'http://localhost:3000';

const fetchCaughtPokemonsRequest = () => ({
  type: FETCH_CAUGHT_POKEMONS_REQUEST
});

const fetchCaughtPokemonsSuccess = caughtPokemons => ({
  type: FETCH_CAUGHT_POKEMONS_SUCCESS,
  caughtPokemons
});

const fetchCaughtPokemonsFailure = error => ({
  type: FETCH_CAUGHT_POKEMONS_FAILURE,
  error
});

export const fetchCaughtPokemons = (page, limit) => (dispatch) => {
  dispatch(fetchCaughtPokemonsRequest());
  const url = `${API_URL}/caught?_page=${page}&_limit=${limit}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(caughtPokemons => dispatch(fetchCaughtPokemonsSuccess(caughtPokemons)))
    .catch(error => dispatch(fetchCaughtPokemonsFailure(error)));
};

export const unmountComponentCaught = () => (dispatch) => {
  dispatch({ type: UNMOUNT_COMPONENT_CAUGHT });
};

export const loadMoreCaught = () => (dispatch, getState) => {
  dispatch({ type: LOAD_MORE_CAUGHT });
  const state = getState();
  dispatch(fetchCaughtPokemons(state.caughtPokemons.page, state.caughtPokemons.limit));
};
