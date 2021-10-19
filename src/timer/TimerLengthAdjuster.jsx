import React from 'react';

import './timer.scss'

export default class TimerLengthAdjuster extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        width: 3
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

    setStyle = () => {
        this.timerLengthAdjusterStyle = {
        }

        this.timerLengthAdjusterIconStyle = {
            filter: this.props.appState.currentTheme.iconColor
        }

        this.timerLengthAdjusterTextStyle = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerLengthAdjusterInputStyle = {
            borderWidth: this.props.currentValueInvalid? '2px': '0px',
            borderColor: 'red',
            outlineColor: this.props.currentValueInvalid? 'red': '#72ce35',
            borderStyle: 'solid',
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            color: this.props.appState.currentTheme.accentColor,
            minWidth: this.state.width + 'ch'
        }
    }

    lengthInputChanged = (event) => {
        let timerSetupState = this.props.timerSetupState
        let type = this.props.type
        let newValue = event.target.value
        let newWidth = event.target.value.length + 1

        if(newWidth < 3){
            newWidth = 3
        }

        this.setState({
            width: event.target.value.length + 1
        }, () => {
            this.setStyle()
            timerSetupState.setSelectedLength(type, newValue)
        })
    }

    render(){
        this.setStyle()

        return(
            <div className='timerLengthAdjuster' style={this.timerLengthAdjusterStyle}>
                <div className='timerLengthAdjusterIncreaseDecrease'>

                </div>
                <div className='timerLengthAdjusterValues'>
                    <div className='timerLengthAdjusterContainer'>
                        <input 
                            className="timerLengthAdjusterInput"
                            id={this.props.type + 'TimerLengthAdjusterInput'}
                            style={this.timerLengthAdjusterInputStyle}
                            type="number"
                            name={this.props.type + 'TimerLengthInput'}
                            value={this.getInputValue()}
                            onChange={this.lengthInputChanged}
                        />
                        <div className='timerLengthAdjusterUnit' style={this.timerLengthAdjusterTextStyle}>
                            mins
                        </div>
                    </div>
                    <div className='timerLengthAdjusterType' style={this.timerLengthAdjusterTextStyle}>
                        {this.props.type}
                </div>
                </div>
            </div>
        )
    }
}