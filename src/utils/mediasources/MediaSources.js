import SceneController from '../../media/SceneController'
import MusicController from '../../media/MusicController'
import PresetsController from '../../presets/PresetsController'

class MediaSources {

    static fetchMediaInfo = (appState) =>{

        let fetchScenes = fetch('./assets/scenes.json')
            .then(response => response.json())
            .then((data) => {
                SceneController.setScenes(this.buildSourcesObject(data))
            })

        let fetchMusic = fetch('./assets/music.json')
            .then(response => response.json())
            .then((data) => {
                MusicController.setMusic(this.buildSourcesObject(data))
            })

        let fetchPresets = fetch('./assets/presets.json')
            .then(response => response.json())
            .then((data) => {
                PresetsController.setPresets(this.buildSourcesObject(data))
            })    

        Promise.all([fetchScenes, fetchMusic, fetchPresets]).then(() =>{
            appState.setStateFunction({mediaInfoFetched: true})
        })
    }

    static buildSourcesObject = (sourcesArray) => {
        let sourcesObject = {}
    
        sourcesArray.forEach((source) => {
            sourcesObject[source['id']] = source
        })
    
        return sourcesObject
    }
}

export default MediaSources