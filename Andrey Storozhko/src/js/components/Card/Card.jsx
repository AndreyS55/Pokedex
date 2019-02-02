import React from 'react';
import noImage from '../../../img/no-image.png';

import styles from './Card.scss';

const Card = (props) => {
  const imgPath = props.id < 721 ? require(`../../../../pokemons/${props.id}.png`) : noImage;
  return (
    <li className={styles.pokemons__item}>{/*TODO*/}
      <img src={imgPath} className={styles.pokemons__image} alt='Pokemon avatar'/>
      <div>{ props.name }</div>
      <button>Catch!</button>
    </li>
  )
};

export default Card;