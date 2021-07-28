/* Global Imports */
import React from 'react';

import './timerSetupStyle.scss'

import TimerLengthAdjuster from './TimerLengthAdjuster';

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

    setColors = () => {
        this.timerSetupColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            webkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerSetupIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }

        this.timerSetupTextColors = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerSetupButtonColours = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            color: this.props.appState.currentTheme.accentColor
        }
    }

    beginButtonPressed = () => {

        if(this.state['selectedSessionLengthInvalid'] || this.state['selectedBreakLengthInvalid']){
            return
        }

        let appState = this.props.appState

        clearInterval(appState['timerInterval'])

        appState.setStateFunction({
            timerSessionLength: this.state.selectedSessionLength,
            timerBreakLength: this.state.selectedBreakLength,
            timerSetupShowing: false
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

    render(){

        this.setColors()

        return(
            <div id='timerSetup' className='glassBlock' style={this.timerSetupColors}>
                <div id='timerSetupViewControls'>
                     {
                         /*
                    <img 
                        src={'./assets/icons/pin_icon.svg'} 
                        style={this.timerSetupIconColors}
                        id='timerPinButton'
                    />
                    */
                     }
                    <div id='timerSetupTitle' style={this.timerSetupTextColors}>
                        New Session
                    </div>
                    <img 
                        src={'./assets/icons/cross_icon.svg'} 
                        style={this.timerSetupIconColors}
                        id='timerCloseButton'
                        onClick={this.closeButtonPressed}
                    />
                </div>
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
                <div id='timerSetupWarning' style={this.timerSetupTextColors}>
                    <img 
                        src={'./assets/icons/about_icon.svg'} 
                        style={this.timerSetupIconColors}
                        id='timerSetupWarningIcon'
                    />
                    Your current timer will be reset
                </div>
                <button
                    id='timerSetupBeginButton'
                    className='glassBlock'
                    onClick={this.beginButtonPressed}
                    style={this.timerSetupButtonColours}
                >
                    Begin
                </button>
            </div>
        )
    }
}