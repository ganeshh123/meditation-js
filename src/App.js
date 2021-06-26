/* Global Imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Local Imports */
import Theme from './utils/theme/Theme'
import './mainStyle.scss'
import MediaSources from './utils/mediasources/MediaSources'

import TitleBar from './titlebar/TitleBar'
import SceneControlPanel from './scenecontrols/SceneControlPanel'
import SceneVideo from './scenemedia/SceneVideo'
import SceneImage from './scenemedia/SceneImage'
import AudioPlayer from './scenemedia/AudioPlayer'
import Timer from './timer/Timer'
import SidePanel from './sidepanel/SidePanel'

class App extends React.Component {

  appStyle = {
    //backgroundImage: `url('./assets/img/rain_on_leaves.png')`,
    backgroundSize: 'cover'
  }

  updateState = (newState) => {
    this.setState(newState, () => {
      return
    })
  }

  state = {
    /* Variables */
    currentScene: 'rain_on_leaves',
    currentMusicTrack: 'still',
    currentTheme: Theme.staticThemes['dark'],
    sceneAudioVolume: 50,
    musicAudioVolume: 20,
    /* Functions */
    setStateFunction: this.updateState,
    /* Static Data */
    mediaSources: MediaSources,
    /* Flags */
    videoLoaded: false,
    musicMuted: false,
    sfxMuted: false,
    videoDisabled: false,
    presetsMenuExpanded: false
  }

  render = () => {

    return(
      <div id="app" style={this.appStyle}>
        <SceneImage appState={this.state} />
        <AudioPlayer appState={this.state} type='sfx' />
        <AudioPlayer appState={this.state} type='music' />
        <SceneVideo appState={this.state} />
        <div id="appTop">
          <TitleBar appTitleText="Bonseki" appState={this.state} />
        </div>
        <div id="appMiddle">
          <SidePanel appState={this.state} type="timerPresets"/>
          <Timer appState={this.state} />
          <SidePanel appState={this.state} type="toggles"/>
        </div>
        <div id="appBottom">
          <SceneControlPanel 
            appState={this.state}
          />
        </div>
      </div>
    );
  }
}
 
ReactDOM.render(
  <App />,
  document.querySelector('body')
);

module.hot.accept()