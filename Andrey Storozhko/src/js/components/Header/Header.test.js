import React from 'react';
import Header from './Header';

it('should render a Header', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
