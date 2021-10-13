import SettingsStore from "../settings/settingsStore"

import MediaSources from "../mediasources/MediaSources"

export default class PresetsController{

    static setPreset = (appState, presetId) => {
        let preset = MediaSources.getPreset(presetId)

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