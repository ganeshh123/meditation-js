import React from 'react';

export const TimerLengthAdjuster = (props) => {

    const {theme, value, setValue, id, invalid, label} = props

    const [width, setWidth] = React.useState(3)

    const inputChanged = (event) =>{
        const newValue = event.target.value

        let newWidth = event.target.value.length + 1
        if(newWidth < 3){
            newWidth = 3
        }
        setWidth(newWidth)

        setValue(newValue)
    }

    const timerLengthAdjusterStyle ={
        color: theme.accentColor
    }

    const timerLengthAdjusterInputStyle = {
        borderWidth: invalid? '2px': '0px',
        borderColor: 'red',
        outlineColor: invalid? 'red': '#72ce35',
        borderStyle: 'solid',
        backgroundColor: theme.backgroundColor,
        color: theme.accentColor,
        minWidth: width + 'ch'
    }

    return(
        <div className='timerLengthAdjuster' style={timerLengthAdjusterStyle}>
            <div className={'timerLengthAdjusterInputContainer'}>
                <input
                    className="timerLengthAdjusterInput"
                    id={id}
                    style={timerLengthAdjusterInputStyle}
                    type="number"
                    value={value}
                    onChange={inputChanged}
                />
                <div className='timerLengthAdjusterUnit' style={timerLengthAdjusterStyle}>
                    mins
                </div>
            </div>
            <div className='timerLengthAdjusterType' style={timerLengthAdjusterStyle}>
                    {label}
            </div>
        </div>
    )
}

export default TimerLengthAdjuster