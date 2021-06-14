/* Global Imports */
import React from 'react';

export default class SceneAudio extends React.Component{
    constructor(props){
        super(props)

    }

    state = {

    }

    getAudioPath = () => {
        let appState = this.props.appState
        let currentScene = appState['currentScene']
        let audioPath = './assets/sfx/' + appState['mediaSources']['scenes'][currentScene]['sfx'] + '.mp3'
        return audioPath
    }

    setSceneAudioVolume = () => {
        let appState = this.props.appState
        let volumePercentage = appState['sceneAudioVolume']

        let volumeValue = volumePercentage / 100

        document.querySelector('#sceneAudio').volume = volumeValue

    }

    componentDidUpdate = () => {
        this.setSceneAudioVolume()
    }

    render(){

        return(
            <audio
                id='sceneAudio'
                src={this.getAudioPath()}
                autoPlay={true}
                loop={true}
            />
        )
    }
}