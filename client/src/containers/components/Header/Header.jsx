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
			document.getElementById('navigation').style.display = 'none';
		} else {
			document.getElementById('navigation').style.display = 'block';			
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
          <nav className='navigation' id='navigation'>
            <ul className='navigation__list'>
              <li className='navigation__item'><a href='/' className='navigation__link'><img src='' alt='home' className='navigation__icon'/>Home</a></li>
              <li className='navigation__item'><a href='/notifications' className='navigation__link'><img src='' alt='notifications' className='navigation__icon'/>Notifications</a></li>
              <li className='navigation__item'><a href='/me' className='navigation__link'><img src='' alt='me' className='navigation__icon'/>Me</a></li>
              <li className='navigation__item'><a href='/education' className='navigation__link'><img src='' alt='education' className='navigation__icon'/>Education</a></li>
              <li className='navigation__item'><a href='/settings' className='navigation__link'><img src='' alt='settings' className='navigation__icon'/>Settings</a></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
