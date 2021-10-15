import React from 'react';

import SceneController from './SceneController'
import MusicController from './MusicController'

import './mediaSelect.scss'

export default class SelectionVolumeControl extends React.Component{
    constructor(props){
        super(props) 
    }

    setStyle = () => {
        this.selectionVolumeControlStyle = {
            color: this.props.appState['currentTheme']['accentColor']
        }

        this.selectionVolumeControlIconStyle = {
            filter: this.props.appState.currentTheme.iconColor
        }

        this.mediaSelectOpenButtonStyle = {
            backgroundColor: this.props.appState['currentTheme']['backgroundColor'],
            color: this.props.appState['currentTheme']['accentColor']
        }
    }

    getMediaSelectOpenButtonIcon = () => {
        let type = this.props.sourceType

        if(type == 'scene'){
            return './assets/icons/video_on_icon.svg'
        }
        if(type == 'musicTrack'){
            return './assets/icons/note_icon.svg'
        }
    }

    getMediaSelectOpenButtonText = () => {
        let sourceId = this.props.selectedId
        let type = this.props.sourceType

        if(type == 'scene'){
            return SceneController.getSceneName(sourceId)
        }
        if(type == 'musicTrack'){
            return MusicController.getMusicName(sourceId)
        }
    }

    mediaSelectOpenButtonPressed = () => {
        let appState = this.props.appState
        let type = this.props.sourceType

        let updateState = {
            mediaSelectShowing: true,
            mediaSelectConfig: {type: type}
        } 
        appState.setStateFunction(updateState)
    }
    
    getVolumeIcon = () => {
        let appState = this.props.appState

        let iconPath = './assets/icons/'
        if(this.props.sourceType == 'musicTrack'){

            if(appState['musicMuted'] == false){
                iconPath = iconPath + 'note_icon.svg'
            }else{
                iconPath = iconPath + 'note_off_icon.svg'
            }

        }else if(this.props.sourceType == 'scene'){

            if(appState['sfxMuted'] == false){
                iconPath = iconPath +'speaker_icon.svg'
            }else{
                iconPath = iconPath +'speaker_off_icon.svg'
            }            
        }

        return iconPath
    }

    getVolume = () => {
        let appState = this.props.appState
        let sourceType = this.props.sourceType

        if(sourceType == 'scene'){
            return appState['sceneAudioVolume']
        }else if(sourceType == 'musicTrack'){
            return appState['musicAudioVolume']
        }
    }

    setVolume = (newVolume) => {
        let appState = this.props.appState
        let sourceType = this.props.sourceType

        let newVolumeState = {}

        if(sourceType == 'scene'){
            newVolumeState = {'sceneAudioVolume': newVolume}
        }else if(sourceType == 'musicTrack'){
            newVolumeState = {'musicAudioVolume': newVolume}
        }

        appState.setStateFunction(newVolumeState)
    }

    setAudioMute = (muteAudio) => {
        let appState = this.props.appState
        let sourceType = this.props.sourceType

        if(sourceType == 'scene'){
            document.querySelector('#sfxAudio').muted = muteAudio
            appState.setStateFunction({'sfxMuted': muteAudio})
        }else if(sourceType == 'musicTrack'){
            document.querySelector('#musicAudio').muted = muteAudio
            appState.setStateFunction({'musicMuted': muteAudio})
        }
    }

    volumeSliderChanged = (event) => {
        if(event.target.value < 2){
            this.setAudioMute(true)
        }else{
            this.setAudioMute(false)
        }

        this.setVolume(event.target.value)

    }

    volumeIconPressed = (event) => {
        let appState = this.props.appState
        let sourceType = this.props.sourceType

        if(sourceType == 'scene'){
            if(appState['sfxMuted'] == true){

                this.setAudioMute(false)

            }else{

                this.setAudioMute(true)
                appState.setStateFunction({'sfxMuted': true})

            }
        }else if(sourceType == 'musicTrack'){
            if(appState['musicMuted'] == true){
                this.setAudioMute(false)
            }else{
                this.setAudioMute(true)
                appState.setStateFunction({'musicMuted': true})
            }
        }
    }

    componentDidMount = () => {
        let appState = this.props.appState
        let sourceType = this.props.sourceType

        if(sourceType == 'scene' && appState['sfxMuted'] == true){
            this.setAudioMute(true)
        }

        if(sourceType == 'musicTrack' && appState['musicMuted'] == true){
            this.setAudioMute(true)
        }
    }

    render(){
        this.setStyle();

        return(
            <div className="selectionVolumeControl" style={this.selectionVolumeControlStyle}>
                <div 
                    className="mediaSelectOpenButton"
                    style={this.mediaSelectOpenButtonStyle}
                    onClick={this.mediaSelectOpenButtonPressed}
                >
                    <img 
                        className='mediaSelectOpenButtonIcon iconButton' 
                        src={this.getMediaSelectOpenButtonIcon()} 
                        style={this.selectionVolumeControlIconStyle}
                        onClick={this.mediaSelectOpenButtonPressed}
                    />
                    <div
                        className="mediaSelectOpenButtonText"
                        onClick={this.mediaSelectOpenButtonPressed}
                    >
                        {this.getMediaSelectOpenButtonText()}
                    </div>
                </div>
                <div className='volumeSliderContainer'>
                    <img 
                        className='volumeIcon iconButton' 
                        src={this.getVolumeIcon()} 
                        style={this.selectionVolumeControlIconStyle}
                        onClick={this.volumeIconPressed}
                    />
                    <input 
                        className='volumeSlider'
                        id={this.props.sourceType + 'VolumeSlider'}
                        type='range'
                        min='1'
                        max='100'
                        value={this.getVolume()}
                        onChange={this.volumeSliderChanged}
                    ></input>
                </div>
            </div>
        )
    }
}