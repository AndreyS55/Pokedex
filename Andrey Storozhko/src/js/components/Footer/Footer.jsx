import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.pokedexFooter}>
    <div className={styles.footerWrapper}>
      <div className={styles.footerText}>This App was made for EPAM Training</div>
      <Button
        href='https://github.com/AndreyS55/Pokedex'
        size="large"
        color="default"
        variant="contained"
      >
        GitHub
      </Button>
    </div>
  </footer>
);

export default Footer;
