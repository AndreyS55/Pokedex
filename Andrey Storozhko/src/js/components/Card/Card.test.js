import React from 'react';
import Card from './Card';

it('should render a Card', () => {
  const component = shallow(<Card />);
  expect(component).toMatchSnapshot();
});
