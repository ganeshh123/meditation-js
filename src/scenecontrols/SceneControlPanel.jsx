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
        backgroundColor: Theme.current.backgroundColor
    }

    render(){
        return(
            <div id="sceneControlPanel" style={this.sceneControlStyle}>
                <SelectionVolumeControl
                    changeSourceFunction={this.props.changeSourceFunction}
                    sourcesArray={MediaSources.musicTracksArray}
                    sources={MediaSources.musicTracks}
                    selected={this.props.currentMusicTrack}
                    sourceType='musicTrack' 
                />
                <SelectionVolumeControl
                    changeSourceFunction={this.props.changeSourceFunction}
                    sourcesArray={MediaSources.scenesArray} 
                    sources={MediaSources.scenes}
                    selected={this.props.currentScene}
                    sourceType='scene'
                />
            </div>
        )
    }
}