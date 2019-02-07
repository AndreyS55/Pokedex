import React from 'react';
import Preloader from './Preloader';

it('should render a Preloader', () => {
  const component = shallow(<Preloader />);
  expect(component).toMatchSnapshot();
});
