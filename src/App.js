/* Global Imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Local Imports */
import Footer from './Footer'

class App extends React.Component {
  render() {
    return(
      <div id="app">

          <Footer url='https://ganeshh123.github.io' text='Ganesh H' />
      </div>
    );
  }
}
 
ReactDOM.render(
  <App />,
  document.querySelector('body')
);

module.hot.accept()