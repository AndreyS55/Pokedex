import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  fetchPokemons
} from '../../actions/allPokemonsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_POKEMONS_SUCCESS when fetching pokemons has been done', () => {
    fetchMock.getOnce('http://localhost:3000/pokemons?_embed=caught&_page=1&_limit=1', {
      pokemons: [{
        name: 'bulbasaur',
        id: 1,
        caught: [
          {
            name: 'bulbasaur',
            date: '08.02.2019',
            pokemonId: 1,
            id: 1
          }
        ]
      }]
    });

    const expectedActions = [
      { type: FETCH_POKEMONS_REQUEST },
      {
        type: FETCH_POKEMONS_SUCCESS,
        pokemons: {
          pokemons: [{
            name: 'bulbasaur',
            id: 1,
            caught: [{
              name: 'bulbasaur',
              date: '08.02.2019',
              pokemonId: 1,
              id: 1
            }]
          }]
        }
      }
    ];

    const store = mockStore({ pokemons: [] });

    return store.dispatch(fetchPokemons(1, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
