import React from 'react';

import './alert.scss'

export default class Loading extends React.Component {

    constructor(props) {
        super(props)
    }

    showLoading = () => {
        let appState = this.props.appState
        let loadingConditions = [
            appState.mediaInfoFetched == false,
            appState.imageLoaded = false,
            appState.videoDisabled == false && appState.videoLoaded == false
        ]
        let shouldShowLoading = false

        for (let condition of loadingConditions) {
            if (condition == true) {
                shouldShowLoading = true
                break
            }
        }

        return shouldShowLoading
    }

    setStyle = () => {
        this.loadingStyle = {
            visibility: this.showLoading() ? 'visible' : 'hidden'
        }
        this.loadingIconStyle = {
            backgroundImage: "url('./assets/icons/loading.png')"
        }
    }

    render() {
        this.setStyle()

        return (
            <div className="loading" style={this.loadingStyle}>
                <i className="dot-spinner-64x64" style={this.loadingIconStyle} />
            </div>
        )
    }
}