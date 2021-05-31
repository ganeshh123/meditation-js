/* Global Imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Local Imports */
import Theme from './utils/theme/Theme'
import './mainStyle.scss'

import TitleBar from './titlebar/TitleBar'

class App extends React.Component {

  state = {
    
  }

  appStyle = {
    backgroundColor: Theme.current.backgroundColor
  }

  render = () => {
    return(
      <div id="app" style={this.appStyle}>
        <div id="appTop">
          <TitleBar appTitleText="Bonseki" />
        </div>
        <div id="appMiddle"></div>
        <div id="appBottom"></div>
      </div>
    );
  }
}
 
ReactDOM.render(
  <App />,
  document.querySelector('body')
);

module.hot.accept()