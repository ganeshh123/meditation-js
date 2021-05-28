/* Global Imports */
import React from 'react';

let Footer = (props) => {
    return(
        <div class="footer">
            <a href={props.url}>{props.text}</a>
        </div>
    )
}

export default Footer