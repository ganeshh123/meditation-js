import {AboutIcon} from '../icons'

export const PrettyLink = (props) => {
    const {text, url} = props

    // TODO: Replace with Theme as appropriate
    const prettyLinkStyle = {
        color: '#d3ddd5'
    }

    return(
        <a
            className={'pretty-link'}
            style={prettyLinkStyle}
            href={url}
            target={`_blank`}
        >
            <div className={`pretty-link-text`}>
                {text}
            </div>
            <AboutIcon
                className={`pretty-link-icon`}
            />
        </a>
    )
}

export default  PrettyLink