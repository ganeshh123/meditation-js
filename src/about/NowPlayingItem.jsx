import {PrettyLink} from './PrettyLink'
import {NoteIcon, VideoOnIcon, SpeakerIcon} from '../icons'

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
                <VideoOnIcon {...mediaIconCommonProps} />
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
                    <PrettyLink text={sourceName} url={sourceUrl} />
                    <span>&nbsp; by &nbsp;</span>
                    <PrettyLink text={sourceArtist} url={sourceArtistUrl}/>
                </div>
            </div>
        </div>
    )

}