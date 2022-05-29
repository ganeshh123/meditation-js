import React from 'react'
import {
    SolidGlassIcon,
    BellIcon,
    BellOffIcon,
    PinIcon,
    NewTimerIcon,
    HideTimeIcon,
    EyeIcon,
    LargeBellIcon
} from "../icons";


export const IconLoader = (props) => {
    const {iconName, iconProps} = props

    return (
        <>
            {iconName === 'SolidGlassIcon' && <SolidGlassIcon {...iconProps} />}
            {iconName === 'BellIcon' && <BellIcon {...iconProps} />}
            {iconName === 'BellOffIcon' && <BellOffIcon {...iconProps} />}
            {iconName === 'PinIcon' && <PinIcon {...iconProps} />}
            {iconName === 'NewTimerIcon' && <NewTimerIcon {...iconProps}/>}
            {iconName === 'HideTimeIcon' && <HideTimeIcon {...iconProps} />}
            {iconName === 'EyeIcon' && <EyeIcon {...iconProps} />}
            {iconName === 'LargeBellIcon' && <LargeBellIcon {...iconProps} />}
        </>
    )
}

export default IconLoader