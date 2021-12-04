import React from 'react';
import MediaBox from './MediaBox'
import SceneController from './SceneController'
import MusicController from './MusicController'
import {CrossIcon} from '../icons'
import './mediaSelect.scss'

export const MediaSelect = (props) => {

    const {appState} = props
    const type = appState.mediaSelectConfig['type']
    const update = appState.setStateFunction

    const getMediaIds = () => type === 'scene' ? SceneController.getSceneIds() : MusicController.getMusicIds()

    const mediaSelectStyle = {
        color: appState.currentTheme.accentColor
    }

    React.useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if(event.key === 'Escape'){
                appState.setStateFunction({
                    mediaSelectShowing: false,
                    mediaSelectConfig: {}
                })
            }
        })
    }, [])

    return(
        <div className='overlayContainer'
             style={mediaSelectStyle}
        >
            <div className='overlayTitle'>
                {type === 'scene' ? 'Locations' : 'Soundtracks'}
            </div>
            <CrossIcon
                className='overlayCloseButton iconButton'
                onClick={() => update({mediaSelectShowing: false})}
                style={mediaSelectStyle}
            />
            <div className="overlayContent">
                <div className='mediaSelectMenu'>
                    {appState.mediaInfoFetched &&
                    getMediaIds().map((mediaId, index) => {
                        return(
                            <MediaBox appState={appState} mediaId={mediaId} key={index} />
                        )
                    } )
                    }
                </div>
            </div>
        </div>
    )
}

export default MediaSelect

// export default class MediaSelect extends React.Component{
//
//     constructor(props){
//         super(props)
//     }
//
//     setStyle = () => {
//         this.mediaSelectStyle = {
//             color: this.props.appState.currentTheme.accentColor
//         }
//
//         this.mediaSelectButtonStyle = {
//             backgroundColor: this.props.appState.currentTheme.buttonBackgroundColor,
//             border: this.props.appState.currentTheme.border,
//             boxShadow: this.props.appState.currentTheme.boxShadow,
//             backdropFilter : this.props.appState.currentTheme.backdropFilter,
//             WebkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
//             color: this.props.appState.currentTheme.accentColor
//         }
//     }
//
//     setupKeys = () => {
//         let appState = this.props.appState
//         document.addEventListener('keydown', (event) => {
//             if(event.key == 'Escape'){
//                 appState.setStateFunction({
//                     mediaSelectShowing: false,
//                     mediaSelectConfig: {}
//                 })
//             }
//         })
//     }
//
//     getMediaSelectTitle = () => {
//         let type = this.props.appState.mediaSelectConfig['type']
//
//         if(type == 'scene'){
//             return 'Locations'
//         }
//         if(type == 'musicTrack'){
//             return 'Soundtracks'
//         }
//     }
//
//     getMediaIds = () => {
//         let type = this.props.appState.mediaSelectConfig['type']
//
//         if(type == 'scene'){
//             return SceneController.getSceneIds()
//         }
//         if(type == 'musicTrack'){
//             return MusicController.getMusicIds()
//         }
//     }
//
//     mediaSelectCloseButtonPressed = () =>{
//         let appState = this.props.appState
//
//         appState.setStateFunction({
//             mediaSelectShowing: false
//         })
//     }
//
//     render(){
//         this.setStyle()
//         this.setupKeys()
//         let appState = this.props.appState
//
//         return(
//             <div className='mediaSelect' style={this.mediaSelectStyle} onClick={this.mediaSelectCloseButtonPressed}>
//                 <div className='mediaSelectTitle'>
//                     {this.getMediaSelectTitle()}
//                 </div>
//                 <CrossIcon
//                     className='overlayCloseButton iconButton'
//                     onClick={this.mediaSelectCloseButtonPressed}
//                     style={this.mediaSelectStyle}
//                 />
//                 <div className="mediaSelectMenuContainer">
//                 <div className='mediaSelectMenu'>
//
//                     {appState.mediaInfoFetched && this.getMediaIds().map((mediaId, index) => {
//                         return(
//                             <MediaBox appState={appState} mediaId={mediaId} key={index} />
//                         )
//                     } )}
//
//                 </div>
//                 </div>
//             </div>
//         )
//     }
// }