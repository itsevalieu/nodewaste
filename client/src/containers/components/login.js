import React, { Component } from 'react';
//import logo from './logo.svg';


const loginElement = (
  <form>
    <input type="text" placeholder='username'/>
    <input type="password" placeholder='password'/>
    <input type="submit"/>
    <button>
      Facebook
    </button>
    <button>
      twitter
    </button>
    <button>
      gmail
    </button>
  </form>
);
class Login extends Component {
  render() {
    return (
      loginElement
    );
  }
}

export default Login;
