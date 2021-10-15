import React from 'react';

import SelectionVolumeControl from './SelectionVolumeControl'
import SceneController from './SceneController'
import MusicController from './MusicController'

import './mediaSelect.scss'

export default class SceneControlPanel extends React.Component{
    constructor(props){
        super(props)
    }

    setStyle = () => {
        this.sceneControlStyle = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebKitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.sceneControlDividerStyle = {
            backgroundColor: this.props.appState.currentTheme.accentColor
        }
    }

    render(){
        this.setStyle()
        let appState = this.props.appState

        return(
            <div id="sceneControlPanel" className="glassBlock" style={this.sceneControlStyle}>
                <div className="controlHolder">
                    <SelectionVolumeControl
                        sourceIds={MusicController.getMusicIds()}
                        selectedId={appState.currentMusicTrack}
                        sourceType='musicTrack'
                        appState={appState}
                    />
                </div>
                <div id="divider" style={this.sceneControlDividerStyle}></div>
                <div className="controlHolder">
                    <SelectionVolumeControl
                        sourceIds={SceneController.getSceneIds()}
                        selectedId={appState.currentScene}
                        sourceType='scene'
                        appState={appState}
                    />
                </div>
            </div>
        )
    }
}