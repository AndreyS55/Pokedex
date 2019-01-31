import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';
import AllPokemons from '../AllPokemons/AllPokemons';
import CatchedPokemons from '../CatchedPokemons/CatchedPokemons';

import styles from './Container.scss';

const Container = () => (
  <div className={styles.pokedex__container}>
    <Header />
    <Switch>
      <Route exact path="/" component={AllPokemons} />
      <Route path="/catched" component={CatchedPokemons}/>
    </Switch>
  </div>
);

export default Container;