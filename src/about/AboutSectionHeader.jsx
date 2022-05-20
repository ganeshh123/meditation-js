export const AboutSectionHeader = (props) => {
    const {icon, text, theme} = props

    return(
        <div className={`about-section-header`}>
            {icon}
            <div className={`about-section-header-text`}>{text}</div>
            <div
                className={`about-section-header-line`}
                style={{
                    backgroundColor: theme.accentColor,
                }}
            >
            </div>
        </div>
    )
}