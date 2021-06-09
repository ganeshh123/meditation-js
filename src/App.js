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

class App extends React.Component {

  appStyle = {
    //backgroundImage: `url('./assets/img/rain_on_leaves.png')`,
    backgroundSize: 'cover'
  }

  changeSource = (sourceType, sourceId) => {
    if(sourceType == 'scene'){
      this.setState({
        currentScene: sourceId
      })
    }else if(sourceType == 'musicTrack'){
      this.setState({
        currentMusicTrack: sourceId
      })
    }
  }

  state = {
    /* Variables */
    currentScene: 'rain_on_leaves',
    currentMusicTrack: 'track1',
    currentTheme: Theme.staticThemes['dark'],
    /* Functions */
    setStateFunction: this.setState,
    changeSourceFunction: this.changeSource,
    /* Static Data */
    mediaSources: MediaSources
  }

  render = () => {
    return(
      <div id="app" style={this.appStyle}>
        <SceneVideo appState={this.state} />
        <div id="appTop">
          <TitleBar appTitleText="Bonseki" appState={this.state} />
        </div>
        <div id="appMiddle"></div>
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