/* Global Imports */
import React from 'react';

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
        let presetsArray = appState['mediaSources']['presetsArray']

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