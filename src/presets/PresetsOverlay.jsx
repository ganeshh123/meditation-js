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
            <div className='md:flex-1 w-full p-2 flex flex-col items-center overflow-y-hidden'>
                <div className='lg:text-6xl text-5xl' style={this.presetsOverlayStyle}>
                    Presets
                </div>
                <CrossIcon
                    className='iconButton overlayCloseButton'
                    onClick={() => appState.setStateFunction({presetsOverlayShowing: false})}
                    style={this.presetsOverlayStyle}
                />
                <div className='flex-1 md:mt-5 mt-2 w-full flex flex-col md:justify-center justify-start items-center overflow-y-hidden'>
                    <PresetSelector appState={appState}/>
                </div>
            </div>
        );
    }
}

export default PresetsOverlay;