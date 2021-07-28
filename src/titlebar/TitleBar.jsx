/* Global Imports */
import React from 'react';

import Theme from '../utils/theme/Theme'
import './titleBarStyle.scss'

export default class TitleBar extends React.Component {

    constructor(props){
        super(props)
    }

    setColors = () => {
        this.titleBarColors = {
          backgroundColor: this.props.appState.currentTheme.backgroundColor,
          border: this.props.appState.currentTheme.border,
          boxShadow: this.props.appState.currentTheme.boxShadow,
          backdropFilter : this.props.appState.currentTheme.backdropFilter,
          webkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
          color: this.props.appState.currentTheme.accentColor
        }

        this.titleBarIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }
    }
  
    render = () => {

      this.setColors()

      return(
        <div id="titleBar" className="glassBlock" style={this.titleBarColors}>
          <h1 id="appTitleText">{this.props.appTitleText}</h1>
          <div id="buttonsHolder">
                <img 
                  src={"./assets/icons/about_icon.svg"} 
                  style={this.titleBarIconColors}
                  id="aboutButton"
                  className="iconButton"
                  tabIndex="0"
                  accessKey="i"
                />
                <img 
                  src={"./assets/icons/settings_icon.svg"} 
                  style={this.titleBarIconColors}
                  id="settingsButton"
                  className="iconButton"
                  tabIndex="0"
                  accessKey="s"
                />
          </div>
        </div>
      );
    }

}