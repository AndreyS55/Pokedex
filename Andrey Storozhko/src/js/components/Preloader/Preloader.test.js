import React from 'react';
import Preloader from './Preloader';

it('should render a Preloader', () => {
  const wrapper = shallow(<Preloader />);
  expect(wrapper).toMatchSnapshot();
});
