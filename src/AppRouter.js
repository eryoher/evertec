import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRouteWithSubRoutes, RouteWithSubRoutes } from 'utils/RouterUtils';
import Home from './containers/Home';

import {
  HOME,
} from './utils/RoutePath';

const publicRoutes = [
  { path: HOME, component: Home, exact: true }, 
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
