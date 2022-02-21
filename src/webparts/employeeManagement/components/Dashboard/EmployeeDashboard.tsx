import * as React from "react";
import * as ReactDOM from "react-dom";

import IEmployeListState from './IEmployeeListState';
import IEmployeeListProps from './IEmployeeListProps';

export default class EmployeeDashboard extends React.Component<IEmployeeListProps, IEmployeListState>{
    constructor(props){
        super(props);
    }

    public render(): React.ReactNode {
        return(
            <div>Employee List</div>
        );
    }
}