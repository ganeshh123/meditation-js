/* Global Imports */
import React from 'react';

import Theme from '../utils/theme/Theme'
import PresetsMenu from '../presets/PresetsMenu'

import './sidePanelStyle.scss'

export default class SidePanel extends React.Component{
    constructor(props){
        super(props)
    }

    setColors = () => {

        this.sidePanelButtonColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            webkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.sidePanelIconColors = {
            filter: this.props.appState['currentTheme']['iconColor']
        }

    }

    presetsButtonPressed = () => {
        let appState = this.props.appState

        let presetsMenuCurrentlyExpanded= appState['presetsMenuExpanded']

        appState.setStateFunction({
            presetsMenuExpanded: !presetsMenuCurrentlyExpanded
        })
    }

    newTimerButtonPressed = () => {
        let appState = this.props.appState
        let timerSetupCurrentlyShowing = appState['timerSetupShowing']

        appState.setStateFunction({
            timerSetupShowing: !timerSetupCurrentlyShowing
        })
    }

    lightDarkButtonPressed = () => {

        let type = this.props.type
        let appState = this.props.appState

        if(type === 'toggles'){
            Theme.switchTheme(appState)
        }

    }

    videoToggleButtonPressed = () => {
        let appState = this.props.appState
        let videoLoaded = appState['videoLoaded']
        let videoCurrentlyDisabled = appState['videoDisabled']

        appState.setStateFunction({
            videoDisabled: !videoCurrentlyDisabled
        })

        if(videoCurrentlyDisabled == false && videoLoaded == true){
            document.querySelector('#sceneVideo').pause()
        }else if(videoCurrentlyDisabled == true && videoLoaded == true){
            document.querySelector('#sceneVideo').play()
        }

    }

    getButtons = () => {

        let appState = this.props.appState
        let type = this.props.type

        let buttons = []

        if(type === 'timerPresets'){

            buttons.push({
                name: 'presets',
                icon: './assets/icons/presets_icon.svg',
                clickHandler: this.presetsButtonPressed
            })

            buttons.push({
                name: 'newTimer',
                icon: './assets/icons/new_timer_icon.svg',
                clickHandler: this.newTimerButtonPressed
            })

        }else if(type === 'toggles'){

            buttons.push({
                name: 'lightDark',
                icon: './assets/icons/light_dark_icon.svg',
                clickHandler: this.lightDarkButtonPressed
            })

            let videoToggleButton = {
                name: 'videoToggle',
                clickHandler: this.videoToggleButtonPressed
            }

            if(appState['videoDisabled'] == false){
                videoToggleButton['icon'] = './assets/icons/video_on_icon.svg'
            }else{
                videoToggleButton['icon'] = './assets/icons/video_off_icon.svg'
            }

            buttons.push(videoToggleButton)

        }

        return buttons

    }

    render(){

        this.setColors()

        let appState = this.props.appState
        let type = this.props.type
        let buttons = this.getButtons()
        let presetsMenuCurrentlyExpanded= appState['presetsMenuExpanded']

        return(
            <div className='sidePanel' id='s' style={this.sidePanelColors}>

                <div 
                    className='sidePanelIcon glassBlock' 
                    style={this.sidePanelButtonColors}
                    onClick={buttons[0]['clickHandler']}
                    id={(type === 'timerPresets' && presetsMenuCurrentlyExpanded) && 'sidePanelBlockExpanded'}
                >
                    <img 
                        src={buttons[0]['icon']} 
                        style={{filter: this.props.appState['currentTheme']['iconColor']}}
                        id={
                            (type === 'timerPresets' && presetsMenuCurrentlyExpanded) ?
                            buttons[0]['name'] + 'ButtonExpanded' :
                            buttons[0]['name'] + 'Button'
                        }
                        style={this.sidePanelIconColors}
                    />
                </div>

                {type === 'timerPresets' && appState['presetsMenuExpanded'] == true && <PresetsMenu appState={appState} />}

                <div 
                    className='sidePanelIcon glassBlock' 
                    style={this.sidePanelButtonColors}
                    onClick={buttons[1]['clickHandler']}
                >
                    <img 
                        src={buttons[1]['icon']} 
                        style={{filter: this.props.appState['currentTheme']['iconColor']}}
                        id={buttons[1]['name'] + 'Button'}
                        style={this.sidePanelIconColors}
                    />
                </div>

            </div>
        )
    }
}