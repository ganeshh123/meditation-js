import React from 'react'
import IconLoader from '../utils/IconLoader';
import {ICON_PROPS} from './SettingsConstants'

export const SliderSetting = (props) => {

    const {label, icon, value, handleChange} = props

    return(
        <div className={'settingItem sliderSetting'}>
            <IconLoader iconName={icon} iconProps={ICON_PROPS} />
            <div className={'settingItemLabel'}>{label}</div>
            <div className={'settingContainer'}>
                <input
                    className='settingItemSlider'
                    type='range'
                    min='0'
                    max='100'
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SliderSetting