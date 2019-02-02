import React from 'react';
import classNames from 'classnames';
import styles from './Preloader.scss';

const Preloader = (props) => (
  <div className={classNames(styles.preloader, {[styles.isLoading]: props.isLoading})}>
    <div className={styles.loading}>
      <div className={classNames([styles.pokeball, styles.normal])}></div>
      <div className={classNames([styles.pokeball, styles.great])}></div>
      <div className={classNames([styles.pokeball, styles.ultra])}></div>
      <div className={classNames([styles.pokeball, styles.master])}></div>
      <div className={classNames([styles.pokeball, styles.safari])}></div>
    </div>
  </div>
);

export default Preloader;