import React from 'react';
import Header from './Header';

it('should render a Header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
