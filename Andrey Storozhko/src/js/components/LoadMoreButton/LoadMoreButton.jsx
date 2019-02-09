import React from 'react';
import styles from './LoadMoreButton.scss';

const LoadMoreButton = props => (
  props.haveMore
    ? <button className={styles.loadMore} onClick={props.handleLoad}>LOAD MORE</button>
    : null
);

export default LoadMoreButton;
