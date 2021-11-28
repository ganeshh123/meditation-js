import React from 'react';

import SettingsController from '../settings/SettingsController'
import UIHide from '../utils/uihide/UIHide'
import {PinIcon, CrossIcon, BackIcon, SkipIcon, PlayIcon, PauseIcon} from '../icons'
import './timer.scss'

export default class Timer extends React.Component {
    constructor(props) {
        super(props)
    }

    setStyle = () => {
        this.timerStyle = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter: this.props.appState.currentTheme.backdropFilter,
            WebKitBackdropFilter: this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor,
            visibility: this.props.appState.timerEnabled ? 'visible' : 'hidden'
        }

        this.timerIconStyle = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerTextStyle = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.timerProgressBarBackgroundStyle = {
            backgroundColor: this.props.appState.currentTheme.accentColor
        }

        this.timerProgressBarStyle = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor
        }
    }

    setProgressBar = () => {        
        let appState = this.props.appState
        let timerDuration = appState['timerDuration']
        let timerMode = appState['timerMode']
        let timeElapsed = timerDuration
        let progressBarWidth = 0

        if (timerMode === 'Session') {
            let timerSessionLength = appState['timerSessionLength'] * 60
            timeElapsed = timerSessionLength - timerDuration
            progressBarWidth = timeElapsed / timerSessionLength
        }
        if (timerMode === 'Break') {
            let timerBreakLength = appState['timerBreakLength'] * 60
            timeElapsed = timerBreakLength - timerDuration
            progressBarWidth = timeElapsed / timerBreakLength
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
        }, (newState) => {
            this.writeTimerData(newState)
        })

    }

    writeTimerData = (currentState) => {
        SettingsController.storeData('timerState', {
            timerMode: currentState['timerMode'],
            timerSessionLength: currentState['timerSessionLength'],
            timerBreakLength: currentState['timerBreakLength'],
            timerStatus: currentState['timerStatus'],
            timerDuration: currentState['timerDuration']
        })
    }

    readTimerData = (appState) => {
        let timerData = SettingsController.readData('timerState')

        if(!timerData){
            return
        }
        if(timerData['timerStatus'] === 'running'){
            timerData['timerStatus'] = 'paused'
        }

        appState.setStateFunction(timerData)
    }

    updateTimer = () => {
        let appState = this.props.appState
        let currentTimerDuration = appState['timerDuration']
        let updatedAppState = {}

        if (currentTimerDuration > 0) {
            updatedAppState['timerDuration'] = currentTimerDuration - 1
        }
        if (currentTimerDuration === 0) {
            document.getElementById("alarm-audio").play();
            this.nextPhase()
        }

        appState.setStateFunction(updatedAppState, (newState) => {
            this.writeTimerData(newState)
        })
    }

    nextPhase = () => {
        let appState = this.props.appState
        let currentTimerMode = appState['timerMode']

        clearInterval(appState['timerInterval'])

        if (currentTimerMode === 'Session') {
            this.startBreak()
        }
        if (currentTimerMode === 'Break') {
            this.startSession()
        }
    }

    startSession = () => {
        let appState = this.props.appState
        let timerSessionLength = appState['timerSessionLength'] * 60

        appState.setStateFunction({
            timerMode: 'Session',
            timerDuration: timerSessionLength
        }, (newState) => {
            this.writeTimerData(newState)
            if(['stopped', 'running'].includes(newState['timerStatus'])){
                this.startTimer()
            }
        })
    }

    startBreak = () => {
        let appState = this.props.appState
        let timerBreakLength = appState['timerBreakLength'] * 60

        appState.setStateFunction({
            timerMode: 'Break',
            timerDuration: timerBreakLength
        }, (newState) => {
            this.writeTimerData(newState)
            if(['stopped', 'running'].includes(newState['timerStatus'])){
                this.startTimer()
            }
        })
    }

    getMinutes = () => {
        let duration = this.props.appState['timerDuration']
        let minutes = parseInt(duration / 60, 10)

        if (minutes < 10) {
            return ('0' + minutes).toString()
        } else {
            return minutes.toString()
        }
    }

    getSeconds = () => {
        let duration = this.props.appState['timerDuration']
        let seconds = parseInt(duration % 60, 10)

        if (seconds < 10) {
            return ('0' + seconds).toString()
        } else {
            return seconds.toString()
        }
    }

    getCurrentPhase = () => {
        return this.props.appState['timerMode']
    }

    getNextPhase = () => {
        let currentPhase = this.getCurrentPhase()

        if (currentPhase === 'Session') {
            return 'Break'
        }

        if (currentPhase === 'Break') {
            return 'Session'
        }
    }

    getNextPhaseLength = () => {        
        let appState = this.props.appState
        let nextPhase = this.getNextPhase()

        let nextPhaseLength = 25

        if (nextPhase === 'Break') {
            nextPhaseLength = appState['timerBreakLength']
        }

        if (nextPhase === 'Session') {
            nextPhaseLength = appState['timerSessionLength']
        }

        return nextPhaseLength
    }

    getTimerPlayPauseButtonIcon = () => {
        let timerStatus = this.props.appState['timerStatus']

        if (['paused', 'stopped'].includes(timerStatus)) {
            return <PlayIcon 
                    style={this.timerIconStyle}
                    id='timerPlayButton'
                    title='Play'
                    className='timerControlIcon iconButton'
                    onClick={this.timerPlayButtonPressed}
                    />
        }
        if (timerStatus === 'running') {
            return <PauseIcon 
                    style={this.timerIconStyle}
                    id='timerPlayButton'
                    title='Pause'
                    className='timerControlIcon iconButton'
                    onClick={this.timerPlayButtonPressed}
                    />
        }
    }

    /* Button Listeners */

    timerPlayButtonPressed = (event) => {
        let appState = this.props.appState
        let timerStatus = appState['timerStatus']
        let timerMode = appState['timerMode']

        if (timerStatus === 'stopped') {
            if (timerMode === 'Session') {
                this.startSession()
            }
            if (timerMode === 'Break') {
                this.startBreak()
            }
        }

        if (timerStatus === 'paused') {
            this.startTimer()
        }
        if (timerStatus === 'running') {
            clearInterval(appState['timerInterval'])
            appState.setStateFunction({
                timerStatus: 'paused'
            }, (newState) => {
                this.writeTimerData(newState)
            })
        }
    }

    timerBackButtonPressed = (event) => {
        let appState = this.props.appState
        let timerMode = appState['timerMode']

        clearInterval(appState['timerInterval'])

        if (timerMode === 'Session') {
            this.startSession()
        }
        if (timerMode === 'Break') {
            this.startBreak()
        }
    }

    timerSkipButtonPressed = (event) => {
        this.nextPhase()
    }

    setTimerPin = () => {
        let timerCurrentlyPinned = UIHide.timerPinned
        let timerPinButton = document.querySelector('#timerPinButton')

        if (timerCurrentlyPinned === false) {
            timerPinButton.classList.remove('pin-normal')
            timerPinButton.classList.add('pin-rotated')
        }
        else {
            timerPinButton.classList.remove('pin-rotated')
            timerPinButton.classList.add('pin-normal')
        }
    }

    timerPinButtonPressed = () => {
        let appState = this.props.appState
        let timerCurrentlyPinned = appState['timerPinned']
        UIHide.timerPinned = !timerCurrentlyPinned
        
        appState.setStateFunction({
            timerPinned: !timerCurrentlyPinned
        }, (newAppState) => {
            SettingsController.updateSettings(newAppState)
            this.setTimerPin()
        })
    }

    timerCloseButtonPressed = () => {
        let appState = this.props.appState

        let confirmationConfig = {
            message: 'Are you sure you want to cancel the timer?',
            negativeLabel: 'No',
            negativeAction: () => {
                appState.setStateFunction({
                    confirmationShowing: false,
                    confirmationConfig: {}
                })
            },
            positiveLabel: 'Yes',
            positiveAction: () => {
                clearInterval(appState['timerInterval'])
                appState.setStateFunction({
                    timerEnabled: false,
                    timerMode: 'Session',
                    timerSessionLength: 1,
                    timerBreakLength: 2,
                    timerStatus: 'stopped',
                    timerDuration: 60,
                    timerInterval: undefined,
                    confirmationShowing: false,
                    confirmationConfig: {}
                })
            }
        }

        appState.setStateFunction({
            confirmationShowing: true,
            confirmationConfig: confirmationConfig
        })
    }

    componentDidMount = () => {
        let appState = this.props.appState

        let updateState = {
            timerComponent: this
        }

        if(SettingsController.readSetting('timerPinned') !== undefined){
            let timerPinSetting = SettingsController.readSetting('timerPinned')
            UIHide.timerPinned = timerPinSetting
            updateState['timerPinned'] = timerPinSetting
        }

        appState.setStateFunction(updateState, (newState) => {
            this.setTimerPin()
            this.readTimerData(newState)
        })
    }

    componentDidUpdate = () => {
        let appState = this.props.appState
        document.getElementById('alarm-audio').volume = (appState['alarmVolume'] / 100);
    }

    render() {
        this.setStyle()
        this.setProgressBar()

        return (
            <div id='timer' className='glassBlock' style={this.timerStyle}>
                <audio src="./assets/sfx/alarm.mp3" id="alarm-audio" />
                <div id='timerViewControls'>
                    <div id='timerPinHolder' onClick={this.timerPinButtonPressed}>
                        <PinIcon
                            style={this.timerIconStyle}
                            id='timerPinButton'
                            title='Pin/Unpin Window'
                        />
                    </div>
                    <CrossIcon
                        style={this.timerIconStyle}
                        onClick={this.timerCloseButtonPressed}
                        id='timerCloseButton'
                        className='iconButton'
                        title='Close Timer'
                    />
                </div>
                <div id='timerTimeDisplay' style={this.timerTextStyle}>
                    {this.getMinutes() + ':' + this.getSeconds()}
                </div>
                <div id='timerCurrentPhaseDisplay' style={this.timerTextStyle}>
                    {this.getCurrentPhase()}
                </div>
                <div id='timerProgressBarContainer'>
                    <div id='timerProgressBarRange'>
                        <div id="timerProgressBarBack" style={this.timerProgressBarBackgroundStyle}></div>
                        <div id='timerProgressBar' style={this.progressBarStyle}></div>
                    </div>
                </div>
                <div id='timerBottomBar'>
                    <div id='timerControls'>
                        <BackIcon
                            src={'./assets/icons/back_icon.svg'} 
                            style={this.timerIconStyle}
                            id='timerBackButton'
                            title={
                                'Restart ' + this.props.appState['timerMode']
                            }
                            className='timerControlIcon iconButton'
                            onClick={this.timerBackButtonPressed}
                        />
                        {this.getTimerPlayPauseButtonIcon()}
                        <SkipIcon
                            style={this.timerIconStyle}
                            id='timerSkipButton'
                            className='timerControlIcon iconButton'
                            title={
                                'Skip to ' + (this.props.appState['timerMode'] === 'Break' ?
                                'Session' :
                                'Break')         
                            }
                            onClick={this.timerSkipButtonPressed}
                        />
                    </div>
                </div>
            </div>
        )
    }
}