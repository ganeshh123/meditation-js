import React from 'react';
import {SleepIconMini, RelaxIconMini, FocusIconMini} from '../icons'
import PresetsController from './PresetsController'
import './presets.scss'

export const PresetsMenu = (props) => {

    const {appState} = props
    const currentTheme = appState.currentTheme

    const getPresetIcon = (presetId) => {

        if(presetId === 'sleep'){
            return(
                <SleepIconMini
                    className='presetsMenuButtonIcon'
                    id={presetId + 'PresetMenuButtonIcon'}
                    onClick={() => PresetsController.setPreset(appState,presetId)}
                />
            )
        }

        if(presetId === 'relax'){
            return(
                <RelaxIconMini
                    className='presetsMenuButtonIcon'
                    id={presetId + 'PresetMenuButtonIcon'}
                    onClick={() => PresetsController.setPreset(appState,presetId)}
                />
            )
        }

        if(presetId === 'focus'){
            return(
                <FocusIconMini
                    className='presetsMenuButtonIcon'
                    id={presetId + 'PresetMenuButtonIcon'}
                    onClick={() => PresetsController.setPreset(appState,presetId)}
                />
            )
        }
    }

    const presetsMenuStyle = {
        backgroundColor: currentTheme.backgroundColor,
        border: currentTheme.border,
        boxShadow: currentTheme.boxShadow,
        backdropFilter : currentTheme.backdropFilter,
        WebKitBackdropFilter :currentTheme.webkitBackdropFilter,
        color: currentTheme.accentColor
    }

    return(
            <div id='presetsMenu' className='glassBlock' style={presetsMenuStyle}>
                {appState.mediaInfoFetched && PresetsController.getPresetIds().map((presetId, index) => (
                    <div className='presetsMenuButton' key={index}>
                        {getPresetIcon(presetId)}
                        <div
                            id={presetId['id'] + 'PresetsMenuButtonText'}
                            className='presetsMenuButtonText'
                            style={{color: 'inherit'}}
                            onClick={() => PresetsController.setPreset(appState,presetId)}
                        >
                            {PresetsController.getPresetName(presetId)}
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default PresetsMenu