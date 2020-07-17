import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../style/Navbar.css'

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className='nav-item'><a href='/auth/google'>Login</a></li>
        );
      default:
        return (
          <span>
            <li><a href='/api/logout'>Logout</a></li>
          </span>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className='Navbar'>
        <Link to={'/home'} className='logo-left'>read things</Link>
        <ul className='nav-right'>
          {this.renderContent()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Navbar);