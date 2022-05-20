export default class SceneController{

    static scenes = []

    static setScenes = (scenes) => {
        this.scenes = scenes
    }

    static setScene = (appState, sceneId) => {
        let update = {
            currentScene: sceneId
        }
        appState.setStateFunction(update, () => {
            document.querySelector('#sfxAudio').play()
        })
    }

    static getSceneIds = () => {
        return Object.keys(this.scenes)
    }

    static getSceneArray = () => {
        return Object.keys(this.scenes)
    }

    static getSceneName = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['name']){
            return this.scenes[sceneId]['name']
        }
    }

    static getSceneDescription = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['description']){
            return this.scenes[sceneId]['description']
        }
    }

    static getSceneVideo = (sceneId) => {
        if(this.scenes && this.scenes[sceneId]){
            return `./assets/scenes/${sceneId}/${sceneId}.mp4`
        }
    }

    static getSceneImage = (sceneId) => {
        if(this.scenes && this.scenes[sceneId]){
            return `./assets/scenes/${sceneId}/${sceneId}.jpg`
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

    static getSceneSourceVideoName = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['sourceVideoName']){
            return this.scenes[sceneId]['sourceVideoName']
        }
    }

    static getSceneSourceVideoURL = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['sourceVideoUrl']){
            return this.scenes[sceneId]['sourceVideoUrl']
        }
    }

    static getSceneSourceVideoArtist = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['sourceVideoArtist']){
            return this.scenes[sceneId]['sourceVideoArtist']
        }
    }

    static getSceneSourceVideoArtistURL = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['sourceVideoArtistURL']){
            return this.scenes[sceneId]['sourceVideoArtistURL']
        }
    }

    static getSceneSourceSfxName = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['sourceSfxName']){
            return this.scenes[sceneId]['sourceSfxName']
        }
    }

    static getSceneSourceSfxURL = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['sourceSfxURL']){
            return this.scenes[sceneId]['sourceSfxURL']
        }
    }

    static getSceneSourceSfxArtist = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['sourceSfxArtist']){
            return this.scenes[sceneId]['sourceSfxArtist']
        }
    }

    static getSceneSourceSfxArtistURL = (sceneId) => {
        if(this.scenes && this.scenes[sceneId] && this.scenes[sceneId]['sourceSfxArtistURL']){
            return this.scenes[sceneId]['sourceSfxArtistURL']
        }
    }
}