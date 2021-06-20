/* Global Imports */
import React from 'react';

import './timerStyle.scss'

export default class Timer extends React.Component{
    constructor(props){
        super(props)

        this.timerColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor
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
            backgroundColor: 'white'
        }
    }

    render(){
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
                <div id='timerTimeDisplay'>
                    25:00
                </div>
                <div id='timerCurrentPhaseDisplay'>
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
                        <div id='timerNextPhaseName'>
                            Break
                        </div>
                        <div id='timerNextPhaseTimeLeft'>
                            5 min
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}