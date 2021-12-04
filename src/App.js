import React from 'react';
import ReactDOM from 'react-dom';

import MediaSources from './utils/mediasources/MediaSources'

import SettingsController from './settings/SettingsController'
import ThemeController from './theme/ThemeController'

import UIHide from './utils/uihide/UIHide';
import TitleBar from './titlebar/TitleBar'
import SceneControlPanel from './media/SceneControlPanel'
import SceneVideo from './media/SceneVideo'
import SceneImage from './media/SceneImage'
import AudioPlayer from './media/AudioPlayer'
import Timer from './timer/Timer'
import SidePanel from './sidepanel/SidePanel'
import Overlay from './overlay/Overlay'
import Loading from './alert/Loading';

import {DEFAULT_SESSION_LENGTH, DEFAULT_BREAK_LENGTH} from './timer/TimerConstants'

import './mainStyle.scss'

class App extends React.Component {

  appStyle = {
    backgroundSize: 'cover'
  }

  updateState = (newState, cbFunc) => {
    this.setState(newState, () => {
      SettingsController.updateSettings(this.state)
      if(cbFunc){
        cbFunc(this.state)
      }
    })
  }

  state = {
    /* Variables */
    currentScene: 'autumn-rain',
    currentMusicTrack: 'soothing-piano',
    currentTheme: CSS.supports('backdrop-filter', 'blur(2.6vh)') ? ThemeController.staticThemes['dark'] : ThemeController.staticThemes['darkNb'],
    sceneAudioVolume: 50,
    musicAudioVolume: 20,
    alarmVolume: 70,
    /* Functions */
    setStateFunction: this.updateState,
    /* Flags */
    mediaInfoFetched: false,
    videoLoaded: false,
    blurImageLoaded: false,
    imageLoaded: false,
    musicMuted: false,
    sfxMuted: false,
    videoDisabled: true,
    presetsMenuExpanded: false,
    presetsOverlayShowing: false,
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
    timerSessionLength: DEFAULT_SESSION_LENGTH,
    timerBreakLength: DEFAULT_BREAK_LENGTH,
    timerStatus: 'stopped',
    timerDuration: 60,
    timerInterval: undefined,
    timerComponent: undefined
  }

  componentDidMount = () => {
    MediaSources.fetchMediaInfo(this.state)
    SettingsController.loadSettings(this.state)
    UIHide.setup(this.state)
  }


  render = () => {

    return(
      <div id="app" style={this.appStyle}>

        <Loading appState={this.state} />
        <SceneImage scene={this.state.currentScene} update={this.updateState} imageLoaded={this.state.imageLoaded} blurImageLoaded={this.state.blurImageLoaded}/>
        <AudioPlayer appState={this.state} type='sfx' />
        <AudioPlayer appState={this.state} type='music' />
        <SceneVideo scene={this.state.currentScene} videoDisabled={this.state.videoDisabled} videoLoaded={this.state.videoLoaded} update={this.updateState}/>

        <div id="appTop">
           <TitleBar appTitleText="Calmeo" updateApp={this.updateState} currentTheme={this.state.currentTheme} />
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