import React from 'react';
import CatchButton from '../CatchButton/CatchButton';
import PokemonInfo from '../PokemonInfo/PokemonInfo';
import PokemonImage from '../PokemonImage/PokemonImage';
import { fetchSinglePokemon, unmountComponentSingle } from '../../actions/singlePokemonActions';

import styles from './Card.scss';
import {connect} from "react-redux";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleOpen = () => {
    this.setState({isOpen: !this.state.isOpen})
  };

  render() {
    const { id, name, catchPokemon, date, catched } = this.props;
    return (
      <li className={styles.pokemonsItem}>
        {this.state.isOpen ? <PokemonInfo id={id} handleOpen={this.handleOpen}/> : null}
        <PokemonImage id={id} handleOpen={this.handleOpen}/>
        <div>{ name }</div>
        <CatchButton name={name} id={id} catchPokemon={catchPokemon} date={date} catched={catched}/>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSinglePokemon: (id) => dispatch(fetchSinglePokemon(id)),
  unmountComponentSingle: () => dispatch(unmountComponentSingle())
});

export default connect(null, mapDispatchToProps)(Card);
// export default Card;