import React from 'react';
import CatchButton from '../CatchButton/CatchButton';
import PokemonImage from '../PokemonImage/PokemonImage';

import styles from './Card.scss';

const Card = (props) => {
  const {id, name, catchPokemon, date, catched} = props;
  return (
    <li className={styles.pokemonsItem} onClick={() => props.handleOpen(id)}>
      <PokemonImage id={id}/>
      <div>{name}</div>
      <CatchButton name={name} id={id} catchPokemon={catchPokemon} date={date} catched={catched}/>
    </li>
  )
};

export default Card;