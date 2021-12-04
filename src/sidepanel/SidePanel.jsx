import React from 'react';
import ThemeController from '../theme/ThemeController'
import PresetsMenu from '../presets/PresetsMenu'
import './sidePanelStyle.scss'
import {PresetsIcon, NewTimerIcon, LightDarkIcon, VideoOffIcon, VideoOnIcon} from '../icons'

export const SidePanel = (props) => {

    const {appState, type, id} = props
    const theme = appState.currentTheme
    const update = appState.setStateFunction

    const sharedButtonProps = {
        className: 'sidePanelIcon glassBlock',
        style: {
            backgroundColor: theme.backgroundColor,
            border: theme.border,
            boxShadow: theme.boxShadow,
            backdropFilter : theme.backdropFilter,
            WebKitBackdropFilter : theme.webkitBackdropFilter,
            color: theme.accentColor
        }
    }

    const PresetsButton = () => (
        <PresetsIcon
            {...sharedButtonProps}
            onClick={() => update({presetsMenuExpanded: !appState.presetsMenuExpanded})}
            id={'presetsButton'}
        />
    )

    const NewTimerButton = () => (
        <NewTimerIcon
            {...sharedButtonProps}
            onClick={() => update({timerSetupShowing: !appState.timerSetupShowing})}
            id={'timerSetupButton'}
        />
    )

    const LightDarkButton = () => (
        <LightDarkIcon
            {...sharedButtonProps}
            onClick={() => ThemeController.switchTheme(appState)}
            id={'lightDarkButton'}
        />
    )

    const VideoToggleButton = () => {
        const videoCurrentlyDisabled = appState.videoDisabled
        const videoButtonId = 'videoToggleButton'
        const videoElement = document?.querySelector('#sceneVideo')

        if(videoCurrentlyDisabled){
            return(
                <VideoOffIcon
                    {...sharedButtonProps}
                    onClick={() => {
                        update({videoDisabled: !videoCurrentlyDisabled})
                        videoElement && videoElement.play()
                    }}
                    id={videoButtonId}
                />
            )
        }

        if(!videoCurrentlyDisabled){
            return(
                <VideoOnIcon
                    {...sharedButtonProps}
                    onClick={() => {
                        update({videoDisabled: !videoCurrentlyDisabled})
                        videoElement && videoElement.pause()
                    }}
                    id={videoButtonId}
                />
            )
        }
    }

    return(
        <div className='sidePanel' id={id}>
            {type === 'timerPresets' &&
                <>
                    {PresetsButton()}
                    {appState['presetsMenuExpanded'] && <PresetsMenu appState={appState} />}
                    {NewTimerButton()}
                </>
            }

            {type==='toggles' &&
                <>
                    {LightDarkButton()}
                    {VideoToggleButton()}
                </>
            }
        </div>
    )
}

export default SidePanel