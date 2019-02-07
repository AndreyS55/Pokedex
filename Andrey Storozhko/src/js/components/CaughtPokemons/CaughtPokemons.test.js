import React from 'react';
import CaughtPokemons from './CaughtPokemons';

it('should render a CaughtPokemons', () => {
  const component = shallow(<CaughtPokemons />);
  expect(component).toMatchSnapshot();
});
