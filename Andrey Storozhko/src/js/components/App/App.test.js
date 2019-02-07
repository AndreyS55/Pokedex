import React from 'react';
import App from './App';

it('should render a App', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
