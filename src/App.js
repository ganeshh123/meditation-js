/* Global Imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Local Imports */
import Theme from './utils/theme/Theme'
import './mainStyle.scss'
import MediaSources from './utils/mediasources/MediaSources'

import TitleBar from './titlebar/TitleBar'
import SceneControlPanel from './scenecontrols/SceneControlPanel'

class App extends React.Component {

  appStyle = {
    backgroundImage: `url('./assets/img/rain_on_leaves.png')`,
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
    currentScene: 'rain_on_leaves',
    currentMusicTrack: 'track1',
    changeSourceFunction: this.changeSource,
    mediaSources: MediaSources
  }

  render = () => {
    return(
      <div id="app" style={this.appStyle}>
        <div id="appTop">
          <TitleBar appTitleText="Bonseki" />
        </div>
        <div id="appMiddle"></div>
        <div id="appBottom">
          <SceneControlPanel 
            currentScene={this.state.currentScene}
            currentMusicTrack={this.state.currentMusicTrack}
            changeSourceFunction={this.changeSource}
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