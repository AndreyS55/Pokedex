import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, unmountComponent, loadMore, catchPokemon } from '../../actions/pokemonsActions';
import Card from '../Card/Card';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
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

  render() {
    const { error, isLoading, haveMore, pokemons } = this.props;
    if (error) {
      return <h2>Sorry! There was an error loading the items</h2>
    }

    return (
      <React.Fragment>
        <ul className={styles.pokemons}>
          {pokemons.map(pokemon => (
            <Card key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  catchPokemon={this.props.catchPokemon}
                  catched={pokemon.catched}
                  getInfo={this.getInfo}
            />
          ))}
        </ul>
        <Preloader isLoading={isLoading}/>
        <LoadMoreButton haveMore={haveMore} handleLoad={this.props.loadMore}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.allPokemons.pokemons,
    error: state.allPokemons.error,
    isLoading: state.allPokemons.isLoading,
    limit: state.allPokemons.limit,
    page: state.allPokemons.page,
    haveMore: state.allPokemons.haveMore,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPokemons: (page, limit) => dispatch(fetchPokemons(page, limit)),
  unmountComponent: () => dispatch(unmountComponent()),
  loadMore: () => dispatch(loadMore()),
  catchPokemon: opts => dispatch(catchPokemon(opts))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPokemons);