import {PrettyLink} from './PrettyLink'
import {NoteIcon, MiniVideoIcon, SpeakerIcon} from '../icons'

export const NowPlayingItem = (props) => {
    const {
        mediaType,
        mediaName,
        sourceName,
        sourceUrl,
        sourceArtist,
        sourceArtistUrl
    } = props

    const MediaIcon = () => {
        const mediaIconCommonProps = {
            className: 'now-playing-item-media-icon'
        }

        if(mediaType === 'video'){
            return(
                <MiniVideoIcon {...mediaIconCommonProps} />
            )
        }
        if(mediaType === 'music'){
            return(
                <NoteIcon {...mediaIconCommonProps} />
            )
        }
        if(mediaType === 'sfx'){
            return(
                <SpeakerIcon {...mediaIconCommonProps} />
            )
        }
    }

    return(
        <div className={`now-playing-item`}>
            {MediaIcon()}
            <div className={`now-playing-item-info`}>
                <div className={`now-playing-item-media-name`}>
                    {mediaName}
                </div>
                <div className={`now-playing-item-media-source`}>
                    {sourceName && <PrettyLink text={sourceName} url={sourceUrl} />}
                    {(sourceName || sourceArtist) && <span>&nbsp; by &nbsp;</span>}
                    {sourceArtist && <PrettyLink text={sourceArtist} url={sourceArtistUrl}/>}
                </div>
            </div>
        </div>
    )

}