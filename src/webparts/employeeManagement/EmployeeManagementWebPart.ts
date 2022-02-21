import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'EmployeeManagementWebPartStrings';
import EmployeeManagement from './components/EmployeeManagement';
import { IEmployeeManagementProps } from './components/IEmployeeManagementProps';

export interface IEmployeeManagementWebPartProps {
  description: string;
  ListName: string;
}

export default class EmployeeManagementWebPart extends BaseClientSideWebPart<IEmployeeManagementWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEmployeeManagementProps> = React.createElement(
      EmployeeManagement,
      {
        description: this.properties.description,
        listName: this.properties.ListName,
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl,
        _spPageContextInfo: this.context.pageContext.legacyPageContext,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: "Description",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Description of the webpart"
                })
              ]
            },
            {
              groupName: "ListName",
              groupFields: [
                PropertyPaneTextField('ListName', {
                  label: "List Name"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
