import React from 'react';
import { connect } from 'react-redux';
import { fetchCatchedPokemons, unmountComponentCatched, loadMoreCatched } from '../../actions/catchedPokemonsActions';
import { fetchSinglePokemon } from "../../actions/singlePokemonActions";
import Card from '../Card/Card';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import Preloader from '../Preloader/Preloader';
import PokemonInfo from '../PokemonInfo/PokemonInfo';
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
      <React.Fragment>
        <ul className={styles.catchedPokemons}>
          {catchedPokemons.map(pokemon => (
            <Card key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  date={pokemon.date}
                  handleOpen={this.handleOpen}
            />
          ))}
        </ul>
        { !catchedPokemons.length && !isLoading ? <h2>You have not catch any pokemon!!!</h2> : null }
        <Preloader isLoading={isLoading}/>
        <LoadMoreButton haveMore={haveMore} handleLoad={this.props.loadMoreCatched}/>
        {this.props.isOpen ? <PokemonInfo /> : null}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    catchedPokemons: state.catchedPokemons.catchedPokemons,
    error: state.catchedPokemons.error,
    isLoading: state.catchedPokemons.isLoading,
    limit: state.catchedPokemons.limit,
    page: state.catchedPokemons.page,
    haveMore: state.catchedPokemons.haveMore,
    isOpen: state.singlePokemon.isOpen
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCatchedPokemons: (page, limit) => dispatch(fetchCatchedPokemons(page, limit)),
  unmountComponentCatched: () => dispatch(unmountComponentCatched()),
  loadMoreCatched: () => dispatch(loadMoreCatched()),
  fetchSinglePokemon: id => dispatch(fetchSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatchedPokemons);