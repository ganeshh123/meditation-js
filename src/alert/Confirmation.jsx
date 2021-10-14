import React from 'react';

import './alert.scss'

export default class Confirmation extends React.Component {

    constructor(props) {
        super(props)
    }

    setStyle = () => {
        this.confirmationStyle = {
            color: this.props.appState.currentTheme.accentColor
        }

        this.confirmationButtonStyle = {
            backgroundColor: this.props.appState.currentTheme.buttonBackgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            WebkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }
    }

    render() { 
        this.setStyle()
        let config = this.props.appState.confirmationConfig

        return (
            <div className="confirmation" style={this.confirmationStyle}>
                <div className="confirmationMessage">{config.message}</div>
                <div className="confirmationChoiceContainer">
                    <div
                        className="confirmationChoice"
                        style={this.confirmationButtonStyle}
                        onClick={config.negativeAction}
                    >
                        {config.negativeLabel}
                    </div>
                    <div
                        className="confirmationChoice"
                        style={this.confirmationButtonStyle}
                        onClick={config.positiveAction}
                    >
                        {config.positiveLabel}
                    </div>
                </div>
            </div>
        )
    }
}