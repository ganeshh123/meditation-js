import React from 'react'
import IconLoader from '../utils/IconLoader';
import {ICON_PROPS} from './SettingsConstants'
import SettingValueDisplay from './SettingValueDisplay'

export const SliderSetting = (props) => {

    const {label, icon, value, handleChange, theme, min, max, step} = props
    const [showValue, setShowValue] = React.useState(false)

    const hideValue = () => setShowValue(false)

    return(
        <>
            <div className={'settingItem sliderSetting'}>
                <IconLoader iconName={icon} iconProps={ICON_PROPS} />
                <div className={'settingItemLabel'}>{label}</div>
                <div className={'settingContainer'}>
                    <input
                        className='settingItemSlider'
                        type='range'
                        min={min ?? 0}
                        max={max ?? 100}
                        step={step ?? 1}
                        value={value}
                        onChange={(e) => {
                            handleChange(e.target.value)
                        }}
                        onInput={() => {
                            setShowValue(true)
                        }}
                        onMouseUp={hideValue}
                        onTouchEnd={hideValue}
                        onKeyUp={hideValue}
                    />
                </div>
            </div>
            {showValue &&
                <SettingValueDisplay
                    value={value}
                    theme={theme}
                />
            }
        </>
    )
}

export default SliderSetting