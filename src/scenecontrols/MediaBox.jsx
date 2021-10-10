/* Global Imports */
import React from 'react';

import './mediaSelectStyles.scss'

export default class MediaBox extends React.Component{

    constructor(props){
        super(props)
    }

    getMediaImage = () =>{
        let media = this.props.media
        let config = this.props.appState.mediaSelectConfig
        let type = config['type']

        if(type == "scene"){
            return './assets/img/thumb/' + media['background'] + '-thumb.png'
        }

        if(type == 'musicTrack'){
            return './assets/img/thumb/' + media['image'] + '-thumb.jpg'
        }
    }

    setStyles = () => {
        this.mediaBoxColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            color: this.props.appState.currentTheme.accentColor
        }

        this.mediaBoxImageStyles = {
            backgroundImage: 'url(' + this.getMediaImage() + ')'
        }

        this.mediaBoxDescriptionStyles = {
            backgroundColor: this.props.appState.currentTheme.overlayColor
        }
    }

    mediaBoxClicked = (event) => {
        let appState = this.props.appState
        let config = this.props.appState.mediaSelectConfig
        let type = config['type']
        let sourceId = this.props.media['id']

        let updateState = {
            mediaSelectShowing: false
        }

        if(type == 'scene'){
            updateState['currentScene'] = sourceId
            updateState['videoLoaded'] = false
        }

        if(type == 'musicTrack'){
            updateState['currentMusicTrack'] = sourceId
        }

        appState.setStateFunction(updateState)
    }

    render(){

        let appState = this.props.appState
        let media = this.props.media

        this.setStyles()

        return(
            <div className="mediaBox" style={this.mediaBoxColors}>
                <div
                    className="mediaBoxDescription"
                    style={this.mediaBoxDescriptionStyles}
                    onClick={this.mediaBoxClicked}
                >
                    {media['description']}
                </div>
                <div 
                    className="mediaBoxImage"
                    style={this.mediaBoxImageStyles}
                ></div>
                <div
                    className="mediaBoxTitle"
                >
                    {media['name']}
                </div>
            </div>
        )
    }
}