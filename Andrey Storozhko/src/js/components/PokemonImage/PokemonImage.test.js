import React from 'react';
import PokemonImage from './PokemonImage';

it('should render a PokemonImage', () => {
  const component = shallow(<PokemonImage />);
  expect(component).toMatchSnapshot();
});
