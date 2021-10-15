import React from 'react';

import './titleBar.scss'

export default class TitleBar extends React.Component {

    constructor(props){
        super(props)
    }

    setStyle = () => {
        this.titleBarStyle = {
          backgroundColor: this.props.appState.currentTheme.backgroundColor,
          border: this.props.appState.currentTheme.border,
          boxShadow: this.props.appState.currentTheme.boxShadow,
          backdropFilter : this.props.appState.currentTheme.backdropFilter,
          WebKitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
          color: this.props.appState.currentTheme.accentColor
        }

        this.titleBarIconStyle = {
            filter: this.props.appState.currentTheme.iconColor
        }
    }

    settingsButtonPressed = () => {
        let appState = this.props.appState

        appState.setStateFunction({
          settingsShowing: true
        })
    }

    appTitlePressed = () => {
      let appState = this.props.appState

      appState.setStateFunction({
        firstTime: true,
        launchShowing: true
      })
    }
  
    render = () => {
      this.setStyle()

      return(
        <div id="titleBar" className="glassBlock" style={this.titleBarStyle}>
          <h1 id="appTitleText" onClick={this.appTitlePressed}>{this.props.appTitleText}</h1>
          <div id="buttonsHolder">
                <img 
                  src={"./assets/icons/about_icon.svg"} 
                  style={this.titleBarIconStyle}
                  id="aboutButton"
                  className="iconButton"
                  title="About"
                  tabIndex="0"
                  accessKey="i"
                />
                <img 
                  src={"./assets/icons/settings_icon.svg"} 
                  style={this.titleBarIconStyle}
                  id="settingsButton"
                  className="iconButton"
                  title="Settings"
                  tabIndex="0"
                  accessKey="s"
                  onClick={this.settingsButtonPressed}
                />
          </div>
        </div>
      );
    }

}