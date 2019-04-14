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
          {/* <div className='menu'>
            <img src={ hamburger } alt='menu' onClick={ this._openMenu }/>
          </div> */}
          {/* <span className='logo'>
            <a href='/'>NODEWASTE</a>
          </span> */}
          {/* <div className='option'>
            <img src={ option } alt='option' />
          </div> */}
          <nav className='navlinks' id='nav'>
            <ul>
              <li><a href='/'><img src='' alt='home'/>Home</a></li>
              <li><a href='/notifications'><img src='' alt='notifications'/>Notifications</a></li>
              <li><a href='/me'><img src='' alt='me'/>Me</a></li>
              <li><a href='/education'><img src='' alt='education'/>Education</a></li>
              <li><a href='/settings'><img src='' alt='settings'/>Settings</a></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
