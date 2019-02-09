import React from 'react';
import PokeballOpen from '../../../img/open.png';
import PokeballClose from '../../../img/close.png';
import styles from './CatchButton.scss';

class CatchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisable: false
    };
  }

  catchPokemon = (e) => {
    const { catchPokemon, name, id } = this.props;
    const { isDisable } = this.state;
    e.stopPropagation();
    this.setState({ isDisable: !isDisable }, catchPokemon({
      name,
      date: new Date().toLocaleDateString(),
      pokemonId: id,
      id
    }));
  };

  render() {
    const { date, caught } = this.props;
    const { isDisable } = this.state;
    return (
      <button
        onClick={this.catchPokemon}
        disabled={isDisable || date || caught.length}
        className={styles.catchButton}
      >
        <div>{isDisable || date || caught.length ? 'Caught' : 'Catch!'}</div>
        <img
          src={isDisable || date || caught.length ? PokeballClose : PokeballOpen}
          className={styles.catchButtonIcon}
          alt="Catch button icon"
        />
      </button>
    );
  }
}

export default CatchButton;
