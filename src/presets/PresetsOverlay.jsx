import React from 'react';
import {CrossIcon} from "../icons";
import PresetSelector from "./PresetSelector";

class PresetsOverlay extends React.Component {

    constructor(props){
        super(props)
    }

    setStyles = () => {
        this.presetsOverlayStyle = {
            color: this.props.appState.currentTheme.accentColor
        }
    }

    render = () => {

        const {appState} = this.props
        this.setStyles()

        return (
            <div className='overlayContainer'>
                <div className='overlayTitle' style={this.presetsOverlayStyle}>
                    Presets
                </div>
                <CrossIcon
                    className='iconButton overlayCloseButton'
                    onClick={() => appState.setStateFunction({presetsOverlayShowing: false})}
                    style={this.presetsOverlayStyle}
                />
                <div className='overlayContent'>
                    <PresetSelector appState={appState}/>
                </div>
            </div>
        );
    }
}

export default PresetsOverlay;