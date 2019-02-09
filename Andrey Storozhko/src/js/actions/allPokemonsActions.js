export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';
export const UNMOUNT_COMPONENT = 'UNMOUNT_COMPONENT';
export const LOAD_MORE = 'LOAD_MORE';
export const POST_POKEMONS_REQUEST = 'POST_POKEMONS_REQUEST';
export const POST_POKEMONS_SUCCESS = 'POST_POKEMONS_SUCCESS';
export const POST_POKEMONS_FAILURE = 'POST_POKEMONS_FAILURE';

const API_URL = 'http://localhost:3000';

const fetchPokemonsRequest = () => ({
  type: FETCH_POKEMONS_REQUEST
});

const fetchPokemonsSuccess = pokemons => ({
  type: FETCH_POKEMONS_SUCCESS,
  pokemons
});

const fetchPokemonsFailure = error => ({
  type: FETCH_POKEMONS_FAILURE,
  error
});

const postPokemonsRequest = () => ({
  type: POST_POKEMONS_REQUEST
});

const postPokemonsSuccess = data => ({
  type: POST_POKEMONS_SUCCESS,
  data
});

const postPokemonsFailure = error => ({
  type: POST_POKEMONS_FAILURE,
  error
});

export const fetchPokemons = (page, limit) => (dispatch) => {
  dispatch(fetchPokemonsRequest());
  const url = `${API_URL}/pokemons?_embed=caught&_page=${page}&_limit=${limit}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(pokemons => dispatch(fetchPokemonsSuccess(pokemons)))
    .catch(error => dispatch(fetchPokemonsFailure(error)));
};

export const unmountComponent = () => (dispatch) => {
  dispatch({ type: UNMOUNT_COMPONENT });
};

export const loadMore = () => (dispatch, getState) => {
  dispatch({ type: LOAD_MORE });
  const state = getState();
  dispatch(fetchPokemons(state.allPokemons.page, state.allPokemons.limit));
};

export const catchPokemon = opts => (dispatch) => {
  dispatch(postPokemonsRequest());
  fetch(`${API_URL}/caught`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(opts)
  })
    .then(response => response.json())
    .then(data => dispatch(postPokemonsSuccess(data)))
    .catch(error => dispatch(postPokemonsFailure(error)));
};
