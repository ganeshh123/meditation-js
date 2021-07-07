/* Global Imports */
import React from 'react';

/* Local Imports */
import Theme from '../utils/theme/Theme'
import './selectionVolumeControlStyle.scss'


export default class SelectionVolumeControl extends React.Component{
    constructor(props){
        super(props) 
    }

    setColors = () => {

        this.selectionVolumeControlColors = {
            color: this.props.appState['currentTheme']['accentColor']
        }

        this.volumeIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }

    }
    
    sourceSelectionChanged = (event) => {
        let sourceId = event.target.value
        if(this.props.sourceType == 'scene'){
            this.props.appState.setStateFunction({
                currentScene: sourceId,
                videoLoaded: false
            })
        }else if(this.props.sourceType == 'musicTrack'){
            this.props.appState.setStateFunction({
                currentMusicTrack: sourceId
            })
        }
    }

    getIconPath = () => {

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

    render(){

        this.setColors()


        return(
            <div className="selectionVolumeControl" style={this.selectionVolumeControlColors}>
                <select className="sourceSelector" onChange={this.sourceSelectionChanged} value={this.props.selected}>
                    {this.props.sourcesArray.map((source) => {
                        return(
                            <option key={source.id} value={source.id}>{source.name}</option>
                        )
                    })}
                </select>
                <p className='sourceDescription'>{this.props.sources[this.props.selected]['description']}</p>
                <div className='volumeSliderContainer'>
                    <img 
                        className='volumeIcon' 
                        src={this.getIconPath()} 
                        style={this.volumeIconColors}
                        height='20'
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