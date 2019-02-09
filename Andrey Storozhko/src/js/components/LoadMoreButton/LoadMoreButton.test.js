import React from 'react';
import LoadMoreButton from './LoadMoreButton';

it('should render a LoadMoreButton', () => {
  const wrapper = shallow(<LoadMoreButton />);
  expect(wrapper).toMatchSnapshot();
});
