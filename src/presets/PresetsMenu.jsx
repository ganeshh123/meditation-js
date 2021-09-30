/* Global Imports */
import React from 'react';

import './presetsMenuStyles.scss'
import SettingsStore from '../utils/settings/settingsStore'

export default class PresetsMenu extends React.Component{
    constructor(props){
        super(props)
    }

    setColors = () => {
        this.presetsMenuColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebKitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        if(this.props.launch && this.props.launch == true){
            this.presetsMenuColors = {
                background: 'none',
                border: '0px',
                boxShadow: '0px',
                backdropFilter : 'none',
                WebKitBackdropFilter : 'none',
            }
        }

        this.presetsMenuIconColors = {
            filter: this.props.appState['currentTheme']['iconColor']
        }
    }

    getPreset = (presetId) => {
        let appState = this.props.appState
        let presetsArray = appState['mediaSources']['presetsArray']

        for(let i = 0; i < presetsArray.length; i++){
            let preset = presetsArray[i]
            if(preset['id'] == presetId){
                return preset
            }
        }
    }

    setPreset = (presetId) => {
        let appState = this.props.appState
        let preset = this.getPreset(presetId)

        let update = {
            launchShowing: false
        }

        if(presetId != 'resume'){
            update['currentScene'] = preset['sceneId']
            update['currentMusicTrack'] = preset['musicId']
        }
        
        appState.setStateFunction(update, () => {
            document.querySelector('#sfxAudio').play()
            document.querySelector('#musicAudio').play()
            SettingsStore.updateSettings(appState)
        })
    }

    state={

    }

    render(){

        this.setColors()

        let appState = this.props.appState
        let presetsArray = appState['mediaSources']['presetsArray']

        return(
            <div id='presetsMenu' className='glassBlock' style={this.presetsMenuColors}>
                
                {presetsArray.map((preset, index) => {
                    return(
                        <div className='presetsMenuButton' key={preset['id']}>
                            <img 
                                src={'./assets/icons/' + preset['icon']}
                                style={this.presetsMenuIconColors}
                                id={preset['id'] + 'PresetMenuButtonIcon'}
                                className='presetsMenuButtonIcon'
                                onClick={() => {this.setPreset(preset['id'])}}
                            />
                            <div 
                                id={preset['id'] + 'PresetsMenuButtonText'}
                                className='presetsMenuButtonText'
                                style={{color: 'inherit'}}
                                onClick={() => {this.setPreset(preset['id'])}}
                            >
                                {preset['name']}
                            </div>
                        </div>
                    )
                } )}
                {/* {this.props.launch && 
                    <div className='presetsMenuButton' id="resumeOption" key={'resume'}>
                            <img 
                                src={'./assets/icons/play_icon.svg'}
                                style={this.presetsMenuIconColors}
                                id={'presetResumeIcon'}
                                className='presetsMenuButtonIcon'
                                onClick={() => {this.setPreset('resume')}}
                            />
                            <div 
                                id={'presetResumtText'}
                                className='presetsMenuButtonText'
                                style={{color: 'inherit'}}
                                onClick={() => {this.setPreset('resume')}}
                            >
                                Resume
                            </div>
                    </div>
                }
 */}
            </div>
        )
    }
}