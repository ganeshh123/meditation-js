import React from 'react';

import PresetsController from './PresetsController'
import {SleepIconLarge, RelaxIconLarge, FocusIconLarge} from "../icons"
import './presets.scss'

const presetIconClass = 'h-40 w-40 md:h-48 md:w-48 lg:w-60 lg:h-60'

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
                    className={presetIconClass}
                    onClick={this.presetBoxClicked}
                    styleName={this.presetBoxStyle}
                />
            )
        }

        if(presetId === 'relax'){
            return(
                <RelaxIconLarge
                    className={presetIconClass}
                    onClick={this.presetBoxClicked}
                    styleName={this.presetBoxStyle}
                />
            )
        }

        if(presetId === 'focus'){
            return(
                <FocusIconLarge
                    className={presetIconClass}
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
                className={`
                    w-60 rounded-lg mt-2 mb-5 mx-5 p-5 flex flex-col justify-center items-center h-auto cursor-pointer
                    md:mx-2 md:p-4
                    lg:w-auto lg:mx-5 lg:p-7 lg:mb-0
                `}
                style={this.presetBoxStyle}
                onClick={this.presetBoxClicked}
            >
                {this.getPresetIcon(presetId)}
                <div className='text-3xl mt-3 lg:text-4xl lg:mt-6' onClick={this.presetBoxClicked}>
                    {PresetsController.getPresetName(presetId)}
                </div>
            </div>
        )
    }
}