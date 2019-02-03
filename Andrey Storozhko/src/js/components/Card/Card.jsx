import React from 'react';
import CatchButton from '../CatchButton/CatchButton';
import PokemonInfo from '../PokemonInfo/PokemonInfo';
import noImage from '../../../img/no-image.png';

import styles from './Card.scss';

const Card = (props) => {
  const imgPath = props.id < 721 ? require(`../../../../pokemons/${props.id}.png`) : noImage;
  return (
    <li className={styles.pokemons__item}>{/*TODO*/}
      {/*<PokemonInfo />*/}
      <img src={imgPath} className={styles.pokemons__image} alt='Pokemon avatar' onClick={props.getInfo}/>
      <div>{ props.name }</div>
      <CatchButton name={props.name} id={props.id} catchPokemon={props.catchPokemon} date={props.date} catched={props.catched}/>
    </li>
  )
};

export default Card;