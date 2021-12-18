import React from 'react'
import {BellIcon, BellOffIcon} from '../icons'

const MuteButtonProps = {
    className: 'alarmMuteButton'
}

export const AlarmVolumeControl = (props) => {

    const {volume, id, updateApp} = props

    const [localAlarmVolume, setLocalAlarmVolume] = React.useState(0)

    const MuteButton = (volume) => {
        if(parseInt(volume) === 0){
            return(
                <BellOffIcon
                    {...MuteButtonProps}
                    onClick={() => updateApp({alarmVolume: localAlarmVolume})}
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
                    const newVolume = e.target.value
                    setLocalAlarmVolume(newVolume)
                    updateApp({
                        alarmVolume: newVolume
                    })
                }}
            />
        </div>
    )
}

export default AlarmVolumeControl