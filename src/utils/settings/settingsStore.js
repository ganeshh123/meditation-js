/* Local Imports */
import Theme from '../theme/Theme'

export default class SettingsStore {

    static userSettings = {
        currentScene: 'rain_on_leaves',
        currentMusicTrack: 'still',
        currentTheme: Theme.staticThemes['dark'],
        sceneAudioVolume: 50,
        musicAudioVolume: 20,
        alarmVolume: 70,
        //musicMuted: false,
        //sfxMuted: false,
        videoDisabled: false,
        //launchShowing: true
    }

    static loadSettings = (appState) => {

        if(!window.localStorage.getItem('userSettings')){
            return
        }

        let userSettings = JSON.parse(localStorage.getItem('userSettings'))

        appState.setStateFunction(userSettings)
    }

    static storeSettings = () => {
        window.localStorage.setItem('userSettings', JSON.stringify(this.userSettings))
    }

    static updateSettings = (appState) => {
        
        Object.keys(this.userSettings).forEach((key) => {
            this.userSettings[key] = appState[key]
        })

        this.storeSettings()
    }

}