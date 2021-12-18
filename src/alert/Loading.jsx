import React from 'react'
import {LoadingIcon} from '../icons'
import './alert.scss'

export default class Loading extends React.Component {

    constructor(props) {
        super(props)
    }

    isLoading = () => {
        let appState = this.props.appState
        let loadingConditions = [
            appState.mediaInfoFetched === false,
            appState.blurImageLoaded === false,
            appState.imageLoaded === false,
            appState.videoDisabled === false && appState.videoLoaded === false
        ]

        for (let condition of loadingConditions) {
            if (condition === true) {
                return true
            }
        }

        return false
    }

    setStyle = () => {
        this.loadingStyle = {
            color: this.props.appState.currentTheme.accentColor,
            visibility: this.isLoading() ? 'visible' : 'hidden'
        }
    }

    render() {
        this.setStyle()

        return (
                <LoadingIcon className='loading' style={this.loadingStyle}/>
        )
    }
}