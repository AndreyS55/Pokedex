import React from 'react';
import PokemonInfo from './PokemonInfo';

it('should render a PokemonInfo', () => {
  const wrapper = shallow(<PokemonInfo pokemon={
    {
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
    }
  }
  />);
  expect(wrapper).toMatchSnapshot();
});
