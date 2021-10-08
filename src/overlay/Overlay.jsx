/* Global Imports */
import React from 'react';
import './overlayStyles.scss'

import Settings from '../settings/Settings'
import Launch from '../launch/Launch'
import TimerSetup from '../timer/TimerSetup'
import Confirmation from '../alert/Confirmation';

export default class Overlay extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    confirmationMessage: '',
    confirmationPositiveLabel: '',
    confirmationNegativeLabel:'',
    confirmationPositiveAction: undefined,
    confirmationNegativeAction: undefined
  }

  setColors = () => {
    this.overlayColors = {
      backgroundColor: this.props.appState['currentTheme']['overlayColor']
    }
  }

  showOverlay = () => {
    let appState = this.props.appState

    if (appState.timerSetupShowing) {
      return true
    }

    if (appState.settingsShowing) {
      return true
    }

    if (appState.launchShowing) {
      return true
    }

    if (appState.confirmationShowing) {
      return true
    }

    return false
  }

  render() {

    let appState = this.props.appState
    this.setColors()

    return (
      this.showOverlay() &&
      <div id='appOverlay' onKeyPress={this.handleKeyPress} style={this.overlayColors}>
        {appState.timerSetupShowing && <TimerSetup appState={appState} />}
        {appState.settingsShowing && <Settings appState={appState} />}
        {appState.launchShowing && <Launch appState={appState} />}
        {appState.confirmationShowing && <Confirmation appState={appState} />}
      </div>
    )
  }
}