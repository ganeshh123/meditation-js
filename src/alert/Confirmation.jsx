import React from 'react';

import './alertStyles.scss'

const Confirmation = (props) => {
    return (
    <div className="confirmation">
        <div className="confirmationMessage">{props.message}</div>
        <div className="confirmationChoiceContainer">
            <div 
                className="confirmationChoice"
                id="confirmationNegativeChoice"
                onClick={props.negativeAction}
            >
                {props.negativeLabel}
            </div>
            <div 
                class="confirmationChoice"
                id="confirmationPositiveChoice"
                onClick={props.positiveAction}
            >
                {props.positiveLabel}
            </div>
        </div>
    </div>
    )
}
 
export default Confirmation