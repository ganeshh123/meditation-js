/* Global Imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Local Imports */
import Theme from './utils/theme/Theme'
import './mainStyle.scss'

import TitleBar from './titlebar/TitleBar'
import SceneControlPanel from './scenecontrols/SceneControlPanel'

class App extends React.Component {

  state = {
    
  }

  appStyle = {
    backgroundImage: `url('./assets/img/rain_on_leaves.png')`,
    backgroundSize: 'cover'
  }

  render = () => {
    return(
      <div id="app" style={this.appStyle}>
        <div id="appTop">
          <TitleBar appTitleText="Bonseki" />
        </div>
        <div id="appMiddle"></div>
        <div id="appBottom">
          <SceneControlPanel />
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