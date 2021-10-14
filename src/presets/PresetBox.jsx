import React from 'react';

import PresetsController from './PresetsController'

import './presets.scss'

export default class PresetBox extends React.Component{

    constructor(props){
        super(props)
    }

    setStyle = () => {
        this.presetBoxStyle = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            color: this.props.appState.currentTheme.accentColor
        }

        this.presetBoxImageStyle = {
            filter: this.props.appState['currentTheme']['iconColor']
        }
    }

    presetBoxClicked = () => {
        PresetsController.setPreset(this.props.appState, this.props.presetId)
    }

    render(){
        this.setStyle()
        let presetId = this.props.presetId

        return(
            <div className="presetBox" style={this.presetBoxStyle} onClick={this.presetBoxClicked}>
                <img 
                    src={PresetsController.getPresetBigIcon(presetId)}
                    style={this.presetBoxImageStyle}
                    className='presetBoxImage'
                    onClick={this.presetBoxClicked}
                />
                <div className='presetBoxTitle' onClick={this.presetBoxClicked}>
                    {PresetsController.getPresetName(presetId)}
                </div>
            </div>
        )
    }
}