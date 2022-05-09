import React from 'react'
import {CrossIcon} from '../icons'

export const About = (props) => {

    const { appState } = props
    const {currentTheme} = appState
    const updateApp = appState.setStateFunction

    const aboutStyle = {
        color: currentTheme.accentColor
    }

    return(
        <div id={`about`} className='overlayContainer' style={aboutStyle}>
            <div id='settingsTitle' className='overlayTitle'>
                About
            </div>
            <CrossIcon
                className='overlayCloseButton iconButton'
                onClick={() => updateApp({aboutShowing: false})}
                style={aboutStyle}
            />
            <div id={'aboutMenu'} className={`overlayContent`}>

            </div>
        </div>
    )
}

export default About