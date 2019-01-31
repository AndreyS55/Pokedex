import React from 'react';

import styles from './Card.scss';

const Card = (props) => {
  const imgPath = require(`../../../../pokemons/${props.id}.png`)
  return (
    <li className={styles.pokemons__item}>
      <img src={imgPath} className={styles.pokemons__image} alt='Pokemon avatar'/>
      <div>{ props.name }</div>
    </li>
  )
};

export default Card;