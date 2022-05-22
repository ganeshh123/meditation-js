import React from 'react'
import {CrossIcon, PlayIcon, AboutIcon} from '../icons'
import './about.scss'
import {AboutSectionHeader} from './AboutSectionHeader'
import {NowPlayingItem} from './NowPlayingItem'
import MusicController from '../media/MusicController'
import SceneController from '../media/SceneController'

export const About = (props) => {

    const { appState } = props
    const {currentTheme, currentScene, currentMusicTrack} = appState
    const updateApp = appState.setStateFunction

    const aboutStyle = {
        color: currentTheme.accentColor
    }

    return(
        <div id={`about`} className='overlayContainer' style={aboutStyle}>
            <div id='settingsTitle' className='overlayTitle'>
                About
            </div>
            <CrossIcon
                className='overlayCloseButton iconButton'
                onClick={() => updateApp({aboutShowing: false})}
                style={aboutStyle}
            />
            <div id={'aboutMenu'} className={`overlayContent`}>
                <AboutSectionHeader
                    icon={<PlayIcon className={`about-section-header-icon`} />}
                    text={`Now Playing`}
                    theme={currentTheme}
                />
                <div className={`about-section`}>
                    <NowPlayingItem
                        mediaType={`music`}
                        mediaName={MusicController.getMusicName(currentMusicTrack)}
                        sourceName={MusicController.getMusicSourceName(currentMusicTrack)}
                        sourceUrl={MusicController.getMusicSourceURL(currentMusicTrack)}
                        sourceArtist={MusicController.getMusicSourceArtist(currentMusicTrack)}
                        sourceArtistUrl={MusicController.getMusicSourceArtistURL((currentMusicTrack))}
                    />
                    <NowPlayingItem
                        mediaType={`video`}
                        mediaName={SceneController.getSceneName(currentScene)}
                        sourceName={SceneController.getSceneSourceVideoName(currentScene)}
                        sourceUrl={SceneController.getSceneSourceVideoURL(currentScene)}
                        sourceArtist={SceneController.getSceneSourceVideoArtist(currentScene)}
                        sourceArtistUrl={SceneController.getSceneSourceVideoArtistURL(currentScene)}
                    />
                    <NowPlayingItem
                        mediaType={`sfx`}
                        mediaName={SceneController.getSceneName(currentScene)}
                        sourceName={SceneController.getSceneSourceSfxName(currentScene)}
                        sourceUrl={SceneController.getSceneSourceSfxURL(currentScene)}
                        sourceArtist={SceneController.getSceneSourceSfxArtist(currentScene)}
                        sourceArtistUrl={SceneController.getSceneSourceSfxArtistURL(currentScene)}
                    />
                </div>
                <AboutSectionHeader
                    icon={<AboutIcon className={`about-section-header-icon`} />}
                    text={`Code & Design`}
                    theme={currentTheme}
                />
            </div>
        </div>
    )
}

export default About