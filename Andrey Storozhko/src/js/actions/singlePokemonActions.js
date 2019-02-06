export const FETCH_SINGLE_POKEMON_REQUEST = 'FETCH_SINGLE_POKEMON_REQUEST';
export const FETCH_SINGLE_POKEMON_SUCCESS = 'FETCH_SINGLE_POKEMON_SUCCESS';
export const FETCH_SINGLE_POKEMON_FAILURE = 'FETCH_SINGLE_POKEMON_FAILURE';
export const UNMOUNT_COMPONENT_SINGLE = 'UNMOUNT_COMPONENT_SINGLE';

const fetchSinglePokemonRequest = () => ({
  type: FETCH_SINGLE_POKEMON_REQUEST
});

const fetchSinglePokemonSuccess = pokemon => ({
  type: FETCH_SINGLE_POKEMON_SUCCESS,
  pokemon
});

const fetchSinglePokemonFailure = error => ({
  type: FETCH_SINGLE_POKEMON_FAILURE,
  error
});

export const fetchSinglePokemon = id => (dispatch) => {
  dispatch(fetchSinglePokemonRequest());
  const url = `http://localhost:3000/pokemons/${id}?_embed=catched`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(pokemon => dispatch(fetchSinglePokemonSuccess(pokemon)))
    .catch(error => dispatch(fetchSinglePokemonFailure(error)));
};

export const unmountComponentSingle = () => (dispatch) => {
  dispatch({ type: UNMOUNT_COMPONENT_SINGLE });
};
