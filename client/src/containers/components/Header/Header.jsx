import React, { Component } from 'react';
import './Header.css';
import hamburger from './hamburger.png';
import option from './option.png';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
    this._openMenu = this._openMenu.bind(this);
  }
  _openMenu(e) {
    e.preventDefault();
    this.setState(prevState => ({isOpen: !prevState.isOpen}));
		if(this.state.isOpen === false) {
			document.getElementById('nav').style.display = 'none';
		} else {
			document.getElementById('nav').style.display = 'block';			
		}
  }
  render() {
    return (
        <header>
          <div className='menu'>
            <img src={ hamburger } alt='menu' onClick={ this._openMenu }/>
          </div>
          <span className='logo'>
            <a href='/'>NODEWASTE</a>
          </span>
          <div className='option'>
            <img src={ option } alt='option' />
          </div>
          <nav className='navlinks' id='nav'>
            <ul>
              <li><a href='/login'>Login</a></li>
              <li><a href='/signup'>Sign up</a></li>
              <li><a href='/map'>Map</a></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
