import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/Logo.png';
import styles from './Logo.scss';

const Logo = () => (
  <Link to='/' className={styles.logoTitle}>
    <img src={logo} className={styles.headerLogo} alt='logo' />
    <h1 className={styles.title}>Pokedex</h1>
  </Link>
);

export default Logo;