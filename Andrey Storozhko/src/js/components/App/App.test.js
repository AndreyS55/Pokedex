import React from 'react';
import App from './App';

it('should render a App', () => {
  const wrapper = shallow(
    <App>Hello</App>
  );
  expect(wrapper).toMatchSnapshot();
});
