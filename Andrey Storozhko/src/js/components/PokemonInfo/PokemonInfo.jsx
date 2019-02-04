import React from 'react';
import { connect } from 'react-redux';
import PokemonImage from "../PokemonImage/PokemonImage";
import { unmountComponentSingle } from '../../actions/singlePokemonActions';

import styles from './PokemonInfo.scss';

class PokemonInfo extends React.Component {
  render() {
    return (
      <div className={styles.pokemonInfo}>
        <div className={styles.poka}>
          <PokemonImage id={this.props.pokemon.id}/>
          <div>ID: {this.props.pokemon.id}</div>
          <div>NAME: {this.props.pokemon.name}</div>
          {this.props.pokemon.catched.length ? <div>STATUS: CATCHED</div> : <div>STATUS: NOT CATCHED</div>}
          {this.props.pokemon.catched.length ? <div>CATCH DATE: {this.props.pokemon.catched[0].date.toLocaleString()}</div> : null}
          <button onClick={this.props.unmountComponentSingle}>CLOSE</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.singlePokemon.pokemon,
    error: state.singlePokemon.error,
    isLoading: state.singlePokemon.isLoading
  };
};

const mapDispatchToProps = (dispatch) => ({
  unmountComponentSingle: () => dispatch(unmountComponentSingle())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonInfo);
