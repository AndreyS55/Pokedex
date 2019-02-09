import React from 'react';
import PokemonImage from '../PokemonImage/PokemonImage';
import styles from './PokemonInfo.scss';

class PokemonInfo extends React.Component {
  handleClose = () => {
    const { unmountComponentSingle } = this.props;
    unmountComponentSingle();
  };

  render() {
    const { pokemon } = this.props;
    return (
      <div className={styles.pokemonInfo}>
        <div className={styles.pokemon}>
          <figure className={styles.singlePokemonImage}>
            <PokemonImage id={pokemon.id} />
          </figure>
          <div className={styles.infoText}>
            <div>
              <span className={styles.infoHead}>ID: </span>
              {pokemon.id}
            </div>
            <div>
              <span className={styles.infoHead}>NAME: </span>
              {pokemon.name.toUpperCase()}
            </div>
            {
              pokemon.caught.length
                ? <div>
                    <span className={styles.infoHead}>STATUS: </span>
                    CAUGHT
                  </div>
                : <div><span className={styles.infoHead}>STATUS: </span>NOT CAUGHT</div>
            }
            {
              pokemon.caught.length
                ? <div>
                    <span className={styles.infoHead}>CATCH DATE: </span>
                    {pokemon.caught[0].date}
                  </div>
                : null
            }
          </div>
          <button onClick={this.handleClose} className={styles.pokemonCloseButton}>&#10060;</button>
        </div>
      </div>
    );
  }
}

export default PokemonInfo;
