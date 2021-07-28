/* Global Imports */
import React from 'react';

import './presetsMenuStyles.scss'

export default class PresetsMenu extends React.Component{
    constructor(props){
        super(props)
    }

    setColors = () => {
        this.presetsMenuColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            webkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.presetsMenuIconColors = {
            filter: this.props.appState['currentTheme']['iconColor']
        }
    }

    state={

    }

    render(){

        this.setColors()

        let appState = this.props.appState
        let presetsArray = appState['mediaSources']['presetsArray']

        return(
            <div id='presetsMenu' className='glassBlock' style={this.presetsMenuColors}>
                
                {presetsArray.map((preset, index) => {
                    return(
                        <div className='presetsMenuButton' key={preset['id']}>
                            <img 
                                src={'./assets/icons/' + preset['icon']}
                                style={this.presetsMenuIconColors}
                                id={preset['id'] + 'PresetMenuButtonIcon'}
                                className='presetsMenuButtonIcon'
                            />
                            <div 
                                id={preset['id'] + 'PresetsMenuButtonText'}
                                className='presetsMenuButtonText'
                                style={{color: 'inherit'}}
                            >
                                {preset['name']}
                            </div>
                        </div>
                    )
                } )}

            </div>
        )
    }
}