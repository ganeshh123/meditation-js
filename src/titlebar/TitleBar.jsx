import React from 'react';

import {AboutIcon, SettingsIcon} from '../icons';

import './titleBar.scss'

export default class TitleBar extends React.Component {

    constructor(props) {
        super(props)
    }

    setStyle = () => {
        const currentTheme = this.props.currentTheme

        this.titleBarStyle = {
            backgroundColor: currentTheme.backgroundColor,
            border: currentTheme.border,
            boxShadow: currentTheme.boxShadow,
            backdropFilter: currentTheme.backdropFilter,
            WebKitBackdropFilter: currentTheme.webkitBackdropFilter,
            color: currentTheme.accentColor
        }

        this.titleBarIconStyle = {
            color: currentTheme.accentColor
        }
    }

    settingsButtonPressed = () =>
        this.props.updateApp({
            settingsShowing: true
        })

    aboutButtonPressed = () =>
        this.props.updateApp({
            aboutShowing: true
        })

    appTitlePressed = () => (
        this.props.updateApp({
            presetsOverlayShowing: true
        })
    )


    render = () => {
        this.setStyle()

        return (
            <div id="titleBar" className="glassBlock" style={this.titleBarStyle}>
                <h1 id="appTitleText" onClick={this.appTitlePressed}>{this.props.appTitleText}</h1>
                <div id="titleBarButtonContainer">
                    <AboutIcon
                        style={this.titleBarIconStyle}
                        id="aboutButton"
                        className="iconButton titleBarIcon"
                        title="About"
                        accessKey="i"
                        onClick={this.aboutButtonPressed}
                    />
                    <SettingsIcon
                        style={this.titleBarIconStyle}
                        id="settingsButton"
                        className="iconButton titleBarIcon"
                        title="Settings"
                        accessKey="s"
                        onClick={this.settingsButtonPressed}
                    />
                </div>
            </div>
        );
    }

}