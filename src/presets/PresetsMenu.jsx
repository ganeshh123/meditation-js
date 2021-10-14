import React from 'react';

import PresetsController from './PresetsController'

import './presets.scss'

export default class PresetsMenu extends React.Component{
    constructor(props){
        super(props)
    }

    setStyle = () => {
        this.presetsMenuStyle = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebKitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.presetsMenuIconStyle = {
            filter: this.props.appState['currentTheme']['iconColor']
        }
    }

    render(){
        this.setStyle()
        let appState = this.props.appState
        let presetIds = PresetsController.getPresetIds()

        return(
            <div id='presetsMenu' className='glassBlock' style={this.presetsMenuStyle}>
                {presetIds.map((presetId, index) => {
                    return(
                        <div className='presetsMenuButton' key={index}>
                            <img 
                                src={PresetsController.getPresetIcon(presetId)}
                                style={this.presetsMenuIconStyle}
                                id={presetId + 'PresetMenuButtonIcon'}
                                className='presetsMenuButtonIcon'
                                onClick={() => PresetsController.setPreset(appState,presetId)}
                            />
                            <div 
                                id={presetId['id'] + 'PresetsMenuButtonText'}
                                className='presetsMenuButtonText'
                                style={{color: 'inherit'}}
                                onClick={() => PresetsController.setPreset(appState,presetId)}
                            >
                                {PresetsController.getPresetName(presetId)}
                            </div>
                        </div>
                    )
                } )}
            </div>
        )
    }
}