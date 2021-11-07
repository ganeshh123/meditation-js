import React from 'react'
import SettingsController from './SettingsController'
import VolumeController from '../media/VolumeController'
import ThemeController from '../theme/ThemeController'
import {CrossIcon, SpeakerIcon, SolidGlassIcon} from '../icons'
import './settings.scss'

export default class Settings extends React.Component{

    constructor(props){
        super(props)
    }

    setStyle = () => {
        this.settingsStyle = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.settingsButtonStyle = {
            backgroundColor: this.props.appState.currentTheme.buttonBackgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.settingsIconStyle = {
            filter: this.props.appState.currentTheme.iconColor
        }
    }

    settingsCloseButtonPressed = () =>{
        this.props.appState.setStateFunction({
            settingsShowing: false
        })
    }

    setupKeys = () => {
        document.addEventListener('keydown', (event) => {
            if(event.key == 'Escape'){
                this.props.appState.setStateFunction({
                    settingsShowing: false
                })
            }
        })
    }

    render(){
        this.setStyle()
        this.setupKeys()
        let appState = this.props.appState

        return(
            <div id='settings' style={this.settingsStyle}>
                <div id='settingsTitle'>
                    Settings
                </div>
                <CrossIcon 
                    id='settingsCloseButton'
                    className='overlayCloseButton iconButton'
                    onClick={this.settingsCloseButtonPressed}
                    style={this.settingsStyle}
                />
                <div id='settingsMenu'>
                    <div className='settingsMenuItem'>
                        <div className='settingsMenuItemLeftSide'>
                            <SpeakerIcon
                                id='notificationVolumeIcon'
                                style={this.settingsStyle}
                            />
                            <div className='settingsMenuItemLabel'>
                                Notification Volume
                            </div>
                        </div>
                        <div 
                            className='settingsToggleSwitch glassBlock'
                            onClick = {() => VolumeController.toggleAlarmVolume(appState)}
                            style={this.settingsButtonStyle}
                        >
                            {VolumeController.getAlarmVolumeString(appState)}
                        </div>
                    </div>





                    <div className='settingsMenuItem'>
                        <div className='settingsMenuItemLeftSide'>
                            <SolidGlassIcon 
                                id='solidGlassIcon'
                                style={this.settingsStyle}
                            />
                            <div className='settingsMenuItemLabel'>
                                Solid Windows
                            </div>
                        </div>
                        <div 
                            className='settingsToggleSwitch glassBlock'
                            onClick={() => ThemeController.toggleSolidBg(appState)}
                            style={this.settingsButtonStyle}
                        >
                            {ThemeController.getSolidBg(appState)}
                        </div>
                    </div>



                </div>
                <div 
                    id='settingsReset'
                    onClick={() => {
                        SettingsController.resetAppSettings(appState)
                    }}
                    style={this.settingsButtonStyle}
                >
                    Reset Settings
                </div>
            </div>
        )
    }
}