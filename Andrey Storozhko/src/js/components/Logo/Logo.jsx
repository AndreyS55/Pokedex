import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/Logo.png';
import styles from './Logo.scss';

const Logo = () => (
  <Link to="/" className={styles.headerLogo}>
    <img src={logo} className={styles.logoIcon} alt="logo" />
    <h1 className={styles.logoTitle}>Pokedex</h1>
  </Link>
);

export default Logo;
