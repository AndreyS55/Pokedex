import React from 'react';

import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.pokedex__footer}>
    <a href='https://github.com/AndreyS55/Pokedex' className={styles.footer__button}>GitHub</a>
  </footer>
);

export default Footer;