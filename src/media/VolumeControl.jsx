import React from 'react'
import {SpeakerIcon, SpeakerOffIcon} from '../icons'

export const VolumeControl = (props) => {

    const {type, volume, updateApp, currentTheme} = props
    const [localVolume, setLocalVolume] = React.useState(50)
    const updateKey = (type === 'scene') ? 'sceneAudioVolume' : ((type === 'musicTrack') ? 'musicAudioVolume' : '')

    const MuteButton = () => {
        const muteButtonProps = {
            className: 'volumeIcon iconButton',
            style: {color: currentTheme['accentColor']}
        }

        if(parseInt(volume) === 0){
            return(
                <SpeakerOffIcon
                    {...muteButtonProps}
                    onClick={() => updateApp({[updateKey]: localVolume})}
                />
            )
        }
        return(
            <SpeakerIcon
                {...muteButtonProps}
                onClick={() => updateApp({[updateKey]: 0})}
            />
        )
    }

    return(
        <div className='volumeSliderContainer'>
            {MuteButton()}
            <input
                className='volumeSlider'
                id={`${type}VolumeSlider`}
                type='range'
                min='0'
                max='100'
                value={volume}
                onChange={(e) => {
                    const newVolume = e.target.value
                    setLocalVolume(newVolume)
                    updateApp({
                        [updateKey]: newVolume
                    })
                }}
            />
        </div>
    )
}

export default VolumeControl