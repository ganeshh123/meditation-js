/* Global Imports */
import React from 'react';

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
            audioPath = './assets/sfx/' + appState['mediaSources']['scenes'][currentScene]['sfx'] + '.mp3'
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