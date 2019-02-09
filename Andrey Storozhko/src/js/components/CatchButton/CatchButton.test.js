import React from 'react';
import CatchButton from './CatchButton';

it('should render a CatchButton', () => {
  const wrapper = shallow(<CatchButton caught={
    [
      {
        name: 'bulbasaur',
        date: '08.02.2019',
        pokemonId: 1,
        id: 1
      }
    ]
  }
  />);
  expect(wrapper).toMatchSnapshot();
});
