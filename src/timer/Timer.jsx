import React from 'react';

import SettingsController from '../settings/SettingsController'
import {PinIcon, CrossIcon, BackIcon, SkipIcon, PlayIcon, PauseIcon} from '../icons'
import './timer.scss'

import {DEFAULT_SESSION_LENGTH, DEFAULT_BREAK_LENGTH} from './TimerConstants'

export const Timer = (props) => {
    const {appState, updateApp} = props
    const {
        currentTheme,
        timerEnabled,
        timerDuration,
        timerMode,
        timerSessionLength,
        timerBreakLength,
        timerStatus
    } = appState

    const [progressBarWidth, setProgressBarWidth] = React.useState(0)

    const timerStyle = {
        main: {
            backgroundColor: currentTheme.backgroundColor,
            border: currentTheme.border,
            boxShadow: currentTheme.boxShadow,
            backdropFilter: currentTheme.backdropFilter,
            WebKitBackdropFilter: currentTheme.webkitBackdropFilter,
            color: currentTheme.accentColor,
            visibility: timerEnabled ? 'visible' : 'hidden'
        },
        textIcon: {
            color: currentTheme.accentColor
        },
        progressBarBg: {
            backgroundColor: currentTheme.accentColor
        },
        progressBar: {
            backgroundColor: currentTheme.backgroundColor,
            width: `${progressBarWidth.toString()}%`
        }
    }

    const setProgressBar = () => {
        let progressBarWidth = 0
        if (timerMode === 'session') {
            progressBarWidth = (timerSessionLength - timerDuration) / (timerSessionLength * 60)
        }
        if (timerMode === 'break') {
            progressBarWidth = (timerBreakLength - timerDuration) / (timerBreakLength * 60)
        }
        setProgressBarWidth(parseInt(`${progressBarWidth * 100}`))
    }

    /* Timer Core */
    const writeTimerData = (currentState) => {
        SettingsController.storeData('timerState', {
            timerMode: currentState.timerMode,
            timerSessionLength: currentState.timerSessionLength,
            timerBreakLength: currentState.timerBreakLength,
            timerStatus: currentState.timerStatus,
            timerDuration: currentState.timerDuration
        })
    }

    const readTimerData = () => {
        const timerData = SettingsController.readData('timerState')
        if (!timerData) {
            return
        }
        if (timerData['timerStatus'] === 'running') {
            timerData['timerStatus'] = 'paused'
        }
        updateApp(timerData)
    }

    const startSession = () => updateApp({
        timerMode: 'Session',
        timerDuration: timerSessionLength
    }, (newState) => {
        this.writeTimerData(newState)
        // If timer not paused, start it
        if (['stopped', 'running'].includes(newState.timerStatus)) {
            startTimer()
        }
    })

    const startBreak = () => updateApp({
        timerMode: 'Break',
        timerDuration: timerBreakLength
    }, (newState) => {
        this.writeTimerData(newState)
        // If timer not paused, start it
        if (['stopped', 'running'].includes(newState.timerStatus)) {
            startTimer()
        }
    })

    const nextPhase = () => {
        clearInterval(appState.timerInterval)
        if (timerMode === 'Session') {
            startBreak()
        }
        if (timerMode === 'Break') {
            startSession()
        }
    }

    const updateTimer = () => {
        if (timerDuration === 0) {
            document.querySelector('#alarm-audio').play()
            nextPhase()
        }
        if (timerDuration > 0) {
            updateApp({
                timerDuration: timerDuration - 1
            }, (newState) => writeTimerData(newState))
        }
    }

    const startTimer = () => {
        updateApp({
            timerInterval: setInterval(() => updateTimer(), 1000),
            timerDuration: timerDuration - 1,
            timerStatus: 'running'
        }, (newState) => writeTimerData(newState))
    }

    /* Timer Display */
    const getMinutes = () => {
        const minutes = parseInt(`${timerDuration * 60}`, 10)
        return `${minutes < 10 ? '0' : ''}${minutes}`
    }

    const getSeconds = () => {
        const seconds = parseInt(`${timerDuration % 60}`, 10)
        return `${seconds < 10 ? '0' : ''}${seconds}`
    }

    const getNextPhase = () => {
        if (timerMode === 'Session') {
            return 'Break'
        }
        if (timerMode === 'Break') {
            return 'Session'
        }
    }

    // const getNextPhaseLength = () => {
    //     const nextPhase = getNextPhase()
    //     if (nextPhase === 'Break') {
    //         return timerBreakLength
    //     }
    //     if (nextPhase === 'Session') {
    //         return timerSessionLength
    //     }
    // }

    /* Button Listeners */
    const timerPlayButtonPressed = () => {
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
            clearInterval(appState.timerInterval)
            updateApp({
                timerStatus: 'paused'
            }, (newState) => this.writeTimerData(newState))
        }
    }

    const timerBackButtonPressed = () => {
        clearInterval(appState.timerInterval)
        if (timerMode === 'Session') {
            this.startSession()
        }
        if (timerMode === 'Break') {
            this.startBreak()
        }
    }

    const timerSkipButtonPressed = () => this.nextPhase()

    const TimerPlayPauseIcon = () => {
        if (['paused, stop'].includes(timerStatus)) {
            return (
                <PlayIcon
                    style={timerStyle.textIcon}
                    id='timerPlayButton'
                    title='Play'
                    className='timerControlIcon iconButton'
                    onClick={timerPlayButtonPressed}
                />
            )
        } else {
            return (
                <PauseIcon
                    style={timerStyle.textIcon}
                    id='timerPlayButton'
                    title='Pause'
                    className='timerControlIcon iconButton'
                    onClick={timerPlayButtonPressed}
                />
            )
        }
    }

    const timerPinButtonPressed = () => {
        if (appState.uiAutoHide === false) {
            return
        }
        updateApp({
            timerPinned: !appState.timerPinned
        })
    }

    const timerCloseButtonPressed = () => {
        const confirmationConfig = {
            message: 'Are you sure you want to cancel the timer?',
            negativeLabel: 'No',
            negativeAction: () => updateApp({
                confirmationConfig: {},
                confirmationShowing: false
            }),
            positiveLabel: 'Yes',
            positiveAction: () => {
                clearInterval(appState.timerInterval)
                updateApp({
                    timerEnabled: false,
                    timerMode: 'Session',
                    timerSessionLength: DEFAULT_SESSION_LENGTH,
                    timerBreakLength: DEFAULT_BREAK_LENGTH,
                    timerStatus: 'stopped',
                    timerDuration: 60,
                    timerInterval: undefined,
                    confirmationShowing: false,
                    confirmationConfig: {}
                })
            }
        }
        updateApp({
            confirmationConfig: confirmationConfig,
            confirmationShowing: true
        })
    }

    React.useEffect(() => {
        updateApp({
            timerComponent: this
        }, (newState) => {
            readTimerData(newState)
        })
    })

    React.useEffect(() => {
        setProgressBar()
    }, [setProgressBar, timerDuration])

    return (
        <div id='timer' className='glassBlock' style={timerStyle.main}>
            <audio src="./assets/sfx/alarm.mp3" id="alarm-audio"/>
            <div id={'timerViewControls'}>
                <div
                    id={'timerPinHolder'}
                    className={appState.uiAutoHide ? 'cursor-pointer' : 'opacity-0'}
                    onClick={timerPinButtonPressed}
                >
                    <PinIcon
                        style={timerStyle.textIcon}
                        id='timerPinButton'
                        title='Pin/Unpin Window'
                    />

                </div>
                <CrossIcon
                    style={timerStyle.textIcon}
                    onClick={timerCloseButtonPressed}
                    id='timerCloseButton'
                    className='iconButton'
                    title='Close Timer'
                />
            </div>
            <div id={`timerTimeDisplay`} style={timerStyle.textIcon}>
                {`${getMinutes()}:${getSeconds()}`}
            </div>
            <div id={`timerCurrentPhaseDisplay`} style={timerStyle.textIcon}>
                <div id='timerProgressBarRange'>
                    <div id="timerProgressBarBack" style={timerStyle.progressBarBg} />
                    <div id='timerProgressBar' style={timerStyle.progressBar} />
                </div>
            </div>
            <div id={`timerControls`}>
                <BackIcon
                    style={timerStyle.textIcon}
                    id={`timerBackButton`}
                    title={`Restart ${timerMode}`}
                    className={`timerControlIcon iconButton`}
                    onClick={timerBackButtonPressed}
                />
                {TimerPlayPauseIcon()}
                <SkipIcon
                    style={timerStyle.textIcon}
                    id={`timerSkipButton`}
                    title={`Skip to ${getNextPhase()}`}
                    onClick={timerSkipButtonPressed}
                />
            </div>
        </div>
    )
}

export default Timer
// }
//     /* Timer Functions */
//     componentDidMount = () => {
//         let appState = this.props.appState
//
//         let updateState = {
//             timerComponent: this
//         }
//
//         if(SettingsController.readSetting('timerPinned') !== undefined){
//             let timerPinSetting = SettingsController.readSetting('timerPinned')
//             UIHide.timerPinned = timerPinSetting
//             updateState['timerPinned'] = timerPinSetting
//         }
//
//         appState.setStateFunction(updateState, (newState) => {
//             this.setTimerPin()
//             this.readTimerData(newState)
//         })
//     }
//
//     componentDidUpdate = () => {
//         let appState = this.props.appState
//         document.getElementById('alarm-audio').volume = (appState['alarmVolume'] / 100);
//     }
//