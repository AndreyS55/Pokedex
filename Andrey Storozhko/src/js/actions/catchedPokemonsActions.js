export const FETCH_CATCHED_POKEMONS_REQUEST = 'FETCH_CATCHED_POKEMONS_REQUEST';
export const FETCH_CATCHED_POKEMONS_SUCCESS = 'FETCH_CATCHED_POKEMONS_SUCCESS';
export const FETCH_CATCHED_POKEMONS_FAILURE = 'FETCH_CATCHED_POKEMONS_FAILURE';
export const UNMOUNT_COMPONENT_CATCHED = 'UNMOUNT_COMPONENT_CATCHED';
export const LOAD_MORE_CATCHED = 'LOAD_MORE_CATCHED';

const fetchCatchedPokemonsRequest = () => ({
  type: FETCH_CATCHED_POKEMONS_REQUEST
});

const fetchCatchedPokemonsSuccess = catchedPokemons => ({
  type: FETCH_CATCHED_POKEMONS_SUCCESS,
  catchedPokemons
});

const fetchCatchedPokemonsFailure = error => ({
  type: FETCH_CATCHED_POKEMONS_FAILURE,
  error
});

export const fetchCatchedPokemons = (page, limit) => (dispatch) => {
  dispatch(fetchCatchedPokemonsRequest());
  const url = `http://localhost:3000/catched?_page=${page}&_limit=${limit}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(catchedPokemons => dispatch(fetchCatchedPokemonsSuccess(catchedPokemons)))
    .catch(error => dispatch(fetchCatchedPokemonsFailure(error)));
};

export const unmountComponentCatched = () => (dispatch) => {
  dispatch({ type: UNMOUNT_COMPONENT_CATCHED });
};

export const loadMoreCatched = () => (dispatch, getState) => {
  dispatch({ type: LOAD_MORE_CATCHED });
  const state = getState();
  dispatch(fetchCatchedPokemons(state.catchedPokemons.page, state.catchedPokemons.limit));
};
