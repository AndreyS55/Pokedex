import { connect } from 'react-redux';
import AllPokemons from '../components/AllPokemons/AllPokemons';
import { catchPokemon, fetchPokemons, loadMore, unmountComponent } from '../actions/allPokemonsActions';
import { fetchSinglePokemon } from '../actions/singlePokemonActions';

const mapStateToProps = state => ({
  pokemons: state.allPokemons.pokemons,
  error: state.allPokemons.error,
  isLoading: state.allPokemons.isLoading,
  limit: state.allPokemons.limit,
  page: state.allPokemons.page,
  haveMore: state.allPokemons.haveMore,
  isOpen: state.singlePokemon.isOpen
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: (page, limit) => dispatch(fetchPokemons(page, limit)),
  unmountComponent: () => dispatch(unmountComponent()),
  loadMore: () => dispatch(loadMore()),
  catchPokemon: opts => dispatch(catchPokemon(opts)),
  fetchSinglePokemon: id => dispatch(fetchSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPokemons);
