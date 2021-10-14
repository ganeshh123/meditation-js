let fetchSync = require('sync-fetch')

import PresetsController from '../../presets/PresetsController'


class MediaSources {

    static presetsArray = []

    static fetchMediaInfo = (appState) =>{

        let fetchPresets = fetch('./assets/presets.json')
                            .then(response => response.json())
                            .then((data) => {
                                PresetsController.setPresets(data)
                            })
        
        Promise.all([fetchPresets]).then(() =>{
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

    static scenesArray = fetchSync('./assets/scenes.json', 
        {headers: {Accept: 'application/vnd.citationstyles.csl+json'}
    }).json()

    static musicTracksArray = fetchSync('./assets/musicTracks.json', 
        {headers: {Accept: 'application/vnd.citationstyles.csl+json'}
    }).json()

    static scenes = this.buildSourcesObject(this.scenesArray)
    static musicTracks = this.buildSourcesObject(this.musicTracksArray)

    /* Scene Functions */
    static getScenesArray = () => {
        return this.scenesArray
    }

    static getScenes = () => {
        return this.scenes
    }

    static getSceneName = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['name']){
            return this.scenes[sceneId]['name']
        }
    }

    static getSceneVideo = (sceneId) => {
        if(this.scenes && this.scenes[sceneId]){
            return `./assets/scenes/${sceneId}/${sceneId}.mp4`
        }
    }

    static getSceneImage = (sceneId) => {
        if(this.scenes && this.scenes[sceneId]){
            return `./assets/scenes/${sceneId}/${sceneId}.png`
        }
    }

    static getSceneImageBlur = (sceneId) => {
        if(this.scenes && this.scenes[sceneId]){
            return `./assets/scenes/${sceneId}/${sceneId}-blur.jpg`
        }
    }

    static getSceneImageThumb = (sceneId) => {
        if(this.scenes && this.scenes[sceneId]){
            return `./assets/scenes/${sceneId}/${sceneId}-thumb.jpg`
        }
    }

    static getSceneSfx = (sceneId) => {
        if(this.scenes && this.scenes[sceneId]){
            return `./assets/scenes/${sceneId}/${sceneId}.mp3`
        }
    }

    /* Music Track Functions */
    static getMusicArray = () => {
        return this.musicTracksArray
    }

    static getMusic= () => {
        return this.musicTracks
    }

    static getMusicName = (musicId) => {
        if(this.musicTracks && this.musicTracks[musicId] && this.musicTracks[musicId]['name']){
            return this.musicTracks[musicId]['name']
        }
    }

    static getMusicDescription = (musicId) => {
        if(this.musicTracks && this.musicTracks[musicId] && this.musicTracks[musicId]['description']){
            return this.musicTracks[musicId]['description']
        }
    }

    static getMusicAudio = (musicId) => {
        if(this.musicTracks && this.musicTracks[musicId]){
            return `assets/music/${musicId}/${musicId}.mp3`
        }
    }

    static getMusicImage = (musicId) => {
        if(this.musicTracks && this.musicTracks[musicId]){
            return `assets/music/${musicId}/${musicId}.jpg`
        }
    }

    static getMusicImageThumb = (musicId) => {
        if(this.musicTracks && this.musicTracks[musicId]){
            return `assets/music/${musicId}/${musicId}-thumb.jpg`
        }
    }
    
    static getPresetArray = () => {
        return this.presetsArray
    }
}

export default MediaSources