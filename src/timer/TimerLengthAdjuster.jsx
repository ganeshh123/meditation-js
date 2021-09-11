/* Global Imports */
import React from 'react';

import './timerLengthAdjusterStyle.scss'

export default class TimerLengthAdjuster extends React.Component{
    constructor(props){
        super(props)
    }

    setColors = () => {
        this.timerLengthAdjusterColors = {
        }

        this.timerLengthAdjusterIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }

        this.timerLengthAdjusterTextColors = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerLengthAdjusterInvalidColors = {
            borderWidth: this.props.currentValueInvalid? '2px': '0px',
            borderColor: 'red',
            borderStyle: 'solid'
        }
    }

    getInputValue = () => {
        
        let type = this.props.type
        let timerSetupState = this.props.timerSetupState

        if(type === 'session'){
            return timerSetupState['selectedSessionLength']
        }

        if(type === 'break'){
            return timerSetupState['selectedBreakLength']
        }
    }

    lengthInputChanged = (event) => {

        let timerSetupState = this.props.timerSetupState
        let type = this.props.type
        let newValue = event.target.value

        timerSetupState.setSelectedLength(type, newValue)

    }

    render(){

        this.setColors()

        return(
            <div className='timerLengthAdjuster' style={this.timerLengthAdjusterColors}>
                <div className='timerLengthAdjusterIncreaseDecrease'>

                </div>
                <div className='timerLengthAdjusterValues'>
                    <div className='timerLengthAdjusterContainer'>
                        <input 
                            className="timerLengthAdjusterInput"
                            id={this.props.type + 'TimerLengthAdjusterInput'}
                            style={this.timerLengthAdjusterInvalidColors}
                            type="number"
                            name={this.props.type + 'TimerLengthInput'}
                            value={this.getInputValue()}
                            onChange={this.lengthInputChanged}
                        />
                        <div className='timerLengthAdjusterUnit' style={this.timerLengthAdjusterTextColors}>
                            mins
                        </div>
                    </div>
                    <div className='timerLengthAdjusterType' style={this.timerLengthAdjusterTextColors}>
                        {this.props.type}
                </div>
                </div>
            </div>
        )
    }
}