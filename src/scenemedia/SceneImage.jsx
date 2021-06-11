/* Global Imports */
import React from 'react';

/* Local Imports */
import './sceneImageStyle.scss'


export default class SceneImage extends React.Component{
    constructor(props){
        super(props)

        this.sceneImageColors = {

        }

    }

    state = {

    }

    getImagePath = () => {
        let appState = this.props.appState
        let currentScene = appState['currentScene']
        if(appState['videoLoaded'] == true){
            return undefined
        }else{
            let blurImagePath = './assets/img/' + this.props.appState.mediaSources.scenes[currentScene].blur + '.jpg'
            return blurImagePath
        }
    }

    render(){
        return(
            <img
                id="sceneImage"
                style={this.sceneImageColors} 
                src={this.getImagePath()}
            />
        )
    }
}