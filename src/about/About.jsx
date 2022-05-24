import React from 'react'
import {CrossIcon, PlayIcon, CodeIcon} from '../icons'
import './about.scss'
import {AboutSectionHeader} from './AboutSectionHeader'
import {NowPlayingItem} from './NowPlayingItem'
import MusicController from '../media/MusicController'
import SceneController from '../media/SceneController'
import PrettyLink from './PrettyLink'
import DevCard from './DevCard'

export const About = (props) => {

    const {appState} = props
    const {currentTheme, currentScene, currentMusicTrack} = appState
    const updateApp = appState.setStateFunction

    const aboutStyle = {
        color: currentTheme.accentColor
    }

    return (
        <div id={`about`} className='overlayContainer' style={aboutStyle}>
            <div id='aboutTitle' className='overlayTitle'>
                About
            </div>
            <CrossIcon
                className='overlayCloseButton iconButton'
                onClick={() => updateApp({aboutShowing: false})}
                style={aboutStyle}
            />
            <div id={'aboutMenu'} className={`overlayContent`}>
                <div className={`flex-1 overflow-y-auto overflow-x-hidden`}>
                    <div className={`flex-1`}>
                        <AboutSectionHeader
                            icon={<PlayIcon className={`about-section-header-icon`}/>}
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
                            icon={<CodeIcon className={`about-section-header-icon`}/>}
                            text={`Code & Design`}
                            theme={currentTheme}
                        />
                        <div className={`about-section h-full`}>
                            <div className={`about-horizontal-display`}>
                                <DevCard
                                    text={`Ganesh H`}
                                    image={`https://gn3.sh/assets/icon_trans.png`}
                                    url={`https://github.com/ganeshh123`}
                                    theme={currentTheme}
                                />
                                <DevCard
                                    text={`Joseph Hutchinson`}
                                    image={`https://avatars.githubusercontent.com/u/57227474`}
                                    url={`https://github.com/jwhutchinson`}
                                    theme={currentTheme}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`about-open-source`}>
                        <PrettyLink
                            url={`https://github.com/ganeshh123/meditation-js`}
                            text={'Help'}
                        />
                        <PrettyLink
                            url={`#`}
                            text={'Open Source Licenses'}
                        />
                        <PrettyLink
                            url={`https://github.com/ganeshh123/meditation-js`}
                            text={'GitHub'}
                        />
                    </div>
                    <div className={`about-version`}>Build 1.0.0</div>
                </div>
            </div>
        </div>
    )
}

export default About