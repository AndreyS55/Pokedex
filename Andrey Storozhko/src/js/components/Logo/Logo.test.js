import React from 'react';
import Logo from './Logo';

it('should render a Logo', () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper).toMatchSnapshot();
});
