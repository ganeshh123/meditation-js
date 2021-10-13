/* Global Imports */
import React from 'react';

import MediaSources from '../utils/mediasources/MediaSources'
import PresetBox from './PresetBox'
import './presetsStyles.scss'

export default class PresetSelector extends React.Component{

    constructor(props){
        super(props)
    }

    setColors = () => {
        this.presetSelectorColors = {
        }
    }

    render(){

        this.setColors()
        let appState = this.props.appState
        let presetsArray = MediaSources.getPresetArray()

        return(
            <div id='presetSelector' style={this.presetSelectorColors}>
                {presetsArray.map((preset, index) => {
                    return(
                        <PresetBox appState={appState} preset={preset} key={preset['id']} />
                    )
                })}
            </div>
        )
    }
}