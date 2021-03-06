import React from 'react';
import Card from '../Card/Card';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import PokemonInfoContainer from '../../containers/PokemonInfoContainer';
import Preloader from '../Preloader/Preloader';
import styles from './AllPokemons.scss';

class AllPokemons extends React.Component {
  componentDidMount() {
    const { limit, page, fetchPokemons } = this.props;
    fetchPokemons(page, limit);
  }

  componentWillUnmount() {
    const { unmountComponent } = this.props;
    unmountComponent();
  }

  handleOpen = (id) => {
    const { fetchSinglePokemon } = this.props;
    fetchSinglePokemon(id);
  };

  render() {
    const {
      error, isLoading, haveMore, pokemons, isOpen, catchPokemon, loadMore
    } = this.props;
    if (error) {
      return (
        <h2 className={styles.allPokemonsError}>Sorry! There was an error loading the items</h2>
      );
    }

    return (
      <div className={styles.allPokemonsWrapper}>
        <ul className={styles.pokemons}>
          {Array.isArray(pokemons) && pokemons.map(pokemon => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              catchPokemon={catchPokemon}
              caught={pokemon.caught}
              handleOpen={this.handleOpen}
            />
          ))}
        </ul>
        <Preloader isLoading={isLoading} />
        <LoadMoreButton haveMore={haveMore} handleLoad={loadMore} />
        {isOpen ? <PokemonInfoContainer /> : null}
      </div>
    );
  }
}

export default AllPokemons;
