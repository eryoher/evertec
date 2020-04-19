import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from 'utils/RouterUtils';
import Home from './containers/Home';
import Orders from './containers/Orders/';
import Request from './containers/Request/';

import {
  HOME,
  ORDER,
  ORDERS,
  REQUEST
} from './utils/RoutePath';

const publicRoutes = [
  { path: HOME, component: Home, exact: true }, 
  { path: `${ORDER}/:id?`, component: Home }, 
  { path: ORDERS, component: Orders, exact: true }, 
  { path: `${REQUEST}/:code?`, component: Request }, 
]

const AppRouter = props => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {publicRoutes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}      
    </Switch>
  </BrowserRouter>
)

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter)
