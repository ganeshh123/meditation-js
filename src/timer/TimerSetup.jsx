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
        setSelectedLength: this.setSelectedLength,
    }

    setColors = () => {
        this.timerSetupColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
        }

        this.timerSetupIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }

        this.timerSetupTextColors = {
            color: this.props.appState.currentTheme.accentColor
        }

    }

    beginButtonPressed = () => {
        
    }

    render(){

        this.setColors()

        return(
            <div id='timerSetup' className='glassBlock' style={this.timerSetupColors}>
                <div id='timerSetupViewControls'>
                     <img 
                        src={'./assets/icons/pin_icon.svg'} 
                        style={this.timerSetupIconColors}
                        id='timerPinButton'
                    />
                    <div id='timerSetupTitle' style={this.timerSetupTextColors}>
                        New Session
                    </div>
                    <img 
                        src={'./assets/icons/cross_icon.svg'} 
                        style={this.timerSetupIconColors}
                        id='timerCloseButton'
                    />
                </div>
                <div id='timerSetupMiddle'>
                    <TimerLengthAdjuster
                        appState={this.props.appState}
                        timerSetupState={this.state}
                        type='session'
                    />
                </div>
                <button 
                    id='timerSetupBeginButton'
                    onClick={this.beginButtonPressed}
                >
                    Begin
                </button>
            </div>
        )
    }
}