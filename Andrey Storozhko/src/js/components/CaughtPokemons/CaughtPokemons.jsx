import React from 'react';
import Card from '../Card/Card';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import Preloader from '../Preloader/Preloader';
import PokemonInfoContainer from '../../containers/PokemonInfoContainer';
import styles from './CaughtPokemons.scss';

class CaughtPokemons extends React.Component {
  componentDidMount() {
    const { limit, page, fetchCaughtPokemons } = this.props;
    fetchCaughtPokemons(page, limit);
  }

  componentWillUnmount() {
    const { unmountComponentCaught } = this.props;
    unmountComponentCaught();
  }

  handleOpen = (id) => {
    const { fetchSinglePokemon } = this.props;
    fetchSinglePokemon(id);
  };

  render() {
    const {
      error, isLoading, haveMore, caughtPokemons, loadMoreCaught, isOpen
    } = this.props;
    if (error) {
      return <h2>Sorry! There was an error loading the items</h2>;
    }

    return (
      <div className={styles.caughtPokemonsWrapper}>
        <ul className={styles.caughtPokemons}>
          {Array.isArray(caughtPokemons) && caughtPokemons.map(pokemon => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              date={pokemon.date}
              handleOpen={this.handleOpen}
            />
          ))}
        </ul>
        {!caughtPokemons.length && !isLoading
          ? <h2 className={styles.notCaught}>You have not catch any pokemon!</h2>
          : null}
        <Preloader isLoading={isLoading} />
        <LoadMoreButton haveMore={haveMore} handleLoad={loadMoreCaught} />
        {isOpen ? <PokemonInfoContainer /> : null}
      </div>
    );
  }
}

export default CaughtPokemons;
