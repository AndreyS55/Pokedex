import React from 'react';
import noImage from '../../../img/no-image.png';

import styles from './Card.scss';

const Card = (props) => {
  const catchPokemon = () => {
    props.catchPokemon({
      pokemonsId: props.id,
      date: new Date()
    });
  };

  const compare = props.catched.some(item => item.pokemonsId === props.id);
  const imgPath = props.id < 721 ? require(`../../../../pokemons/${props.id}.png`) : noImage;

  return (
    <li className={styles.pokemons__item}>{/*TODO*/}
      <img src={imgPath} className={styles.pokemons__image} alt='Pokemon avatar'/>
      <div>{ props.name }</div>
      <button onClick={catchPokemon} disabled={compare}>Catch!</button>
    </li>
  )
};

export default Card;