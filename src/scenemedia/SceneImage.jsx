/* Global Imports */
import React from 'react';

/* Local Imports */
import './sceneImageStyle.scss'


export default class SceneVideo extends React.Component{
    constructor(props){
        super(props)

        this.sceneImageColors = {

        }

    }

    state = {

    }

    getVideoPath = (sceneId) => {
        
    }

    render(){

        let videoFileName= this.props.appState.mediaSources.scenes[this.props.appState.currentScene]['videoFile']
        let videoPath = './assets/video/' + videoFileName + '.mp4'

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