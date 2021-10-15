import React from 'react';

import SettingsController from '../settings/SettingsController'
import SceneController from './SceneController'
import MusicController from './MusicController'

export default class AudioPlayer extends React.Component{
    constructor(props){
        super(props)
    }

    getAudioPath = () => {
        let appState = this.props.appState
        let type = this.props.type

        if(type == 'sfx'){
            let currentScene = appState['currentScene']
            return SceneController.getSceneSfx(currentScene)
        }else if(type == 'music'){
            let currentTrack = appState['currentMusicTrack']
            return MusicController.getMusicAudio(currentTrack)
        }
    }

    applyAudioVolume = () => {
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

        if(SettingsController.readSetting('sfxMuted')){
            updateState['sfxMuted'] = true
        }
        if(SettingsController.readSetting('musicMuted')){
            updateState['musicMuted'] = true
        }

        appState.setStateFunction(updateState, (newState) => {
            document.querySelector('#sfxAudio').muted = newState['sfxMuted']
            document.querySelector('#musicAudio').muted = newState['musicMuted']
        })
    }

    componentDidUpdate = () => {
        this.applyAudioVolume()
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