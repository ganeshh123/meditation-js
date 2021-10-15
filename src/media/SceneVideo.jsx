import React from 'react';

import SceneController from './SceneController'

import './media.scss'

export default class SceneVideo extends React.Component{
    constructor(props){
        super(props)
    }

    videoFinishedLoading = (event) => {
        this.props.update({
            videoLoaded: true
        })
    }

    render(){
        let currentScene = this.props.scene

        return(
            <video 
                id="sceneVideo"
                style={(this.props.videoLoaded === false) ?  {visibility: 'hidden'} : {visibility: 'visible'} } 
                src={SceneController.getSceneVideo(currentScene)}
                autoPlay={true}
                loop={true}
                muted={true}
                onPlaying={this.videoFinishedLoading}
            />
        )
    }
}