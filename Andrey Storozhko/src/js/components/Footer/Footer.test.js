import React from 'react';
import Footer from './Footer';

it('should render a Footer', () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});
