/* Global Imports */
import React from 'react';

/* Local Imports */
import Theme from '../utils/theme/Theme'
import './selectionVolumeControlStyle.scss'


export default class SelectionVolumeControl extends React.Component{
    constructor(props){
        super(props)
    }

    state = {

    }

    selectionVolumeControlStyle = {
        backgroundColor: Theme.current.backgroundColor
    }

    volumeIconStyle = {
        filter: Theme.current.iconColor
    }

    sourceSelectionChanged = (event) => {
        this.props.changeSourceFunction(this.props.sourceType, event.target.value)
    }

    getIconPath = () => {
        let iconPath = './assets/icons/icon_volume_'
        if(this.props.sourceType == 'musicTrack'){
            iconPath = iconPath + 'music.svg'
        }else{
            iconPath = iconPath +'scene.svg'
        }

        return iconPath
    }

    render(){
        console.log(this.props.sourcesArray)
        console.log(this.props.sources)
        return(
            <div className="selectionVolumeControl" style={this.selectionVolumeControlStyle}>
                <select className="sourceSelector" onChange={this.sourceSelectionChanged} value={this.props.selected}>
                    {this.props.sourcesArray.map((source) => {
                        return(
                            <option key={source.id} value={source.id}>{source.name}</option>
                        )
                    })}
                </select>
                <p className="sourceDescription">{this.props.sources[this.props.selected]['description']}</p>
                <div className="volumeSliderContainer">
                    <img 
                        className='volumeIcon' 
                        src={this.getIconPath()} 
                        style={this.volumeIconStyle}
                    />
                    <input className="volumeSlider" type="range" min="1" max="100"></input>
                </div>
            </div>
        )
    }
}