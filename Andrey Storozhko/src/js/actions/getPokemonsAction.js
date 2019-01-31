export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';

export const fetchPokemonsRequest = () => ({
  type: FETCH_POKEMONS_REQUEST
});

export const fetchPokemonsSuccess = (pokemons) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: pokemons
});

export const fetchPokemonsFailure = (error) => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: error
});

export const fetchPokemons = (url) => (dispatch) => {
  dispatch(fetchPokemonsRequest());
  fetch(url)
    .then((response) => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((pokemons) => dispatch(fetchPokemonsSuccess(pokemons)))
    .catch((error) => dispatch(fetchPokemonsFailure(error)))
};
