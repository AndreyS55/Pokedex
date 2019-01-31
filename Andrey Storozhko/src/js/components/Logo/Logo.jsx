import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../../img/Logo.png';
import styles from './Logo.scss';

const Logo = () => (
  <Link to='/'>
    <img src={logo} className={styles.header__logo} alt="logo"/>
  </Link>
);

export default Logo;