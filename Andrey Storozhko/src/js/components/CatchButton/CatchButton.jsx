import React from 'react';

class CatchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisable: false
    }
  }

  catchPokemon = () => {
    this.setState({isDisable: !this.state.isDisable}, this.props.catchPokemon(
      {
        name: this.props.name,
        date: new Date(),
        pokemonId: this.props.id,
        id: this.props.id
      })
    )
  };

  render() {
    return (
      <button onClick={this.catchPokemon} disabled={this.state.isDisable || this.props.date || this.props.catched.length}>Catch!</button>
    )
  }
}

export default CatchButton;