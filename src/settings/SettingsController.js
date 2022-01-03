import ThemeController from '../theme/ThemeController'

export default class SettingsController{

    static userSettings = {
        currentScene: 'campfire-woods',
        currentMusicTrack: 'retro-dreamscape',
        currentTheme: CSS.supports('backdrop-filter') ? ThemeController.staticThemes['dark'] : ThemeController.staticThemes['darkNb'],
        sceneAudioVolume: 50,
        musicAudioVolume: 20,
        alarmVolume: 70,
        uiAutoHide: true,
        uiAutoHideTimer: 5,
        videoDisabled: false,
        timerPinned: false,
        timerEnabled: false,
        firstTime: true
    }

    static fetchSettings = () => {
        if(!window.localStorage.getItem('userSettings')){
            return
        }

        let userSettings = JSON.parse(localStorage.getItem('userSettings'))

        return userSettings
    }

    static loadSettings = (appState) => {

        if(!window.localStorage.getItem('userSettings')){
            return
        }

        let userSettings = this.fetchSettings()

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

    static readSetting = (settingKey) => {
        let userSettings = this.fetchSettings()

        if(!userSettings){
            return
        }

        return userSettings[settingKey]
    }

    static storeData = (dataKey, dataValue) => {
        window.localStorage.setItem(dataKey, JSON.stringify(dataValue))
    }

    static readData = (dataKey) => {
        return JSON.parse(localStorage.getItem(dataKey))
    }

    static deleteData = (dataKey) => {
        window.localStorage.removeItem(dataKey)
    }

    static resetAppSettings = (appState) => {
        appState.setStateFunction({
            currentTheme: ThemeController.staticThemes['dark'],
            alarmVolume: 70
        })
    }

}