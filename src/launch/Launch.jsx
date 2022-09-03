import React from 'react';
import PresetSelector from '../presets/PresetSelector';
import { AboutIcon } from '../icons'

export default class Launch extends React.Component{

    constructor(props){
        super(props)
    }

    setStyle = () => {
        this.launchStyle = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.launchIconStyle = {
            color: this.props.appState.currentTheme.iconColor
        }

        this.launchButtonStyle = {
            backgroundColor: this.props.appState.currentTheme.buttonBackgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }
    }

    isFirstTime = () => {
        let appState = this.props.appState
        return appState['firstTime']
    }

    launchContinueButtonPressed = () => {
        let appState = this.props.appState

        appState.setStateFunction({
            launchShowing: false
        }, () => {
            document.querySelector('#sfxAudio').play()
            document.querySelector('#musicAudio').play()
        })
    }
    
    render(){
        this.setStyle()

        return(
            <div
                id='launch'
                className='overlayContainer'
                style={this.launchStyle}
            >
                <div id="launchTitle" className='text-6xl md:text-7xl mt-2 mb-4 md:mt-4 md:mb-10'>Calmeo</div>
                {this.isFirstTime() && 
                    <div id="launchMessage" className='text-3xl md:text-4xl mb-4'>What would you like to do?</div>
                }
                <div id="launchContent" className='flex-1 w-full flex items-stretch overflow-y-hidden md:overflow-x-hidden'>
                    {this.isFirstTime() &&
                        <PresetSelector appState={this.props.appState} />
                    }
                    {!this.isFirstTime() &&
                        <div className='w-full flex flex-col justify-center items-center mb-32 md:mb-28'>
                            <div id="returningMessage" className='text-4xl mb-5 md:text-5xl md:mb-10'>
                                Welcome Back
                            </div>
                            <div
                                id="returningButton"
                                style={this.launchButtonStyle}
                                onClick={this.launchContinueButtonPressed}
                                className='cursor-pointer p-2 rounded-xl text-2xl md:text-3xl md:p-4'
                            >
                                Continue
                            </div>
                        </div>
                    }
                </div>
                {this.isFirstTime() &&
                    <div className='launchNotification flex justify-center items-center my-2 text-xl md:my-6 md:text-2xl'>
                    <AboutIcon
                        style={this.launchIconStyle}
                        className='h-6 w-6 mr-3 md:h-8 md:w-8 md:mr-4'
                    />
                    Headphones Recommended
                    </div>
                }
            </div>
        )
    }
}