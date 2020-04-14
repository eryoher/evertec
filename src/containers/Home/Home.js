// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { ORDERS } from '../../utils/RoutePath';
import logo from './../../logo.svg';


class Home extends Component {
  render() {
    const { theme } = this.props;
    console.log(theme.App);
    return (
      <div className={theme.App}>
        <header className={theme.AppHeader}>
          <img src={logo} className={theme.AppLogo} alt="logo" />
          <h1>Evertec</h1> 
          <small>Homepage</small>  
          <Link to={ORDERS}>
            <Button>Submit</Button>
          </Link>
        </header>        
      </div>
    );
  }
}

export default Home;
