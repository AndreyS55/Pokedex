import React from 'react';
import { Link } from 'react-router-dom'

import styles from './NavBar.scss';

const NavBar = () => (
  <nav className={styles.header__nav}>
    <Link to='/'>All pokemons</Link>
    <Link to='/catched'>Catched pokemons</Link>
  </nav>
);

export default NavBar;