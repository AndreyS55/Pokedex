import React from 'react';
import Footer from './Footer';

it('should render a Footer', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
