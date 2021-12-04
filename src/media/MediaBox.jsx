import React from 'react'
import SceneController from './SceneController'
import MusicController from './MusicController'
import './mediaSelect.scss'

export const MediaBox = (props) => {

    const {appState, mediaId} = props
    const type = appState.mediaSelectConfig['type']
    const currentTheme = appState.currentTheme

    const mediaBoxClicked = () => {
        let updateState = {
            mediaSelectShowing: false
        }

        if(type === 'scene'){
            updateState['currentScene'] = mediaId
            updateState['videoLoaded'] = false
            updateState['imageLoaded'] = false
        }
        if(type === 'musicTrack'){
            updateState['currentMusicTrack'] = mediaId
        }

        appState.setStateFunction(updateState)
    }

    const mediaBoxStyle = {
        backgroundColor: currentTheme.backgroundColor,
        boxShadow: currentTheme.boxShadow,
        color: currentTheme.accentColor
    }

    return(
        <div className={`mediaBox`} style={mediaBoxStyle}>
           <div className={`relative`}>
               <div
                   className={`mediaBoxDescription`}
                   style={{backgroundColor: currentTheme.overlayColor}}
                   onClick={mediaBoxClicked}
               >
                   {type === "scene" ? SceneController.getSceneDescription(mediaId) : MusicController.getMusicDescription(mediaId)}
               </div>
               <div
                className={`mediaBoxImage`}
                style={{backgroundImage: `url('${type === 'scene' ? 
                        SceneController.getSceneImageThumb(mediaId) : 
                        MusicController.getMusicImageThumb(mediaId)}')`}}
                />
           </div>
            <div className={`mediaBoxTitle`} >
                {type === "scene" ? SceneController.getSceneName(mediaId) : MusicController.getMusicName(mediaId)}
            </div>
        </div>
    )
}

export default MediaBox