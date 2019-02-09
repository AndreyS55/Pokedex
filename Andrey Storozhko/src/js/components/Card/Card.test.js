import React from 'react';
import Card from './Card';

it('should render a Card with Pikachu', () => {
  const wrapper = shallow(<Card name="pikachu" />);
  expect(wrapper).toMatchSnapshot();
});
