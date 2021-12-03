import React from 'react';

import SceneController from './SceneController'

import './media.scss'

export const SceneVideo = (props) => {

    const {videoDisabled, videoLoaded, scene, update} = props
    const videoContainer = React.useRef(null)
    const videoUrl = SceneController.getSceneVideo(scene)

    const videoFinishedLoading = (readyVideo) => {
        readyVideo.play()
        update({videoLoaded: true})
    }

    React.useEffect(() => {

        const dangerousVideo = videoContainer.current.children[0]

        if(videoDisabled){
            if(dangerousVideo && videoLoaded){
                update({videoLoaded: false})
            }
            return
        }

        if(dangerousVideo){
            dangerousVideo.src = videoUrl
            dangerousVideo.oncanplaythrough = () => videoFinishedLoading(dangerousVideo)
        }
    }, [videoUrl, videoDisabled])

    return(
        <div
            className={`absolute top-0 w-full h-full object-cover ${videoLoaded ? "sceneVideo showing visible" : "sceneVideo hidden invisible"}`}
            ref={videoContainer}
            dangerouslySetInnerHTML={{
                __html: `
                    <video
                        loop
                        muted
                        id='sceneVideo'
                        class='sceneVideo'
                        preload
                        playsinline
                        type='video/mp4'
                    />
                `
            }}
        />
    )
}

export default SceneVideo

