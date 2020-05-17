import React, { Component } from 'react';
import BurgerMenu from './Burger';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  toggleNavbar = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <header>
        <nav className='navbar'>
          <span className='navbar-toggle' onClick={this.toggleNavbar}>
            <BurgerMenu />
          </span>
          <a href='/' className='logo'>
            Kovács Krisztián
          </a>
          <ul className={this.state.isActive ? 'main-nav active' : 'main-nav'}>
            <li>
              <a href='/' className='nav-links'>
                Bla
              </a>
            </li>
            <li>
              <a href='/' className='nav-links'>
                Bla
              </a>
            </li>
            <li>
              <a href='/' className='nav-links'>
                BlaBlaBla
              </a>
            </li>
            <li>
              <a href='/' className='nav-links'>
                BlaBlaBla
              </a>
            </li>
            <li>
              <a href='/' className='nav-links'>
                Blabla
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
