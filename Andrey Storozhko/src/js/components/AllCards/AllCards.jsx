import React from 'react';

import styles from './AllCards.scss';

class AllCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/pokemons?_page=1&_limit=20')
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((pokemons) => this.setState(state => state.pokemons = pokemons))
      .catch((error) => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      });
  }

  render() {
    return (
      <ul>
        {this.state.pokemons.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    )
  }
}

export default AllCards;