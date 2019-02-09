import React from 'react';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.pokedexHeader}>
    <div className={styles.headerWrapper}>
      <Logo />
      <NavBar />
    </div>
  </header>
);

export default Header;
