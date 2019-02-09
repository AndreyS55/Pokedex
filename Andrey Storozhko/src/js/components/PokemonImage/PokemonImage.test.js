import React from 'react';
import PokemonImage from './PokemonImage';

it('should render a PokemonImage', () => {
  const wrapper = shallow(<PokemonImage />);
  expect(wrapper).toMatchSnapshot();
});
