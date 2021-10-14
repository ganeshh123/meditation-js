/* Global Imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Local Imports */
import Theme from './utils/theme/Theme'
import './mainStyle.scss'
import MediaSources from './utils/mediasources/MediaSources'
import SettingsStore from './utils/settings/settingsStore'
import UIHide from './utils/uihide/UIHide';

import TitleBar from './titlebar/TitleBar'
import SceneControlPanel from './scenecontrols/SceneControlPanel'
import SceneVideo from './scenemedia/SceneVideo'
import SceneImage from './scenemedia/SceneImage'
import AudioPlayer from './scenemedia/AudioPlayer'
import Timer from './timer/Timer'
import SidePanel from './sidepanel/SidePanel'
import Overlay from './overlay/Overlay'

class App extends React.Component {

  appStyle = {
    backgroundSize: 'cover'
  }

  updateState = (newState, cbFunc) => {
    this.setState(newState, () => {
      SettingsStore.updateSettings(this.state)
      if(cbFunc){
        cbFunc(this.state)
      }
    })
  }

  state = {
    /* Variables */
    currentScene: 'autumn-rain',
    currentMusicTrack: 'soothing-piano',
    currentTheme: CSS.supports('backdrop-filter', 'blur(2.6vh)') ? Theme.staticThemes['dark'] : Theme.staticThemes['darkNb'],
    sceneAudioVolume: 50,
    musicAudioVolume: 20,
    alarmVolume: 70,
    /* Functions */
    setStateFunction: this.updateState,
    /* Flags */
    videoLoaded: false,
    musicMuted: false,
    sfxMuted: false,
    videoDisabled: false,
    presetsMenuExpanded: false,
    timerSetupShowing: false,
    settingsShowing: false,
    launchShowing: true,
    mediaSelectShowing: false,
    mediaSelectConfig: {},
    confirmationShowing: false,
    confirmationConfig: {},
    uiShow: true,
    timerPinned: false,
    firstTime: true,
    /* Timer State */
    timerEnabled: false,
    timerMode: 'Session',
    timerSessionLength: 1,
    timerBreakLength: 2,
    timerStatus: 'stopped',
    timerDuration: 60,
    timerInterval: undefined,
    timerComponent: undefined
  }

  componentDidMount = () => {
    SettingsStore.loadSettings(this.state)
    UIHide.setup(this.state)
  }


  render = () => {

    let uiShow = this.state.uiShow

    return(
      <div id="app" style={this.appStyle}>

        <SceneImage appState={this.state} />
        <AudioPlayer appState={this.state} type='sfx' />
        <AudioPlayer appState={this.state} type='music' />
        <SceneVideo appState={this.state} />

        <div id="appTop">
           <TitleBar appTitleText="Calmeo" appState={this.state} />
        </div>

        <Overlay appState={this.state} />

        <SidePanel id="leftPanel" appState={this.state} type="timerPresets"/>

        <SidePanel id="rightPanel" appState={this.state} type="toggles"/>

       
        <div id="appMiddle">          
            <div id="appCenter">
              <Timer appState={this.state} />
            </div>          
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
  document.querySelector('#calmeo')
);

module.hot.accept()