/* Global Imports */
import React from 'react';

import PresetsMenu from '../presets/PresetsMenu';
import './launchStyles.scss'

export default class Launch extends React.Component{

    constructor(props){
        super(props)
    }

    setColors = () => {
        this.launchColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebKitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.lauchIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }
    }

    launchCloseButtonPressed = () => {
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
            <div id='launch' className='glassBlock' style={this.launchColors}>
                <div id='launchTitleBar'>
                    <div id='launchTitleContainer'>
                        {/* <div id='launchTitle'>
                            Welcome
                        </div> */}
                    </div>
                    <img 
                        id='launchCloseButton'
                        className='iconButton'
                        src='./assets/icons/cross_icon.svg'
                        onClick={this.launchCloseButtonPressed}
                        style={this.lauchIconColors}
                    />
                </div>
                <div id="launchHeader">Welcome, let's get started...</div>
                <PresetsMenu appState={this.props.appState} launch={true}/>
                <div className="launchNotification">
                    <img 
                        src={'./assets/icons/about_icon.svg'}
                        style={this.lauchIconColors}
                        className='launchNotificationIcon'
                    />
                    Headphones Recommended
                </div>
            </div>
        )
    }
}