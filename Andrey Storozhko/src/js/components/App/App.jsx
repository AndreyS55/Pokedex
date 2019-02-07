import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../configs/configureStore';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';

import styles from './App.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <main className={styles.pokedex}>
        <Container />
        <Footer />
      </main>
    </HashRouter>
  </Provider>
);

export default App;
