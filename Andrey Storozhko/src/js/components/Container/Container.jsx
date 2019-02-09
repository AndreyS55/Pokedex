import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import AllPokemonsContainer from '../../containers/AllPokemonsContainer';
import CaughtPokemonsContainer from '../../containers/CaughtPokemonsContainer';
import styles from './Container.scss';

const Container = () => (
  <div className={styles.pokedexContainer}>
    <Header />
    <Switch>
      <Route exact path="/" component={AllPokemonsContainer} />
      <Route path="/caught" component={CaughtPokemonsContainer} />
    </Switch>
  </div>
);

export default Container;
