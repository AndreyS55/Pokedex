import React from 'react';
import { connect } from "react-redux";
import { fetchPokemons } from '../../actions/getPokemonsAction';
import Card from '../Card/Card';
import styles from './AllPokemons.scss';

class AllPokemons extends React.Component {
  componentDidMount() {
    this.props.fetchPokemons('http://localhost:3000/pokemons?_page=1&_limit=100')
  }

  render() {
    if(this.props.error) {
      return <h2>Sorry! There was an error loading the items</h2>
    }

    if(this.props.isLoading) {
      return <h2>LOADING...</h2>
    }

    return (
      <ul className={styles.pokemons}>
        {this.props.pokemons.map(pokemon => (
          <Card key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
          />
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.items,
    error: state.pokemons.error,
    isLoading: state.pokemons.isLoading
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPokemons: (url) => dispatch(fetchPokemons(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPokemons);