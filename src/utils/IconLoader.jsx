import React from 'react'
import {SolidGlassIcon, BellIcon, BellOffIcon} from "../icons";


export const IconLoader = (props) => {
    const {iconName, iconProps} = props

    return(
        <>
            {iconName === 'SolidGlassIcon' && <SolidGlassIcon {...iconProps} />}
            {iconName === 'BellIcon' && <BellIcon {...iconProps} />}
            {iconName === 'BellOffIcon' && <BellOffIcon {...iconProps} />}
        </>
    )
}

export default IconLoader