import React from 'react';
import TimerLengthAdjuster from './TimerLengthAdjuster'
import SettingsController from '../settings/SettingsController'
import {CrossIcon, AboutIcon} from '../icons'
import {AlarmVolumeControl}  from '../media/AlarmVolumeControl'
import './timer.scss'

const valueInvalid = (currentValue) => {
    if(currentValue >= 1
        && currentValue <= 99
        && !isNaN(currentValue)
    ){
        return false
    }else{
        return true
    }
}

export const TimerSetup = (props) => {

    const {appState} = props
    const theme = appState.currentTheme
    const updateApp = appState.setStateFunction

    const [sessionLength, setSessionLength] = React.useState(25)
    const [breakLength, setBreakLength] = React.useState(5)
    const [sessionInvalid, setSessionInvalid] = React.useState(false)
    const [breakInvalid, setBreakInvalid] = React.useState(false)

    const updateValue = (newValue, type) => {

        const invalid = valueInvalid(newValue)

        if(type === 'session'){
            setSessionLength(newValue)
            setSessionInvalid(invalid)
        }
        if(type === 'break'){
            setBreakLength(newValue)
            setBreakInvalid(invalid)
        }
    }

    const beginButtonPressed = () => {
        if(sessionInvalid || breakInvalid){
            return
        }

        updateApp({
            timerSetupShowing: false,
            timerEnabled: true
        }, (newAppState) => {
            SettingsController.updateSettings(newAppState)
            clearInterval(appState['timerInterval'])

            updateApp({
                timerSessionLength: sessionLength,
                timerBreakLength: breakLength,
                timerStatus: 'stopped'
            }, () =>{
                appState.timerComponent.startSession()
            })
        })
    }

    const timerSetupStyle = {
        color: theme.accentColor
    }

    const timerSetupButtonStyle = {
        backgroundColor: theme.buttonBackgroundColor,
        border: theme.border,
        boxShadow: theme.boxShadow,
        backdropFilter : theme.backdropFilter,
        WebkitBackdropFilter : theme.webkitBackdropFilter,
        color: theme.accentColor
    }

    return(
        <div id='timerSetup' className='overlayContainer' style={timerSetupStyle}>
            <div id='timerSetupTitle' className='overlayTitle'>
                New Timer
            </div>
            <CrossIcon
                className='overlayCloseButton iconButton'
                onClick={() => updateApp({timerSetupShowing: false})}
                style={timerSetupStyle}
            />

            <div className={`overlayContent`}>
                <div id={'timerSetupMiddle'}>
                    <TimerLengthAdjuster
                        theme={theme}
                        value={sessionLength}
                        setValue={(newValue) => updateValue(newValue, 'session')}
                        id={`sessionLengthAdjuster`}
                        invalid={sessionInvalid}
                        label={`Session`}
                    />
                    <TimerLengthAdjuster
                        theme={theme}
                        value={breakLength}
                        setValue={(newValue) => updateValue(newValue, 'break')}
                        id={`breakLengthAdjuster`}
                        invalid={breakInvalid}
                        label={`Break`}
                    />
                </div>
                <AlarmVolumeControl
                    volume={appState['alarmVolume']}
                    id={`timerSetupAlarmVolumeSlider`}
                    updateApp={updateApp}
                />
               <button
                    id='timerSetupBeginButton'
                    className='glassBlock'
                    onClick={beginButtonPressed}
                    disabled={sessionInvalid || breakInvalid}
                    style={timerSetupButtonStyle}
                    title={'Begin Timer'}
                >
                    Begin
                </button>
                <div id='timerSetupWarning' style={timerSetupStyle}>
                   <AboutIcon
                        style={timerSetupStyle}
                        id='timerSetupWarningIcon'
                    />
                    Your current timer will be reset
                </div>
            </div>

        </div>
    )
}

export default TimerSetup