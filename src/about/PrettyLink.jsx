import {AboutIcon} from '../icons'

export const PrettyLink = (props) => {
    const {text, url} = props

    // TODO: Replace with Theme as appropriate
    const prettyLinkStyle = {
        color: '#d3ddd5'
    }

    if(text === undefined || text === ''){
        return <></>
    }

    return(
        <a
            className={'pretty-link'}
            style={prettyLinkStyle}
            href={url}
            target={`_blank`}
        >
            <span className={`pretty-link-text`}>
                {text}
            </span>
            <AboutIcon
                className={`pretty-link-icon`}
            />
        </a>
    )
}

export default  PrettyLink