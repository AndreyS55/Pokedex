import { connect } from 'react-redux';
import PokemonInfo from '../components/PokemonInfo/PokemonInfo';
import { unmountComponentSingle } from '../actions/singlePokemonActions';

const mapStateToProps = state => ({
  pokemon: state.singlePokemon.pokemon,
  error: state.singlePokemon.error,
  isLoading: state.singlePokemon.isLoading
});

const mapDispatchToProps = dispatch => ({
  unmountComponentSingle: () => dispatch(unmountComponentSingle())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonInfo);
