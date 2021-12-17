import React from 'react'
import {BellIcon, BellOffIcon} from '../icons'

const MuteButtonProps = {
    className: 'alarmMuteButton'
}

export const VolumeControl = (props) => {

    const {volume, id, updateApp} = props

    const MuteButton = (volume) => {
        if(parseInt(volume) === 0){
            return(
                <BellOffIcon
                    {...MuteButtonProps}
                    onClick={() => updateApp({alarmVolume: 50})}
                />
            )
        }

        return(
            <BellIcon
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