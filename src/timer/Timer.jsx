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
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebKitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerTextColors = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }

        this.accentColor = {
            backgroundColor: this.props.appState.currentTheme.accentColor
        }

        this.timerProgressBarColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor
        }
    }

    setProgressBar = () => {

        let appState = this.props.appState
        let timerDuration = appState['timerDuration']
        let timerMode = appState['timerMode']

        let timeElapsed = timerDuration
        let progressBarWidth = 0

        if(timerMode === 'Session'){
            let timerSessionLength = appState['timerSessionLength'] * 60
            timeElapsed = timerSessionLength - timerDuration
            progressBarWidth = timeElapsed / timerSessionLength
        }

        if(timerMode === 'Break'){
            let timerBreakLength = appState['timerBreakLength'] * 60
            timeElapsed = timerBreakLength - timerDuration
            progressBarWidth = timeElapsed/timerBreakLength
        }

        let progressBarWidthPercentage = parseInt(progressBarWidth * 100)

        this.progressBarStyle = {
            width: progressBarWidthPercentage.toString() + '%',
            backgroundColor: this.props.appState.currentTheme.accentColor
        }
    }

    /* Timer Functions */

    startTimer = () => {

        let appState = this.props.appState
        
        appState.setStateFunction({
            'timerInterval': setInterval(() => {
                this.updateTimer()
            }, 1000),
            'timerDuration': appState['timerDuration'] - 1,
            'timerStatus': 'running'
        })

    }

    updateTimer = () => {

        let appState = this.props.appState
        let currentTimerDuration = appState['timerDuration']

        let newAppState = {}

        if(currentTimerDuration > 0){
            newAppState['timerDuration'] = currentTimerDuration - 1
        }

        if(currentTimerDuration == 0){
            document.getElementById("alarm-audio").play();
            this.nextPhase()
        }

        appState.setStateFunction(newAppState)
    }

    nextPhase = () => {

        let appState = this.props.appState
        let currentTimerMode = appState['timerMode']

        clearInterval(appState['timerInterval'])

        if(currentTimerMode === 'Session'){
            this.startBreak()
        }

        if(currentTimerMode === 'Break'){
            this.startSession()
        }
        
    }

    startSession = () => {

        let appState = this.props.appState
        let timerSessionLength = appState['timerSessionLength'] * 60

        appState.setStateFunction({
            timerMode: 'Session',
            timerDuration: timerSessionLength
        }, this.startTimer)
    }

    startBreak = () => {

        let appState = this.props.appState
        let timerBreakLength = appState['timerBreakLength'] * 60

        appState.setStateFunction({
            timerMode: 'Break',
            timerDuration: timerBreakLength
        }, this.startTimer)
    }

    getMinutes = () => {
        let duration = this.props.appState['timerDuration']
        let minutes = parseInt(duration / 60, 10)

        if(minutes < 10){
            return ('0' + minutes).toString()
        }else{
            return minutes.toString()
        }
    }

    getSeconds = () => {
        let duration = this.props.appState['timerDuration']
        let seconds = parseInt(duration % 60, 10)

        if(seconds < 10){
            return ('0' + seconds).toString()
        }else{
            return seconds.toString()
        }
    }

    getCurrentPhase = () => {
        return this.props.appState['timerMode']
    }

    getNextPhase = () => {
        let currentPhase = this.getCurrentPhase()

        if(currentPhase === 'Session'){
            return 'Break'
        }

        if(currentPhase === 'Break'){
            return 'Session'
        }
    }

    getNextPhaseLength = () => {
        
        let appState = this.props.appState
        let nextPhase = this.getNextPhase()

        let nextPhaseLength = 25

        if(nextPhase === 'Break'){
            nextPhaseLength = appState['timerBreakLength']
        }

        if(nextPhase === 'Session'){
            nextPhaseLength = appState['timerSessionLength']
        }

        return nextPhaseLength
    }

    getTimerPlayPauseButtonIcon = () => {

        let appState = this.props.appState
        let timerStatus = appState['timerStatus']

        if(['paused', 'stopped'].includes(timerStatus)){
            return './assets/icons/play_icon.svg'
        }

        if(timerStatus === 'running'){
            return './assets/icons/pause_icon.svg'
        }

    }

    /* Button Listeners */

    timerPlayButtonPressed = (event) => {

        let appState = this.props.appState
        let timerStatus = appState['timerStatus']
        let timerMode = appState['timerMode']

        if(timerStatus === 'stopped'){
            if(timerMode === 'Session'){
                this.startSession()
            }

            if(timerMode === 'Break'){
                this.startBreak()
            }
        }

        if(timerStatus === 'paused'){
            this.startTimer()
        }

        if(timerStatus === 'running'){
            clearInterval(appState['timerInterval'])
            appState.setStateFunction({
                timerStatus: 'paused'
            })
        }
    }

    /*
    timerStopButtonPressed = (event) => {

    }
    */

    timerBackButtonPressed = (event) => {

        let appState = this.props.appState
        let timerMode = appState['timerMode']

        clearInterval(appState['timerInterval'])

        if(timerMode === 'Session'){
            this.startSession()
        }

        if(timerMode === 'Break'){
            this.startBreak()
        }

    }

    timerSkipButtonPressed = (event) => {
        this.nextPhase()
    }

    componentDidMount = () => {
        let appState = this.props.appState

        appState.setStateFunction({
            timerComponent: this
        })
    }

    componentDidUpdate = () => {
        let appState = this.props.appState
        document.getElementById('alarm-audio').volume = (appState['alarmVolume']/ 100);
    }

    render(){

        this.setColors()
        this.setProgressBar()

        return(
            <div id='timer' className='glassBlock' style={this.timerColors}>
                <audio src="./assets/sfx/alarm.mp3" id="alarm-audio"/>
                <div id='timerViewControls'>
                    <div id='timerPinHolder'>
                        <img 
                            src={'./assets/icons/pin_icon.svg'} 
                            style={this.timerIconColors}
                            id='timerPinButton'
                        />
                    </div>
                    <img 
                        src={'./assets/icons/cross_icon.svg'} 
                        style={this.timerIconColors}
                        id='timerCloseButton'
                        className="iconButton"
                    />
                </div>
                <div id='timerTimeDisplay' style={this.timerTextColors}>
                    {this.getMinutes() + ':' + this.getSeconds()}
                </div>
                <div id='timerCurrentPhaseDisplay' style={this.timerTextColors}>
                    {this.getCurrentPhase()}
                </div>
                <div id='timerProgressBarContainer'>
                    <div id='timerProgressBarRange'>
                        <div id="timerProgressBarBack" style={this.accentColor}></div>
                        <div id='timerProgressBar' style={this.progressBarStyle}></div>
                    </div>
                </div>
                <div id='timerBottomBar'>
                    <div id='timerControls'>
                        <img 
                            src={'./assets/icons/back_icon.svg'} 
                            style={this.timerIconColors}
                            id='timerBackButton'
                            className='timerViewIcon iconButton'
                            onClick={this.timerBackButtonPressed}
                        />
                        <img 
                            src={this.getTimerPlayPauseButtonIcon()}
                            style={this.timerIconColors}
                            id='timerPlayButton'
                            className='timerViewIcon iconButton'
                            onClick={this.timerPlayButtonPressed}
                        />
                        <img 
                            src={'./assets/icons/skip_icon.svg'} 
                            style={this.timerIconColors}
                            id='timerSkipButton'
                            className='timerViewIcon iconButton'
                            onClick={this.timerSkipButtonPressed}
                        />
                    </div>
                </div>
            </div>
        )
    }
}