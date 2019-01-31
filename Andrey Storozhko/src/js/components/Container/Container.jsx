import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';
import AllCards from '../AllCards/AllCards';
import CatchedCards from '../CatchedCards/CatchedCards';

import styles from './Container.scss';

const Container = () => (
  <div className={styles.pokedex__container}>
    <Header />
    <Switch>
      <Route exact path="/" component={AllCards} />
      <Route path="/catched" component={CatchedCards}/>
    </Switch>
  </div>
);

export default Container;