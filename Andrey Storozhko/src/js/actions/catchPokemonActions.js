export const POST_POKEMONS_REQUEST = 'POST_POKEMONS_REQUEST';
export const POST_POKEMONS_SUCCESS = 'POST_POKEMONS_SUCCESS';
export const POST_POKEMONS_FAILURE = 'POST_POKEMONS_FAILURE';

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

export const catchPokemon = opts => (dispatch) => {
  dispatch(postPokemonsRequest());
  fetch('http://localhost:3000/catched', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(opts)
  })
    .then(response => response.json())
    .then(data => dispatch(postPokemonsSuccess(data)))
    .catch(error => dispatch(postPokemonsFailure(error)));
};
