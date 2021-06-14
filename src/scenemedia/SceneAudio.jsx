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