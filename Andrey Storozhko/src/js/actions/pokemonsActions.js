export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';
export const UNMOUNT_COMPONENT = 'UNMOUNT_COMPONENT';
export const LOAD_MORE = 'LOAD_MORE';

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

export const fetchPokemons = (page, limit) => (dispatch) => {
  dispatch(fetchPokemonsRequest());
  const url = `http://localhost:3000/pokemons?_page=${page}&_limit=${limit}`;
  fetch(url)
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
  dispatch(fetchPokemons(state.pokemons.page, state.pokemons.limit));
};