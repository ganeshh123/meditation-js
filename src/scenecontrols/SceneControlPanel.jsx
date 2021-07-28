/* Global Imports */
import React from 'react';

/* Local Imports */
import Theme from '../utils/theme/Theme'
import './sceneControlPanelStyle.scss'

import SelectionVolumeControl from './SelectionVolumeControl'
import MediaSources from '../utils/mediasources/MediaSources'


export default class SceneControlPanel extends React.Component{
    constructor(props){
        super(props)
    }

    setColors = () => {
        this.sceneControlColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            webkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.dividerColors = {
            backgroundColor: this.props.appState.currentTheme.accentColor
        }
    }

    render(){

        this.setColors()

        let appState = this.props.appState

        return(
            <div id="sceneControlPanel" className="glassBlock" style={this.sceneControlColors}>
                <div className="controlHolder">
                    <SelectionVolumeControl
                        sourcesArray={appState.mediaSources.musicTracksArray}
                        sources={appState.mediaSources.musicTracks}
                        selected={appState.currentMusicTrack}
                        sourceType='musicTrack'
                        appState={appState}
                    />
                </div>
                <div id="divider" style={this.dividerColors}></div>
                <div className="controlHolder">
                    <SelectionVolumeControl
                        sourcesArray={appState.mediaSources.scenesArray} 
                        sources={appState.mediaSources.scenes}
                        selected={appState.currentScene}
                        sourceType='scene'
                        appState={appState}
                    />
                </div>
            </div>
        )
    }
}