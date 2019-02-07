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
    e.stopPropagation();
    this.setState({ isDisable: !this.state.isDisable }, this.props.catchPokemon({
      name: this.props.name,
      date: new Date().toLocaleDateString(),
      pokemonId: this.props.id,
      id: this.props.id
    }));
  };

  render() {
    const { date, caught } = this.props;
    return (
      <button
        onClick={this.catchPokemon}
        disabled={this.state.isDisable || date || caught.length}
        className={styles.catchButton}
      >
        <div className={styles.catchButtonText}>{this.state.isDisable || date || caught.length ? 'Caught' : 'Catch!'}</div>
        <img
          src={this.state.isDisable || date || caught.length ? PokeballClose : PokeballOpen}
          className={styles.catchButtonIcon}
          alt="Catch button icon"
        />
      </button>
    );
  }
}

export default CatchButton;
