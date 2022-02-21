import * as React from 'react';
import EmployeeStyles from  './EmployeeManagement.module.scss';
import { IEmployeeManagementProps } from './IEmployeeManagementProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { BrowserRouter as Router, Route, Link, HashRouter, NavLink, Switch, Redirect, useLocation } from 'react-router-dom';  
import { Stack, StackItem } from 'office-ui-fabric-react';
import EmployeeDashboard from './Dashboard/EmployeeDashboard';

import AddEmployee from './AddEmployee/AddEmployee';
import EditEmployee from './EditEmployee/EditEmployee';
import ViewEmployee from './ViewEmployee/ViewEmployee';

import Navigation from '../Navigation/Navigation';

export default class EmployeeManagement extends React.Component<IEmployeeManagementProps, {}> {
  public render(): React.ReactElement<IEmployeeManagementProps> {
    let baseLocation = this.props._spPageContextInfo.serverRequestPath;
    if (baseLocation.indexOf("/_layouts") > -1)
      baseLocation = this.props._spPageContextInfo.webServerRelativeUrl + baseLocation;
    return (
      <React.Fragment>
      <Router basename={baseLocation + '#'}>
        <div className={EmployeeStyles.MainWpContainer}>
          <Navigation />
          <div className={EmployeeStyles.MainContentArea}>
            <Switch>
              <Route exact path='/' component={()=> <EmployeeDashboard />} />
              <Route exact path='/Add' component={()=> <AddEmployee />} />
              <Route exact path='/Edit' component={()=> <EditEmployee />} />
              <Route exact path='/View' component={()=> <ViewEmployee />} />
            </Switch>
          </div>
        </div>
      </Router>
      <div className={EmployeeStyles.RootContainer}></div>
      </React.Fragment>
    );
  }
}
