/* Global Imports */
import React from 'react';

import './timerSetupStyle.scss'

import TimerLengthAdjuster from './TimerLengthAdjuster';

export default class TimerSetup extends React.Component{
    constructor(props){
        super(props)
    }

    setSelectedLength = (type, newValue) => {

        let newState = {}

        if(newValue > 99){
            return
        }
        
        if(type === 'session'){
            newState['selectedSessionLength'] = newValue
        }

        if(type === 'break'){
            newState['selectedBreakLength'] = newValue
        }

        this.setState(newState, () => {
            return
        })
    }

    state = {
        selectedSessionLength: 25,
        selectedBreakLength: 5,
        setSelectedLength: this.setSelectedLength
    }

    setColors = () => {
        this.timerSetupColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor
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

        console.log(this.state)
        
        if(
            isNaN(parseInt(this.state.selectedSessionLength)) 
            || isNaN(parseInt(this.state.selectedBreakLength))
            ){
            return
        }

        let appState = this.props.appState
        let timerSessionLength = this.state.selectedSessionLength * 60

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
                    />
                    <TimerLengthAdjuster
                        appState={this.props.appState}
                        timerSetupState={this.state}
                        type='break'
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