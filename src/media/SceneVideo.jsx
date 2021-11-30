import React from 'react';

import SceneController from './SceneController'

import './media.scss'

export default class SceneVideo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const {scene, update, videoDisabled, videoLoaded} = this.props

        return(
            <>
                {videoDisabled &&
                    <></>
                }
                {videoDisabled === false &&
                    <video
                        id="sceneVideo"
                        className={videoLoaded ? "sceneVideo showing visible" : "sceneVideo hidden invisible"}
                        src={SceneController.getSceneVideo(scene)}
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        onPlaying={() => update({videoLoaded: true})}
                    />
                }
            </>
        )
    }
}