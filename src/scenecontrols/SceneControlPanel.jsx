/* Global Imports */
import React from 'react';

/* Local Imports */
import Theme from '../utils/theme/Theme'
import './sceneControlPanelStyle.scss'


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

            </div>
        )
    }
}