import React from 'react';
import { Link } from 'react-router-dom'

import styles from './NavBar.scss';

const NavBar = () => (
  <nav className={styles.header__nav}>
    <Link to='/' className={styles.nav__all}>All pokemons</Link>
    <Link to='/catched' className={styles.nav__catched}>Catched pokemons</Link>
  </nav>
);

export default NavBar;