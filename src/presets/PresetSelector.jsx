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

        return(
            <div id='presetSelector'
                 className='w-full lg:p-20 my-5 flex md:flex-row flex-col md:justify-center justify-start items-center overflow-x-hidden overflow-y-auto'
                 style={this.presetSelectorStyle}
            >
                {appState.mediaInfoFetched && PresetsController.getPresetIds().map((presetId, index) => {
                    return(
                        <PresetBox appState={appState} presetId={presetId} key={index} />
                    )
                })}
            </div>
        )
    }
}