import React from 'react';
import { connect } from 'react-redux';
import PokemonImage from '../PokemonImage/PokemonImage';
import { unmountComponentSingle } from '../../actions/singlePokemonActions';

import styles from './PokemonInfo.scss';

class PokemonInfo extends React.Component {
  handleClose = (e) => {
    e.stopPropagation();
    this.props.unmountComponentSingle();
  };

  openNext = () => {
    this.props.handleOpen(this.props.pokemon.id + 1);
  };

  render() {
    const { pokemon } = this.props;
    return (
      <div className={styles.pokemonInfo} onClick={this.handleClose}>
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
            {pokemon.catched.length ? <div><span className={styles.infoHead}>STATUS: </span>CATCHED</div> : <div><span className={styles.infoHead}>STATUS: </span>NOT CATCHED</div>}
            {pokemon.catched.length ? <div><span className={styles.infoHead}>CATCH DATE: </span>{pokemon.catched[0].date}</div> : null}
          </div>
          <button onClick={this.handleClose} className={styles.pokemonCloseButton}>&#10060;</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.singlePokemon.pokemon,
  error: state.singlePokemon.error,
  isLoading: state.singlePokemon.isLoading
});

const mapDispatchToProps = dispatch => ({
  unmountComponentSingle: () => dispatch(unmountComponentSingle())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonInfo);
