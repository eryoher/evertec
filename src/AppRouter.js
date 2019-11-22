import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRouteWithSubRoutes, RouteWithSubRoutes } from 'utils/RouterUtils';
import Generate from './containers/Generate';
import HeaderBoard from './containers/Headboard';
import Home from './containers/Home';
import Login from './containers/Login';
import Order from './containers/Order';
import Voucher from './containers/Voucher';
import Landing from './containers/Landing';
import Loaditems from './containers/Loaditems';
import SelectType from './containers/SelectType';
import VoucherInvolvement from './containers/VoucherInvolvement';

import { GENERATE, HEADERBOARD, HOME, LOGIN, ORDER, VOUCHER, LANDING, LOADITEMS, SELECTTYPE, VOUCHERINVOLVEMENT } from './utils/RoutePath';

const publicRoutes = [
  { path: HOME, component: Login, exact: true },
  { path: LOGIN, component: Login },
]

const privateRoutes = [
  { path: ORDER, component: Order },
  { path: `${VOUCHER}/:idComprobante?/:idOperacion?`, component: Voucher },
  { path: `${HEADERBOARD}/:idComprobante?/:idOperacion?`, component: HeaderBoard },
  { path: `${GENERATE}/:idComprobante?/:idOperacion?`, component: Generate },
  { path: LANDING, component: Landing },
  { path: SELECTTYPE, component: SelectType },
  { path: `${LOADITEMS}/:idComprobante?/:idOperacion?`, component: Loaditems },
  { path: `${VOUCHERINVOLVEMENT}/:idComprobante?/:idOperacion?`, component: VoucherInvolvement },
]

const AppRouter = props => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {publicRoutes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
      {privateRoutes.map((route, index) => <PrivateRouteWithSubRoutes key={index} {...route} {...props} />)}
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
