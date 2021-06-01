/* Global Imports */
import React from 'react';

import Theme from '../utils/theme/Theme'
import './titleBarStyle.scss'

export default class TitleBar extends React.Component {

    state = {
      
    }
  
    titleBarStyle = {
      backgroundColor: Theme.current.backgroundColor
    }
  
    render = () => {
      return(
        <div id="titleBar" style={this.titleBarStyle}>
          <h1 id="appTitleText">{this.props.appTitleText}</h1>
          <div id="titleBarButtons" >
              <button id="appInfoButton" className="titleBarButton" >info</button>
              <button id="appSettingsButton" className="titleBarButton" >settings</button>
          </div>
        </div>
      );
    }

}