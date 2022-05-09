import React from 'react'
import {CrossIcon, PlayIcon, AboutIcon} from '../icons'
import './about.scss'
import {AboutSectionHeader} from './AboutSectionHeader'

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
                <AboutSectionHeader
                    icon={<PlayIcon className={`about-section-header-icon`} />}
                    text={`Now Playing`}
                    theme={currentTheme}
                />
                <AboutSectionHeader
                    icon={<AboutIcon className={`about-section-header-icon`} />}
                    text={`Credits`}
                    theme={currentTheme}
                />
            </div>
        </div>
    )
}

export default About