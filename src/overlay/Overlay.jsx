import React from 'react';

import Settings from '../settings/Settings'
import Launch from '../launch/Launch'
import TimerSetup from '../timer/TimerSetup'
import MediaSelect from '../scenecontrols/MediaSelect'
import Confirmation from '../alert/Confirmation'

import './overlay.scss'

export default class Overlay extends React.Component {

  constructor(props) {
    super(props)
  }

  setStyle = () => {
    this.overlayStyle = {
      backgroundColor: this.props.appState['currentTheme']['overlayColor']
    }
  }

  showOverlay = () => {
    let appState = this.props.appState
    let overlayConditions = [
      appState.timerSetupShowing,
      appState.settingsShowing,
      appState.launchShowing,
      appState.mediaSelectShowing,
      appState.confirmationShowing
    ]
    let shouldShowOverlay = false

    for(let condition of overlayConditions){
      if(condition == true){
        shouldShowOverlay = true
        break
      }
    }

    return shouldShowOverlay
  }

  render() {

    let appState = this.props.appState
    this.setStyle()

    return (
      this.showOverlay() &&
      <div id='appOverlay' onKeyPress={this.handleKeyPress} style={this.overlayStyle}>
        {appState.timerSetupShowing && <TimerSetup appState={appState} />}
        {appState.settingsShowing && <Settings appState={appState} />}
        {appState.launchShowing && <Launch appState={appState} />}
        {appState.mediaSelectShowing && <MediaSelect appState={appState} />}
        {appState.confirmationShowing && <Confirmation appState={appState} />}
      </div>
    )
  }
}