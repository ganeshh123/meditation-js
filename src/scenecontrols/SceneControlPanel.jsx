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

        this.sceneControlColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            color: this.props.appState.currentTheme.accentColor
        }

        this.dividerColors = {
            backgroundColor: this.props.appState.currentTheme.accentColor
        }

    }

    state = {

    }

    render(){
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