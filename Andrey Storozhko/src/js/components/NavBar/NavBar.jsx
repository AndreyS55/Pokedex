import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.scss';

const NavBar = () => (
  <nav className={styles.headerNav}>
    <NavLink exact to='/' className={styles.navAll} activeClassName={styles.navActive}>All pokemons</NavLink>
    <NavLink to='/catched' className={styles.navCatched} activeClassName={styles.navActive}>Catched pokemons</NavLink>
  </nav>
);

export default NavBar;
