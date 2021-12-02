export default class PresetsController{

    static presets = []

    static getPresetIds = () => {
        return Object.keys(this.presets)
    }

    static getPreset = (presetId) => {
        if(this.presets && this.presets[presetId]){
            return this.presets[presetId]
        }
    }

    static getPresetName = (presetId) => {
        let preset = this.getPreset(presetId)
        if(preset['name']){
            return preset['name']
        }
    }

    static getPresetIcon = (presetId) => {
        let preset = this.getPreset(presetId)
        if(preset['icon']){
            return `./assets/icons/${preset['icon']}.svg`
        }
    }

    static getPresetBigIcon = (presetId) => {
        let preset = this.getPreset(presetId)
        if(preset['bigIcon']){
            return `./assets/icons/${preset['bigIcon']}.svg`
        }
    }

    static setPresets = (presets) => {
        this.presets = presets
    }

    static setPreset = (appState, presetId) => {
        let preset = this.getPreset(presetId)
        let update = {
            launchShowing: false,
            presetsOverlayShowing: false,
            firstTime: false,
            currentScene: preset['sceneId'],
            currentMusicTrack: preset['musicId'],
            videoLoaded: false,
            imageLoaded: false
        }
        
        appState.setStateFunction(update, () => {
            document.querySelector('#sfxAudio').play()
            document.querySelector('#musicAudio').play()
        })
    }

}