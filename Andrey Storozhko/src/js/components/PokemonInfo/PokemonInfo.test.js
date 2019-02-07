import React from 'react';
import PokemonInfo from './PokemonInfo';

it('should render a PokemonInfo', () => {
  const component = shallow(<PokemonInfo />);
  expect(component).toMatchSnapshot();
});
