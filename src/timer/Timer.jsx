/* Global Imports */
import React from 'react';

import './timerStyle.scss'

export default class Timer extends React.Component{
    constructor(props){
        super(props)
    }

    setColors = () => {
        this.timerColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
        }

        this.timerTextColors = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }

        this.timerProgressBarRangeColors = {
            backgroundColor: 'grey'
        }

        this.timerProgressBarColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor
        }
    }

    state={
        progressBarStyle: {
            width: '30%',
            backgroundColor: this.props.appState.currentTheme.accentColor
        }
    }

    render(){

        this.setColors()

        return(
            <div id='timer' style={this.timerColors}>
                <div id='timerViewControls'>
                    <img 
                        src={'./assets/icons/pin_icon.svg'} 
                        style={this.timerIconColors}
                        id='timerPinButton'
                        className='timerViewIcon'
                    />
                    <img 
                        src={'./assets/icons/cross_icon.svg'} 
                        style={this.timerIconColors}
                        id='timerCloseButton'
                        className='timerViewIcon'
                    />
                </div>
                <div id='timerTimeDisplay' style={this.timerTextColors}>
                    25:00
                </div>
                <div id='timerCurrentPhaseDisplay' style={this.timerTextColors}>
                    Focus
                </div>
                <div id='timerProgressBarContainer'>
                    <div id='timerProgressBarRange'  style={this.timerProgressBarRangeColors}>
                        <div id='timerProgressBar' 
                            style={this.state.progressBarStyle}
                        >
                        </div>
                    </div>
                </div>
                <div id='timerBottomBar'>
                    <div id='timerControls'>
                        <img 
                            src={'./assets/icons/play_icon.svg'} 
                            style={this.timerIconColors}
                            id='timerCloseButton'
                            className='timerViewIcon'
                        />
                        <img 
                            src={'./assets/icons/stop_icon.svg'} 
                            style={this.timerIconColors}
                            id='timerCloseButton'
                            className='timerViewIcon'
                        />
                        <img 
                            src={'./assets/icons/skip_icon.svg'} 
                            style={this.timerIconColors}
                            id='timerCloseButton'
                            className='timerViewIcon'
                        />
                    </div>
                    <div id='timerNextPhaseDisplay'>
                        <div id='timerNextPhaseName' style={this.timerTextColors}>
                            Break
                        </div>
                        <div id='timerNextPhaseTimeLeft' style={this.timerTextColors}>
                            5 min
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}