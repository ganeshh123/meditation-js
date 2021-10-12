/* Global Imports */
import React from 'react';

import SettingsStore from '../utils/settings/settingsStore';
import MediaSources from '../utils/mediasources/MediaSources';

export default class AudioPlayer extends React.Component{
    constructor(props){
        super(props)

    }

    state = {

    }

    getAudioPath = () => {
        let appState = this.props.appState
        let type = this.props.type

        let audioPath

        if(type == 'sfx'){
            let currentScene = appState['currentScene']
            return MediaSources.getSceneSfx(currentScene)
        }else if(type == 'music'){
            let currentTrack = appState['currentMusicTrack']
            audioPath = './assets/music/' + appState['mediaSources']['musicTracks'][currentTrack]['audioFile'] + '.mp3'
        }

        return audioPath
    }

    setAudioVolume = () => {
        let appState = this.props.appState
        let type = this.props.type

        let volumePercentage = 50

        if(type == 'sfx'){
            volumePercentage = appState['sceneAudioVolume']
        }else if(type == 'music'){
            volumePercentage = appState['musicAudioVolume']
        }

        let volumeValue = volumePercentage / 100

        if(type == 'sfx'){
            document.querySelector('#sfxAudio').volume = volumeValue
        }else if(type == 'music'){
            document.querySelector('#musicAudio').volume = volumeValue
        }

    }

    componentDidMount = () => {
        let appState = this.props.appState
        
        let updateState ={}

        let sfxMuted = SettingsStore.readSetting('sfxMuted')
        let musicMuted = SettingsStore.readSetting('musicMuted')

        if(sfxMuted){
            updateState['sfxMuted'] = true
        }

        if(musicMuted){
            updateState['musicMuted'] = true
        }

        appState.setStateFunction(updateState, (newState) => {
            document.querySelector('#sfxAudio').muted = newState['sfxMuted']
            document.querySelector('#musicAudio').muted = newState['musicMuted']
        })
    }

    componentDidUpdate = () => {
        this.setAudioVolume()
    }

    render(){

        return(
            <audio
                id={this.props.type + 'Audio'}
                src={this.getAudioPath()}
                autoPlay={true}
                loop={true}
            />
        )
    }
}