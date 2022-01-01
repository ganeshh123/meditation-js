import React from 'react'

export const SettingValueDisplay = (props) => {

    const {value, prefix, suffix, theme} = props

    const settingValueDisplayStyle = {
        backgroundColor: theme.backgroundColor
    }

    return(
        <>
            <div className={'settingValueDisplay glassBlock'} style={settingValueDisplayStyle}>
                <span>{prefix ?? ''}</span>
                <span>{value ?? ''}</span>
                <span>{suffix ?? ''}</span>
            </div>
        </>
    )
}

export default SettingValueDisplay