import React from 'react';

import PresetsController from './PresetsController'
import {SleepIconLarge, RelaxIconLarge, FocusIconLarge} from "../icons"
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

    getPresetIcon = (presetId) => {
        if(presetId === 'sleep'){
            return(
                <SleepIconLarge
                    className={`presetBoxImage`}
                    onClick={this.presetBoxClicked}
                    styleName={this.presetBoxStyle}
                />
            )
        }

        if(presetId === 'relax'){
            return(
                <RelaxIconLarge
                    className={`presetBoxImage`}
                    onClick={this.presetBoxClicked}
                    styleName={this.presetBoxStyle}
                />
            )
        }

        if(presetId === 'focus'){
            return(
                <FocusIconLarge
                    className={`presetBoxImage`}
                    onClick={this.presetBoxClicked}
                    styleName={this.presetBoxStyle}
                />
            )
        }
    }

    render(){
        this.setStyle()
        const {presetId} = this.props

        return(
            <div
                className={`presetBox`}
                style={this.presetBoxStyle}
                onClick={this.presetBoxClicked}
            >
                {this.getPresetIcon(presetId)}
                <div className='presetBoxTitle' onClick={this.presetBoxClicked}>
                    {PresetsController.getPresetName(presetId)}
                </div>
            </div>
        )
    }
}