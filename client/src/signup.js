import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const signup_element= (
  <form>
    <label>
      fullname
    </label>
    <input type="text" placeholder='fullname'/>
    <label>
      email
    </label>
    <input type="text" placeholder='email'/>
    <label>
      birthday
    </label>
    <input type="text" placeholder='birthday'/>
    <label>
      address
    </label>
    <input type="text" placeholder='address'/>
    <label>
      password
    </label>
    <input type="text" placeholder='password'/>
    <label>
      verify password
    </label>
    <input type="text" placeholder='verify password'/>
  
    <input type="submit"/>
    
  </form>
);


class SignUp extends Component {
  render() {
    return (
      signup_element
    );
  }
}

export default SignUp;