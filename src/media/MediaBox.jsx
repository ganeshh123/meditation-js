import React from 'react'

import SceneController from './SceneController'
import MusicController from './MusicController'

import './mediaSelect.scss'

export default class MediaBox extends React.Component{

    constructor(props){
        super(props)
    }

    getMediaImage = () =>{
        let mediaId = this.props.mediaId
        let type = this.props.appState.mediaSelectConfig['type']

        if(type == "scene"){
            return SceneController.getSceneImageThumb(mediaId)
        }
        if(type == 'musicTrack'){
            return MusicController.getMusicImageThumb(mediaId)
        }
    }

    setStyle = () => {
        this.mediaBoxStyle = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            color: this.props.appState.currentTheme.accentColor
        }

        this.mediaBoxImageStyle = {
            backgroundImage: 'url(' + this.getMediaImage() + ')'
        }

        this.mediaBoxDescriptionStyle = {
            backgroundColor: this.props.appState.currentTheme.overlayColor
        }
    }

    mediaBoxClicked = (event) => {
        let appState = this.props.appState
        let type = this.props.appState.mediaSelectConfig['type']
        let mediaId = this.props.mediaId

        let updateState = {
            mediaSelectShowing: false
        }
        if(type == 'scene'){
            updateState['currentScene'] = mediaId
            updateState['videoLoaded'] = false
        }
        if(type == 'musicTrack'){
            updateState['currentMusicTrack'] = mediaId
        }

        appState.setStateFunction(updateState)
    }

    render(){
        let type = this.props.appState.mediaSelectConfig['type']
        let mediaId = this.props.mediaId

        this.setStyle()

        return(
            <div className="mediaBox" style={this.mediaBoxStyle}>
                <div
                    className="mediaBoxDescription"
                    style={this.mediaBoxDescriptionStyle}
                    onClick={this.mediaBoxClicked}
                >
                    {type == "scene" ? SceneController.getSceneDescription(mediaId) : MusicController.getMusicDescription(mediaId)}
                </div>
                <div 
                    className="mediaBoxImage"
                    style={this.mediaBoxImageStyle}
                ></div>
                <div
                    className="mediaBoxTitle"
                >
                    {type == "scene" ? SceneController.getSceneName(mediaId) : MusicController.getMusicName(mediaId)}
                </div>
            </div>
        )
    }
}