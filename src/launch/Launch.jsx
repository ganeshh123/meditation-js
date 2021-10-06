/* Global Imports */
import React from 'react';

import PresetSelector from '../presets/PresetSelector';
import './launchStyles.scss'

export default class Launch extends React.Component{

    constructor(props){
        super(props)
    }

    setColors = () => {
        this.launchColors = {
            //backgroundColor: this.props.appState.currentTheme.backgroundColor,
            //border: this.props.appState.currentTheme.border,
            //boxShadow: this.props.appState.currentTheme.boxShadow,
            //backdropFilter : this.props.appState.currentTheme.backdropFilter,
            //WebKitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.lauchIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }

        this.launchButtonColors = {
            backgroundColor: this.props.appState.currentTheme.buttonBackgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }
    }

    isFirstTime = () => {
        let appState = this.props.appState
        return appState['firstTime']
    }

    launchContinueButtonPressed = () => {
        let appState = this.props.appState

        appState.setStateFunction({
            launchShowing: false
        }, () => {
            document.querySelector('#sfxAudio').play()
            document.querySelector('#musicAudio').play()
        })
    }
    
    render(){

        this.setColors()

        return(
            <div id='launch' style={this.launchColors}>
                <div id="launchTitle">Calmeo</div>
                {this.isFirstTime() && 
                    <div id="launchMessage">What do you want to do?</div>
                }
                <div id="launchContent">
                    {this.isFirstTime() &&
                        <PresetSelector appState={this.props.appState} />
                    }
                    {!this.isFirstTime() &&
                        <div id="returningContainer">
                            <div id="returningMessage">
                                Welcome Back
                            </div>
                            <div id="returningButton" style={this.launchButtonColors} onClick={this.launchContinueButtonPressed}>
                                Continue
                            </div>
                        </div>
                    }
                </div>
                {this.isFirstTime() &&
                    <div className="launchNotification">
                    <img 
                        src={'./assets/icons/about_icon.svg'}
                        style={this.lauchIconColors}
                        className='launchNotificationIcon'
                    />
                    Headphones Recommended
                    </div>
                }
            </div>
        )
    }
}