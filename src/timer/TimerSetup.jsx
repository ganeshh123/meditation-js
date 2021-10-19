import React from 'react';

import TimerLengthAdjuster from './TimerLengthAdjuster'
import SettingsController from '../settings/SettingsController'

import './timer.scss'

export default class TimerSetup extends React.Component{
    constructor(props){
        super(props)
    }

    valueInvalid = (currentValue) => {
        if(currentValue >= 1 
            && currentValue <= 99
            && !isNaN(currentValue)
        ){
            return false
        }else{
            return true
        }
    }

    setSelectedLength = (type, newValue) => {
        let newState = {}
        
        if(type === 'session'){
            newState['selectedSessionLength'] = newValue
            if(this.valueInvalid(newValue)){
                newState['selectedSessionLengthInvalid'] = true
            }else{
                newState['selectedSessionLengthInvalid'] = false
            }
        }
        if(type === 'break'){
            newState['selectedBreakLength'] = newValue
            if(this.valueInvalid(newValue)){
                newState['selectedBreakLengthInvalid'] = true
            }else{
                newState['selectedBreakLengthInvalid'] = false
            }
        }

        this.setState(newState, () => {
            return
        })
    }

    state = {
        selectedSessionLength: 25,
        selectedBreakLength: 5,
        setSelectedLength: this.setSelectedLength,
        selectedSessionLengthInvalid: false,
        selectedBreakLengthInvalid: false
    }

    setStyle = () => {
        this.timerSetupStyle = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerSetupIconStyle = {
            filter: this.props.appState.currentTheme.iconColor
        }

        this.timerSetupTextStyle = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerSetupButtonStyle = {
            backgroundColor: this.props.appState.currentTheme.buttonBackgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }
    }

    beginButtonPressed = () => {
        let appState = this.props.appState
        if(this.state['selectedSessionLengthInvalid'] || this.state['selectedBreakLengthInvalid']){
            return
        }

        appState.setStateFunction({
            timerSetupShowing: false,
            timerEnabled: true
        }, (newAppState) => {
            SettingsController.updateSettings(newAppState)
            this.startNewTimer()
        })
    }

    startNewTimer = () => {
        let appState = this.props.appState
        clearInterval(appState['timerInterval'])

        appState.setStateFunction({
            timerSessionLength: this.state.selectedSessionLength,
            timerBreakLength: this.state.selectedBreakLength,
            timerStatus: 'stopped'
        }, () =>{
            appState.timerComponent.startSession()
        })
    }

    closeButtonPressed = (event) => {
        let appState = this.props.appState

        appState.setStateFunction({
            timerSetupShowing: false
        })
    }

    componentDidMount = () => {
        let appState = this.props.appState

        this.setState({
            selectedSessionLength: appState['timerSessionLength'],
            selectedBreakLength: appState['timerBreakLength'],
        })
    }

    setupKeys = () => {
        let appState = this.props.appState
        document.addEventListener('keydown', (event) => {
            if(event.key == 'Escape'){
                appState.setStateFunction({
                    timerSetupShowing: false
                })
            }
        })
    }

    render(){
        this.setStyle()
        this.setupKeys()

        return(
            <div id='timerSetup' style={this.timerSetupStyle}>
                <div id='timerSetupTitle' style={this.timerSetupTextStyle}>
                    Setup Timer
                </div>
                <img 
                        src={'./assets/icons/cross_icon.svg'} 
                        style={this.timerSetupIconStyle}
                        id='timerSetupCloseButton'
                        onClick={this.closeButtonPressed}
                />
                <div id="timerSetupMain">
                    <div id='timerSetupMiddle'>
                        <TimerLengthAdjuster
                            appState={this.props.appState}
                            timerSetupState={this.state}
                            type='session'
                            currentValueInvalid={this.state['selectedSessionLengthInvalid']}
                        />
                        <TimerLengthAdjuster
                            appState={this.props.appState}
                            timerSetupState={this.state}
                            type='break'
                            currentValueInvalid={this.state['selectedBreakLengthInvalid']}
                        />
                    </div>
                    <button
                        id='timerSetupBeginButton'
                        className='glassBlock'
                        onClick={this.beginButtonPressed}
                        style={this.timerSetupButtonStyle}
                    >
                        Begin
                    </button>
                </div>
                <div id='timerSetupWarning' style={this.timerSetupTextStyle}>
                    <img 
                        src={'./assets/icons/about_icon.svg'} 
                        style={this.timerSetupIconStyle}
                        id='timerSetupWarningIcon'
                    />
                    Your current timer will be reset
                </div>
            </div>
        )
    }
}