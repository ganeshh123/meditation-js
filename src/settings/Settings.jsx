/* Global Imports */
import React from 'react';

import SettingsController from '../utils/settings/settingsController'
import './settingsStyle.scss'

export default class Settings extends React.Component{

    constructor(props){
        super(props)
    }

    settingsCloseButtonPressed = () =>{
        let appState = this.props.appState

        appState.setStateFunction({
            settingsShowing: false
        })
    }

    setColors = () => {
        this.settingsColors = {
            //backgroundColor: this.props.appState.currentTheme.backgroundColor,
            //border: this.props.appState.currentTheme.border,
            //boxShadow: this.props.appState.currentTheme.boxShadow,
            //backdropFilter : this.props.appState.currentTheme.backdropFilter,
            //WebkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.buttonColors = {
            backgroundColor: this.props.appState.currentTheme.buttonBackgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.settingsIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }
    }

    setupKeys = () => {
        let appState = this.props.appState
        document.addEventListener('keydown', (event) => {
            if(event.key == 'Escape'){
                appState.setStateFunction({
                    settingsShowing: false
                })
            }
        })
    }

    render(){

        this.setColors()
        this.setupKeys()

        return(
            <div id='settings' style={this.settingsColors}>
                <div id='settingsTitle'>
                    Settings
                </div>
                <img 
                    id='settingsCloseButton'
                    className='iconButton'
                    src='./assets/icons/cross_icon.svg'
                    onClick={this.settingsCloseButtonPressed}
                    style={this.settingsIconColors}
                />
                <div id='settingsMenu'>
                    <div className='settingsMenuItem'>
                        <div className='settingsMenuItemLeftSide'>
                            <img 
                                id='notificationIcon'
                                src='./assets/icons/speaker_icon.svg'
                                style={this.settingsIconColors}
                            />
                            <div className='settingsMenuItemLabel'>
                                Notification Volume
                            </div>
                        </div>
                        <div 
                            className='settingsToggleSwitch glassBlock'
                            onClick = {() => {
                                SettingsController.toggleAlarmVolume(this.props.appState)
                            }}
                            style={this.buttonColors}
                        >
                            {SettingsController.getAlarmVolumeString(this.props.appState)}
                        </div>
                    </div>
                    <div className='settingsMenuItem'>
                        <div className='settingsMenuItemLeftSide'>
                            <img 
                                id='solidGlassIcon'
                                src='./assets/icons/solid_glass_icon.svg' 
                                style={this.settingsIconColors}
                            />
                            <div className='settingsMenuItemLabel'>
                                Solid Windows
                            </div>
                        </div>
                        <div 
                            className='settingsToggleSwitch glassBlock'
                            onClick={() => {
                                SettingsController.toggleSolidBg(this.props.appState)
                            }}
                            style={this.buttonColors}
                        >
                            {SettingsController.getSolidBg(this.props.appState)}
                        </div>
                    </div>
                </div>
                <div 
                    id='settingsReset'
                    onClick={() => {
                        SettingsController.resetAppSettings(this.props.appState)
                    }}
                    style={this.buttonColors}
                >
                    Reset Settings
                </div>
            </div>
        )
    }
}