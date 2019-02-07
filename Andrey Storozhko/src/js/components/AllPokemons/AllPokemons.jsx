import React from 'react';
import Card from '../Card/Card';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import PokemonInfoContainer from '../../containers/PokemonInfoContainer';
import Preloader from '../Preloader/Preloader';
import styles from './AllPokemons.scss';

class AllPokemons extends React.Component {
  componentDidMount() {
    const { limit, page } = this.props;
    this.props.fetchPokemons(page, limit);
  }

  componentWillUnmount() {
    this.props.unmountComponent();
  }

  handleOpen = id => {
    this.props.fetchSinglePokemon(id);
  };

  render() {
    const { error, isLoading, haveMore, pokemons, isOpen } = this.props;
    if (error) {
      return <h2 className={styles.allPokemonsError}>Sorry! There was an error loading the items</h2>;
    }

    return (
      <div className={styles.allPokemonsWrapper}>
        <ul className={styles.pokemons}>
          {pokemons.map(pokemon => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              catchPokemon={this.props.catchPokemon}
              caught={pokemon.caught}
              handleOpen={this.handleOpen}
            />
          ))}
        </ul>
        <Preloader isLoading={isLoading} />
        <LoadMoreButton haveMore={haveMore} handleLoad={this.props.loadMore} />
        {isOpen ? <PokemonInfoContainer /> : null}
      </div>
    );
  }
}

export default AllPokemons;
