import React from 'react';

import SceneController from './SceneController'

import './media.scss'

export default class SceneImage extends React.Component{
    constructor(props){
        super(props)
    }

    getImagePath = () => {
        let currentScene = this.props.scene
        if(this.props.videoLoaded == true){
            return SceneController.getSceneImage(currentScene)
        }else{
            return SceneController.getSceneImageBlur(currentScene)
        }
    }

    render(){
        return(
            <img
                id="sceneImage"
                src={this.getImagePath()}
                onLoad={() => {
                    this.props.update({
                        imageLoaded: true
                    })
                }}
            />
        )
    }
}