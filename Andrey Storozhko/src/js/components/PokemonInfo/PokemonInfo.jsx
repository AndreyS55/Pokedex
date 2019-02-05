import React from 'react';
import { connect } from 'react-redux';
import PokemonImage from '../PokemonImage/PokemonImage';
import { unmountComponentSingle } from '../../actions/singlePokemonActions';

import styles from './PokemonInfo.scss';

class PokemonInfo extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className={styles.pokemonInfo}>
        <div className={styles.pokemon}>
          <PokemonImage id={pokemon.id} />
          <div>ID: {pokemon.id}</div>
          <div>NAME: {pokemon.name.toUpperCase()}</div>
          {pokemon.catched.length ? <div>STATUS: CATCHED</div> : <div>STATUS: NOT CATCHED</div>}
          {pokemon.catched.length ? <div>CATCH DATE: {pokemon.catched[0].date}</div> : null}
          <button onClick={this.props.unmountComponentSingle}>CLOSE</button>
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
