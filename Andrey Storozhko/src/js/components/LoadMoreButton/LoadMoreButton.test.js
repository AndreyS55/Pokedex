import React from 'react';
import LoadMoreButton from './LoadMoreButton';

it('should render a LoadMoreButton', () => {
  const component = shallow(<LoadMoreButton />);
  expect(component).toMatchSnapshot();
});
