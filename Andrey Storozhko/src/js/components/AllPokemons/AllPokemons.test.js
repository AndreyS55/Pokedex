import React from 'react';
import AllPokemons from './AllPokemons';

it('should render a AllPokemons', () => {
  const component = shallow(<AllPokemons />);
  expect(component).toMatchSnapshot();
});
