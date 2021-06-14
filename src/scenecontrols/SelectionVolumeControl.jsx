/* Global Imports */
import React from 'react';

/* Local Imports */
import Theme from '../utils/theme/Theme'
import './selectionVolumeControlStyle.scss'


export default class SelectionVolumeControl extends React.Component{
    constructor(props){
        super(props)
    
        this.volumeIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }
    
    }

    state = {
        
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
        let iconPath = './assets/icons/'
        if(this.props.sourceType == 'musicTrack'){
            iconPath = iconPath + 'note_icon.svg'
        }else{
            iconPath = iconPath +'speaker_icon.svg'
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
        let sourceType = this.props.sourceType

        if(sourceType == 'scene'){
            document.querySelector('#sceneAudio').muted = muteAudio
        }else if(sourceType == 'musicTrack'){
            /* Todo mute for music track */
        }
    }

    volumeSliderChanged = (event) => {
        document.querySelector('#sceneAudio').muted = false
        this.setVolume(event.target.value)
    }

    volumeIconPressed = (event) => {
        let appState = this.props.appState
        let sourceType = this.props.sourceType

        if(sourceType == 'scene'){
            if(document.querySelector('#sceneAudio').muted == true){
                this.setAudioMute(false)
                document.querySelector('#sceneVolumeSlider').value = appState['sceneAudioVolume']
            }else{
                this.setAudioMute(true)
                document.querySelector('#sceneVolumeSlider').value = 0
            }
        }else if(sourceType == 'musicTrack'){
            /* Todo mute for music track */
        }
    }

    render(){
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