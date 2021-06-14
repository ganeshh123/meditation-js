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
                currentMusicTrack: sourceId,
                videoLoaded: false
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

    setVolume = (event) => {
        let appState = this.props.appState
        let sourceType = this.props.sourceType
        let newVolume = event.target.value

        let newVolumeState = {}

        if(sourceType == 'scene'){
            newVolumeState = {'sceneAudioVolume': newVolume}
        }else if(sourceType == 'musicTrack'){
            newVolumeState = {'musicAudioVolume': newVolume}
        }

        appState.setStateFunction(newVolumeState)
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
                    />
                    <input 
                        className='volumeSlider'
                        type='range'
                        min='1'
                        max='100'
                        value={this.getVolume()}
                        onChange={this.setVolume}
                    ></input>
                </div>
            </div>
        )
    }
}