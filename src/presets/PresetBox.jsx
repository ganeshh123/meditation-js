/* Global Imports */
import React from 'react';

import PresetsController from '../utils/presets/PresetsController';
import './presetsStyles.scss'

export default class PresetBox extends React.Component{

    constructor(props){
        super(props)
    }

    setColors = () => {
        this.presetBoxColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            color: this.props.appState.currentTheme.accentColor
        }

        this.presetBoxImageColors = {
            filter: this.props.appState['currentTheme']['iconColor']
        }
    }

    getPresetName = () => {
        return this.props.preset['name']
    }

    getPresetPicture = () => {
        return './assets/icons/' + this.props.preset['bigIcon']
    }

    presetBoxClicked = () => {
        PresetsController.setPreset(this.props.appState, this.props.preset['id'])
    }

    render(){

        this.setColors()

        return(
            <div className="presetBox" style={this.presetBoxColors} onClick={this.presetBoxClicked}>
                <img 
                    src={this.getPresetPicture()}
                    style={this.presetBoxImageColors}
                    id={this.props.preset['id'] + 'PresetBoxPicture'}
                    className='presetBoxImage'
                    onClick={this.presetBoxClicked}
                />
                <div className='presetBoxTitle' onClick={this.presetBoxClicked}>
                    {this.getPresetName()}
                </div>
            </div>
        )
    }
}