import SettingsStore from "../settings/settingsStore"

export default class PresetsController{

    static getPreset = (appState, presetId) => {
        let presetsArray = appState['mediaSources']['presetsArray']

        for(let i = 0; i < presetsArray.length; i++){
            let preset = presetsArray[i]
            if(preset['id'] == presetId){
                return preset
            }
        }
    }

    static setPreset = (appState, presetId) => {
        let preset = this.getPreset(appState, presetId)

        let update = {
            launchShowing: false,
            firstTime: false
        }

        if(presetId != 'resume'){
            update['currentScene'] = preset['sceneId']
            update['currentMusicTrack'] = preset['musicId']
        }
        
        appState.setStateFunction(update, () => {
            document.querySelector('#sfxAudio').play()
            document.querySelector('#musicAudio').play()
            SettingsStore.updateSettings(appState)
        })
    }

}