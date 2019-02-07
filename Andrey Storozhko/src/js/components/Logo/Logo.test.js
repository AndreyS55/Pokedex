import React from 'react';
import Logo from './Logo';

it('should render a Logo', () => {
  const component = shallow(<Logo />);
  expect(component).toMatchSnapshot();
});
