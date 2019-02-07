import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './NavBar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleOpen = () => {
    this.setState({isOpen: !this.state.isOpen})
  };

  render () {
    return (
      <React.Fragment>
        <nav className={classNames(styles.headerNav, {[styles.navIsOpen]: this.state.isOpen})}>
          <NavLink exact to='/' className={classNames(styles.navAll, {[styles.responsive]: this.state.isOpen})}
                   activeClassName={styles.navActive}
          >
            All pokemons
          </NavLink>
          <NavLink to='/caught' className={classNames(styles.navCaught, {[styles.responsive]: this.state.isOpen})}
                   activeClassName={styles.navActive}
          >
            Caught pokemons
          </NavLink>
        </nav>
        <button className={styles.navIcon} onClick={this.handleOpen}>&#9776;</button>
      </React.Fragment>
    );
  }
}

export default NavBar;
