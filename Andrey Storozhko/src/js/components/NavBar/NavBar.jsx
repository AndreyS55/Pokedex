import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './NavBar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <nav className={classNames(styles.headerNav, { [styles.navIsOpen]: isOpen })}>
          <NavLink
            exact to="/"
            className={classNames(styles.navAll, { [styles.responsive]: isOpen })}
            activeClassName={styles.navActive}
            onClick={isOpen ? this.handleOpen : null}
          >
            All pokemons
          </NavLink>
          <NavLink
            to="/caught"
            className={classNames(styles.navCaught, { [styles.responsive]: isOpen })}
            activeClassName={styles.navActive}
            onClick={isOpen ? this.handleOpen : null}
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
