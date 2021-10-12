/* Global Imports */
import React from 'react';

/* Local Imports */
import MediaSources from '../utils/mediasources/MediaSources';
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
        let appState = this.props.appState
        let currentScene = appState['currentScene']

        let videoPath

        if(appState['videoDisabled'] === true && appState['videoLoaded'] === false){
            videoPath = undefined
            return null
        }
        else{
            videoPath = MediaSources.getSceneVideo(currentScene)
        }

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