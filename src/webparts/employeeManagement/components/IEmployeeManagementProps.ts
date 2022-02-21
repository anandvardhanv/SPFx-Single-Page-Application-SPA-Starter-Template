import { SPHttpClient } from '@microsoft/sp-http';  

export interface IEmployeeManagementProps {
  description: string;
  listName: string;
  spHttpClient: SPHttpClient;  
  siteUrl: string;
  _spPageContextInfo: any;
}
