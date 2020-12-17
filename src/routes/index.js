
import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))} />
      <Route path={`${match.url}customerList`} component={asyncComponent(() => import('./Customer/CustomerList'))} />
      <Route path={`${match.url}addcustomer`} component={asyncComponent(() => import('./Customer/AddCustomer'))} />
      <Route path={`${match.url}customerProfile`} component={asyncComponent(() => import('./Customer/CustomerProfile'))} />
      <Route path={`${match.url}editCustomerProfile`} component={asyncComponent(() => import('./Customer/EditCustomerProfile'))} />
      <Route path={`${match.url}vehicledetails`} component={asyncComponent(() => import('./Customer/vehicleDetails'))} />
      <Route path={`${match.url}customeraddvehicle`} component={asyncComponent(() => import('./Customer/CustVehicleAdd'))} />
      <Route path={`${match.url}customerappointments`} component={asyncComponent(() => import('./Customer/Appointments'))} />
      <Route path={`${match.url}vehicleOilDetails/*`} component={asyncComponent(() => import('./Customer/vehicleOilDetails'))} />
      <Route path={`${match.url}dashboard`} component={asyncComponent(() => import('./Customer/Dashboard'))} />
      <Route path={`${match.url}statistics`} component={asyncComponent(() => import('./Customer/Statistics'))} />


    </Switch>
  </div>
);

export default App;
