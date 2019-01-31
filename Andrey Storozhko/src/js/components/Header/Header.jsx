import React from 'react';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

import styles from './Header.scss';

const Header = () => (
  <header className={styles.pokedex__header}>
    <Logo />
    <NavBar />
  </header>
);

export default Header;