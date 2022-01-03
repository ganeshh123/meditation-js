import React from 'react'
import {MediaSelectOpenButton} from './MediaSelectOpenButton'
import {VolumeControl} from './VolumeControl'
import './mediaSelect.scss'

export const MediaPanel = (props) => {

    const {updateApp, currentTheme, currentScene, currentMusicTrack, sceneAudioVolume, musicAudioVolume} = props

    const mediaPanelStyle = {
        backgroundColor: currentTheme.backgroundColor,
        border: currentTheme.border,
        boxShadow: currentTheme.boxShadow,
        backdropFilter : currentTheme.backdropFilter,
        WebKitBackdropFilter : currentTheme.webkitBackdropFilter,
        color: currentTheme.accentColor
    }

    return(
        <div className={'mediaPanel glassBlock'} id={'mediaPanel'} style={mediaPanelStyle}>
            <div className={'mediaPanelSection'}>
                <MediaSelectOpenButton
                    type={'musicTrack'}
                    currentTheme={currentTheme}
                    updateApp={updateApp}
                    sourceId={currentMusicTrack}
                    title={'Change Music Track'}
                />
                <VolumeControl
                    type={'musicTrack'}
                    volume={musicAudioVolume}
                    updateApp={updateApp}
                    currentTheme={currentTheme}
                    title={'Change Music Volume'}
                />
            </div>
            <div className={'mediaPanelSection'}>
                <MediaSelectOpenButton
                    type={'scene'}
                    currentTheme={currentTheme}
                    updateApp={updateApp}
                    sourceId={currentScene}
                    title={'Change Scene'}
                />
                <VolumeControl
                    type={'scene'}
                    volume={sceneAudioVolume}
                    updateApp={updateApp}
                    currentTheme={currentTheme}
                    title={'Change Sound Effect Volume'}
                />
            </div>
        </div>
    )
}

export default MediaPanel