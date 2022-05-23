export const DevCard = (props) => {
    const {text, image, url, theme} = props

    const devCardStyle = {
        color: theme.accentColor,
        backgroundColor: theme.backgroundColor
    }

    return(
        <a
            className={`dev-card`}
            style={devCardStyle}
            href={url}
            target={`_blank`}
        >
            <img className={`dev-card-image`} src={image} alt={`${text}-image`}/>
            <div className={`dev-card-text`}>
                {text}
            </div>
        </a>
    )
}

export default DevCard