import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, unmountComponent, loadMore } from '../../actions/pokemonsActions';
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

  handleLoad = () => {
    this.props.loadMore();
  };

  render() {
    const { error, isLoading, haveMore } = this.props;
    if (error) {
      return <h2>Sorry! There was an error loading the items</h2>
    }

    return (
      <React.Fragment>
        <ul className={styles.pokemons}>
          {this.props.pokemons.map(pokemon => (
            <Card key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
            />
          ))}
        </ul>
        <Preloader isLoading={isLoading}/>
        <LoadMoreButton haveMore={haveMore} handleLoad={this.handleLoad}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.items,
    error: state.pokemons.error,
    isLoading: state.pokemons.isLoading,
    limit: state.pokemons.limit,
    page: state.pokemons.page,
    haveMore: state.pokemons.haveMore
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPokemons: (page, limit) => dispatch(fetchPokemons(page, limit)),
  unmountComponent: () => dispatch(unmountComponent()),
  loadMore: () => dispatch(loadMore())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPokemons);