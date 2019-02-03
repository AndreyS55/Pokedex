import React from 'react';
import noImage from '../../../img/no-image.png';

import styles from './PokemonImage.scss';

const PokemonImage = (props) => {
  const imgPath = props.id < 721 ? require(`../../../../pokemons/${props.id}.png`) : noImage;
  return <img src={imgPath} className={styles.pokemonImage} alt='Pokemon avatar' onClick={props.handleOpen}/>
};

export default PokemonImage;