/* Global Imports */
import React from 'react';

import './alertStyles.scss'

export default class Confirmation extends React.Component {

    constructor(props) {
        super(props)
    }

    setColors = () => {
        this.confirmationColors = {
            //backgroundColor: this.props.appState.currentTheme.backgroundColor,
            //border: this.props.appState.currentTheme.border,
            //boxShadow: this.props.appState.currentTheme.boxShadow,
            //backdropFilter : this.props.appState.currentTheme.backdropFilter,
            //WebKitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.confirmationButtonColors = {
            backgroundColor: this.props.appState.currentTheme.buttonBackgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }
    }

    render() {

        this.setColors()

        let config = this.props.appState.confirmationConfig

        return (
            <div className="confirmation" style={this.confirmationColors}>
                <div className="confirmationMessage">{config.message}</div>
                <div className="confirmationChoiceContainer">
                    <div
                        className="confirmationChoice"
                        style={this.confirmationButtonColors}
                        id="confirmationNegativeChoice"
                        onClick={config.negativeAction}
                    >
                        {config.negativeLabel}
                    </div>
                    <div
                        className="confirmationChoice"
                        style={this.confirmationButtonColors}
                        id="confirmationPositiveChoice"
                        onClick={config.positiveAction}
                    >
                        {config.positiveLabel}
                    </div>
                </div>
            </div>
        )
    }
}