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

    state = {

    }

    sceneControlStyle = {
        backgroundColor: this.props.appState.currentTheme.backgroundColor
    }

    render(){

        let appState = this.props.appState

        return(
            <div id="sceneControlPanel" style={this.sceneControlStyle}>
                <SelectionVolumeControl
                    sourcesArray={appState.mediaSources.musicTracksArray}
                    sources={appState.mediaSources.musicTracks}
                    selected={appState.currentMusicTrack}
                    sourceType='musicTrack'
                    appState={appState}
                />
                <SelectionVolumeControl
                    sourcesArray={appState.mediaSources.scenesArray} 
                    sources={appState.mediaSources.scenes}
                    selected={appState.currentScene}
                    sourceType='scene'
                    appState={appState}
                />
            </div>
        )
    }
}