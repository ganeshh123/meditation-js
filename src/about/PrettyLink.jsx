import {HyperlinkIcon} from '../icons'

export const PrettyLink = (props) => {
    const {text, url} = props

    if(text === undefined || text === ''){
        return <></>
    }

    return(
        <a
            className={'pretty-link'}
            href={url}
            target={`_blank`}
        >
            <span className={`pretty-link-text`}>
                {text}
            </span>
            <HyperlinkIcon
                className={`pretty-link-icon`}
            />
        </a>
    )
}

export default  PrettyLink