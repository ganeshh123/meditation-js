import React from 'react'
import {CrossIcon} from "../icons"
import ThemeController from '../theme/ThemeController'
import {SwitchSetting} from './SwitchSetting'
import './settings.scss'
import SliderSetting from './SliderSetting'

export const Settings = (props) => {

    const {appState} = props
    const theme = appState.currentTheme
    const updateApp = appState.setStateFunction

    const settingsStyle = {
        color: theme.accentColor
    }

    return (
        <div id='settings' className='overlayContainer' style={settingsStyle}>
            <div id='settingsTitle' className='overlayTitle'>
                Settings
            </div>
            <CrossIcon
                className='overlayCloseButton iconButton'
                onClick={() => updateApp({settingsShowing: false})}
                style={settingsStyle}
            />

            <div id='settingsMenu' className={`overlayContent`}>

                {/* Solid Background */}
                <SwitchSetting
                    icon={'SolidGlassIcon'}
                    label={'Solid Windows'}
                    buttonText={ThemeController.getSolidBg(appState)}
                    handleSwitch={() => ThemeController.toggleSolidBg(appState)}
                    theme={theme}
                />

                <SliderSetting
                    icon={parseInt(appState.alarmVolume) === 0 ? 'BellOffIcon' : 'BellIcon'}
                    label={'Alarm Volume'}
                    value={appState.alarmVolume}
                    handleChange={(newVolume) => updateApp({alarmVolume: newVolume})}
                />

            </div>

        </div>
    )
}

export default Settings