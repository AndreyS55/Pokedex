import React from 'react';
import Card from '../Card/Card';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import Preloader from '../Preloader/Preloader';
import PokemonInfoContainer from '../../containers/PokemonInfoContainer';
import styles from './CatchedPokemons.scss';

class CatchedPokemons extends React.Component {
  componentDidMount() {
    const { limit, page } = this.props;
    this.props.fetchCatchedPokemons(page, limit);
  }

  componentWillUnmount() {
    this.props.unmountComponentCatched();
  }

  handleOpen = (id) => {
    this.props.fetchSinglePokemon(id)
  };

  render() {
    const { error, isLoading, haveMore, catchedPokemons } = this.props;
    if (error) {
      return <h2>Sorry! There was an error loading the items</h2>
    }

    return (
      <div className={styles.catchedPokemonsWrapper}>
        <ul className={styles.catchedPokemons}>
          {catchedPokemons.map(pokemon => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              date={pokemon.date}
              handleOpen={this.handleOpen}
            />
          ))}
        </ul>
        { !catchedPokemons.length && !isLoading ? <h2 className={styles.notCatched}>You have not catch any pokemon!</h2> : null }
        <Preloader isLoading={isLoading} />
        <LoadMoreButton haveMore={haveMore} handleLoad={this.props.loadMoreCatched} />
        {this.props.isOpen ? <PokemonInfoContainer /> : null}
      </div>
    )
  }
}

export default CatchedPokemons;