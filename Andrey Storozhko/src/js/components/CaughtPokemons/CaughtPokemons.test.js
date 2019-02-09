import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  FETCH_CAUGHT_POKEMONS_REQUEST,
  FETCH_CAUGHT_POKEMONS_SUCCESS,
  fetchCaughtPokemons
} from '../../actions/caughtPokemonsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_CAUGHT_POKEMONS_SUCCESS when fetching pokemons has been done', () => {
    fetchMock.getOnce('http://localhost:3000/caught?_page=1&_limit=1', {
      caughtPokemons: [{
        name: 'bulbasaur',
        date: '08.02.2019',
        pokemonId: 1,
        id: 1
      }]
    });

    const expectedActions = [
      { type: FETCH_CAUGHT_POKEMONS_REQUEST },
      {
        type: FETCH_CAUGHT_POKEMONS_SUCCESS,
        caughtPokemons: {
          caughtPokemons: [{
            name: 'bulbasaur',
            date: '08.02.2019',
            pokemonId: 1,
            id: 1
          }]
        }
      }
    ];

    const store = mockStore({ caughtPokemons: [] });

    return store.dispatch(fetchCaughtPokemons(1, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
