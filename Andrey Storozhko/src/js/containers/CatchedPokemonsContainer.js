import {connect} from 'react-redux';
import CatchedPokemons from '../components/CatchedPokemons/CatchedPokemons';
import { fetchCatchedPokemons, loadMoreCatched, unmountComponentCatched } from '../actions/catchedPokemonsActions';
import { fetchSinglePokemon } from '../actions/singlePokemonActions';

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
