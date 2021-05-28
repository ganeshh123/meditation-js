/* Global Imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Local Imports */

class App extends React.Component {
  render() {
    return(
      <div id="app">
          <video autoplay loop muted id="video" type="video/mp4">
              <source src="" type="video/mp4" />
          </video>
          
          <div id="infoPanel">
              <div id="infoText">
                  <h1>Headphones Recommended</h1>
                  <i class="fas fa-headphones"></i>
              </div>
              
          </div>

          <div id='container'>

          </div>

          <div class="controls">
              <div class="sceneSelect">
                  <button onClick="goButton()" id='gobutton'>GO</button>
              </div>
          </div>


          <div class="footer">
              <a href="https://ganeshh123.github.io">Ganesh H</a>
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