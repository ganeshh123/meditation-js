import React from 'react';

import PresetsController from './PresetsController';
import PresetBox from './PresetBox'

import './presets.scss'

export default class PresetSelector extends React.Component{

    constructor(props){
        super(props)
    }

    setStyle = () => {
        this.presetSelectorStyle = {
        }
    }

    render(){
        this.setStyle()
        let appState = this.props.appState
        let presetIds = PresetsController.getPresetIds()

        return(
            <div id='presetSelector' style={this.presetSelectorStyle}>
                {presetIds.map((presetId, index) => {
                    return(
                        <PresetBox appState={appState} presetId={presetId} key={index} />
                    )
                })}
            </div>
        )
    }
}