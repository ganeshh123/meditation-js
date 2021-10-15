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
}