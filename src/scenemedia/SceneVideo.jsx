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
    }

    getVideoPath = (sceneId) => {
        
    }

    videoFinishedLoading = (event) => {
        this.props.appState.setStateFunction({
            videoLoaded: true
        })
    }

    render(){

        let videoFileName= this.props.appState.mediaSources.scenes[this.props.appState.currentScene]['videoFile']
        let videoPath = './assets/video/' + videoFileName + '.mp4'

        return(
            <video 
                id="sceneVideo"
                style={(this.props.appState['videoLoaded'] === false) ?  {visibility: 'hidden'} : {visibility: 'visible'} } 
                src={videoPath}
                autoPlay={true}
                loop={true}
                muted={true}
                onPlaying={this.videoFinishedLoading}
            />
        )
    }
}