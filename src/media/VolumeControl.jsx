import React from 'react'
import {SpeakerIcon, SpeakerOffIcon} from '../icons'
import SettingValueDisplay from '../settings/SettingValueDisplay'

export const VolumeControl = (props) => {

    const {type, volume, updateApp, currentTheme, title} = props
    const [localVolume, setLocalVolume] = React.useState(50)
    const updateKey = (type === 'scene') ? 'sceneAudioVolume' : ((type === 'musicTrack') ? 'musicAudioVolume' : '')

    const [showValue, setShowValue] = React.useState(false)
    const hideValue = () => setShowValue(false)

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
                    title={(type === 'scene') ? 'Unmute Sound Effect' : 'Unmute Music'}
                />
            )
        }
        return(
            <SpeakerIcon
                {...muteButtonProps}
                onClick={() => updateApp({[updateKey]: 0})}
                title={(type === 'scene') ? 'Mute Sound Effect' : 'Mute Music'}
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
                title={title}
                onInput={() => {
                    setShowValue(true)
                }}
                onMouseUp={hideValue}
                onTouchEnd={hideValue}
                onKeyUp={hideValue}
            />
            {showValue &&
                <SettingValueDisplay
                    value={volume}
                    prefix={undefined}
                    suffix={undefined}
                    theme={currentTheme}
                />
            }
        </div>
    )
}

export default VolumeControl