
let StaticThemes = require('../theme/StaticThemes')

export default class SettingsController{


    static toggleAlarmVolume(appState){

        let volumePreset = this.getAlarmVolumeString(appState)
        let newVolumeLevel;

        switch(volumePreset){
            case 'off':
                newVolumeLevel = 40
                break
            case 'low':
                newVolumeLevel = 70
                break
            case 'medium':
                newVolumeLevel = 100
                break
            case 'high':
                newVolumeLevel = 0
                break
            default:
                newVolumeLevel = 70
        }

        appState.setStateFunction({
            alarmVolume: newVolumeLevel
        })
    }

    static getAlarmVolumeString(appState){

        let volumeLevel = appState['alarmVolume']
        let volumeLevelString = ''
        if(volumeLevel == undefined){
            volumeLevel = 70
        }
        console.log(volumeLevel)

        if(volumeLevel <= 0){
            return 'off'
        }else if(volumeLevel <= 40){
            return 'low'
        }else if(volumeLevel > 70){
            return 'high'
        }else{
            return 'medium'
        }
    }

    static toggleSolidBg = (appState) => {

        let currentThemeName = appState['currentTheme']['name']
        let solidBg = this.getSolidBg(appState)
        let newThemeObject

        if(solidBg == 'Off'){
            if(currentThemeName.includes('light')){
                newThemeObject = StaticThemes['lightSolid']
            }else{
                newThemeObject = StaticThemes['darkSolid']
            }
        }else{
            if(currentThemeName.includes('light')){
                newThemeObject = StaticThemes['light']
            }else{
                newThemeObject = StaticThemes['dark']
            }
        }

        appState.setStateFunction({
            currentTheme: newThemeObject
        })

    }

    static getSolidBg = (appState) => {

        let currentThemeName = appState['currentTheme']['name']
        

        if(currentThemeName.indexOf('Solid') > -1){
            return 'On'
        }else{
            return 'Off'
        }
    }

    static resetAppSettings = (appState) => {
        appState.setStateFunction({
            currentTheme: StaticThemes['dark'],
            alarmVolume: 70
        })
    }

}