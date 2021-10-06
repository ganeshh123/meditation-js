/* Global Imports */
import React from 'react';
import './overlayStyles.scss'

import Settings from '../settings/Settings'
import Launch from '../launch/Launch'
import TimerSetup from '../timer/TimerSetup'

export default class Overlay extends React.Component{

    constructor(props){
        super(props)
    }

    setColors = () => {
        this.overlayColors = {

        }
    }

    showOverlay = () => {
        let appState = this.props.appState
    
        if(appState.timerSetupShowing){
          return true
        }
    
        if(appState.settingsShowing){
          return true
        }
    
        if(appState.launchShowing){
          return true
        }

        return false
      }



    render(){

        let appState = this.props.appState
        this.setColors()

        return(
            this.showOverlay() &&
                <div id='appOverlay' style={this.overlayColors}>
                  { appState.timerSetupShowing && <TimerSetup appState={appState} />}
                  { appState.settingsShowing && <Settings appState={appState} />}
                  { appState.launchShowing && <Launch appState={appState} />}
                </div>
        )
    }
}