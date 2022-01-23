import React from 'react';
import ThemeController from '../theme/ThemeController'
import './sidePanelStyle.scss'
import {PresetsIcon, NewTimerIcon, LightDarkIcon, VideoOffIcon, VideoOnIcon} from '../icons'

export const MobileControls = (props) => {

    const {appState} = props
    const theme = appState.currentTheme
    const update = appState.setStateFunction

    const mobileControlsStyle = {
        backgroundColor: theme.backgroundColor,
        border: theme.border,
        boxShadow: theme.boxShadow,
        backdropFilter: theme.backdropFilter,
        WebKitBackdropFilter: theme.webkitBackdropFilter,
    }

    const sharedButtonProps = {
        className: 'mobileControlIcon',
        style: {
            color: theme.accentColor
        }
    }

    const PresetsButton = () => (
        <PresetsIcon
            {...sharedButtonProps}
            id={'presetsButtonMobile'}
            onClick={() => update({
                presetsOverlayShowing: true
            })}
        />
    )

    const NewTimerButton = () => (
        <NewTimerIcon
            {...sharedButtonProps}
            id={'timerSetupButtonMobile'}
            onClick={() => update({timerSetupShowing: !appState.timerSetupShowing})}
        />
    )

    const LightDarkButton = () => (
        <LightDarkIcon
            {...sharedButtonProps}
            id={'lightDarkButtonMobile'}
            onClick={() => ThemeController.switchTheme(appState)}
        />
    )

    const VideoToggleButton = () => {
        const videoCurrentlyDisabled = appState.videoDisabled
        const videoButtonId = 'videoToggleButtonMobile'
        const videoElement = document?.querySelector('#sceneVideo')

        if (videoCurrentlyDisabled) {
            return (
                <VideoOffIcon
                    {...sharedButtonProps}
                    id={videoButtonId}
                    onClick={() => {
                        update({videoDisabled: false, videoLoaded: false})
                        videoElement && videoElement.play()
                    }}
                />
            )
        }

        if (!videoCurrentlyDisabled) {
            return (
                <VideoOnIcon
                    {...sharedButtonProps}
                    id={videoButtonId}
                    onClick={() => {
                        update({videoDisabled: !videoCurrentlyDisabled})
                        videoElement && videoElement.pause()
                    }}
                />
            )
        }
    }

    return (
        <div className='glassBlock' id={'mobileControls'} style={mobileControlsStyle}>
            {PresetsButton()}
            {NewTimerButton()}
            {LightDarkButton()}
            {VideoToggleButton()}
        </div>
    )
}

export default MobileControls