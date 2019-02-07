import { connect } from 'react-redux';
import CaughtPokemons from '../components/CaughtPokemons/CaughtPokemons';
import { fetchCaughtPokemons, unmountComponentCaught, loadMoreCaught } from '../actions/caughtPokemonsActions';
import { fetchSinglePokemon } from '../actions/singlePokemonActions';

const mapStateToProps = state => ({
  caughtPokemons: state.caughtPokemons.caughtPokemons,
  error: state.caughtPokemons.error,
  isLoading: state.caughtPokemons.isLoading,
  limit: state.caughtPokemons.limit,
  page: state.caughtPokemons.page,
  haveMore: state.caughtPokemons.haveMore,
  isOpen: state.singlePokemon.isOpen
});

const mapDispatchToProps = dispatch => ({
  fetchCaughtPokemons: (page, limit) => dispatch(fetchCaughtPokemons(page, limit)),
  unmountComponentCaught: () => dispatch(unmountComponentCaught()),
  loadMoreCaught: () => dispatch(loadMoreCaught()),
  fetchSinglePokemon: id => dispatch(fetchSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CaughtPokemons);
