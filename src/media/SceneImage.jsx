import React from 'react';

import SceneController from './SceneController'

import './media.scss'

export default class SceneImage extends React.Component{
    constructor(props){
        super(props)
    }

    getBlurImagePath = (scene) => SceneController.getSceneImageBlur(scene)

    getImagePath = (scene) => SceneController.getSceneImage(scene)

    render(){

        const {update, imageLoaded, blurImageLoaded, scene} = this.props

        return(
            <>
                <img
                    className={blurImageLoaded ? "sceneImage showing visible" : "sceneImage hidden invisible"}
                    src={this.getBlurImagePath(scene)}
                    onLoad={() => update({blurImageLoaded: true})}
                />
                <img
                    className={imageLoaded ? "sceneImage showing visible" : "sceneImage hidden invisible"}
                    src={this.getImagePath(scene)}
                    onLoad={() => update({imageLoaded: true})}
                />
            </>
        )
    }
}