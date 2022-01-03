import React from 'react'
import IconLoader from '../utils/IconLoader'
import {ICON_PROPS} from './SettingsConstants'

export const SwitchSetting = (props) => {

    const {label, icon, buttonText, handleSwitch, theme, title} = props

    const buttonStyle = {
        backgroundColor: theme.buttonBackgroundColor,
        border: theme.border,
        boxShadow: theme.boxShadow,
        backdropFilter : theme.backdropFilter,
        WebkitBackdropFilter : theme.webkitBackdropFilter,
        color: theme.accentColor
    }

    return(
        <div className={'settingItem switchSetting'}>
            {icon ? <IconLoader iconName={icon} iconProps={ICON_PROPS} /> : <div {...ICON_PROPS} />}
            <div className={'settingItemLabel'}>{label}</div>
           <div className={'settingContainer'}>
               <div
                   className={'settingItemSwitch glassBlock'}
                   onClick={handleSwitch}
                   style={buttonStyle}
                   title={title}
               >
                   {buttonText}
               </div>
           </div>
        </div>
    )

}