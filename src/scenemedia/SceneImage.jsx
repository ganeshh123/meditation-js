/* Global Imports */
import React from 'react';

/* Local Imports */
import './sceneImageStyle.scss'
import MediaSources from '../utils/mediasources/MediaSources';


export default class SceneImage extends React.Component{
    constructor(props){
        super(props)

        this.sceneImageColors = {

        }

    }

    state = {

    }

    getImagePath = () => {
        let appState = this.props.appState
        let currentScene = appState['currentScene']
        if(appState['videoLoaded'] == true){
            return MediaSources.getSceneImage(currentScene)
        }else{
            return MediaSources.getSceneImageBlur(currentScene)
        }
    }

    render(){
        return(
            <img
                id="sceneImage"
                style={this.sceneImageColors} 
                src={this.getImagePath()}
            />
        )
    }
}