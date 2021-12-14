import React from 'react'
import {SpeakerIcon, SpeakerOffIcon} from '../icons'

const MuteButtonProps = {
    className: 'alarmMuteButton'
}

export const VolumeControl = (props) => {

    const {volume, id, updateApp} = props

    const MuteButton = (volume) => {
        if(parseInt(volume) === 0){
            return(
                <SpeakerOffIcon
                    {...MuteButtonProps}
                    onClick={() => updateApp({alarmVolume: 50})}
                />
            )
        }

        return(
            <SpeakerIcon
                {...MuteButtonProps}
                onClick={() => updateApp({alarmVolume: 0})}
            />
        )
    }

    return(
        <div className={'alarmVolumeControl'}>
            {MuteButton(volume)}
            <input
                className='alarmVolumeSlider'
                id={id}
                type='range'
                min='0'
                max='100'
                value={volume}
                onChange={(e) => {
                    updateApp({
                        alarmVolume: e.target.value
                    })
                }}
            />
        </div>
    )
}

export default VolumeControl