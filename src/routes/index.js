
import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}company/sample`} component={asyncComponent(() => import('./SamplePage'))} />
      <Route path={`${match.url}company/customerList`} component={asyncComponent(() => import('./Company/CustomerList'))} />
      <Route path={`${match.url}company/addcustomer`} component={asyncComponent(() => import('./Company/AddCustomer'))} />
      <Route path={`${match.url}company/customerProfile`} component={asyncComponent(() => import('./Company/CustomerProfile'))} />
      <Route path={`${match.url}company/editCustomerProfile`} component={asyncComponent(() => import('./Company/EditCustomerProfile'))} />
      <Route path={`${match.url}company/vehicledetails`} component={asyncComponent(() => import('./Company/vehicleDetails'))} />
      <Route path={`${match.url}company/customeraddvehicle`} component={asyncComponent(() => import('./Company/CustVehicleAdd'))} />
      <Route path={`${match.url}company/customerappointments`} component={asyncComponent(() => import('./Company/Appointments'))} />
      <Route path={`${match.url}company/vehicleOilDetails/*`} component={asyncComponent(() => import('./Company/vehicleOilDetails'))} />
      <Route path={`${match.url}company/dashboard`} component={asyncComponent(() => import('./Company/Dashboard'))} />
      <Route path={`${match.url}company/statistics`} component={asyncComponent(() => import('./Company/Statistics'))} />


    </Switch>
  </div>
);

export default App;
