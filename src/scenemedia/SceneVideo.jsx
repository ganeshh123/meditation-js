/* Global Imports */
import React from 'react';

/* Local Imports */
import './sceneVideoStyle.scss'


export default class SceneVideo extends React.Component{
    constructor(props){
        super(props)

        this.sceneVideoColors = {

        }

    }

    state = {
        videoFileName: this.props.appState.mediaSources.scenes[this.props.appState.currentScene]['videoFile']
    }

    render(){

        let videoPath = './assets/video/' + this.state.videoFileName + '.mp4'

        return(
            <video 
                id="sceneVideo"
                style={this.sceneVideoColors} 
                src={videoPath}
                autoPlay={true}
                loop={true}
                muted={true}
            />
        )
    }
}