export default class SettingsController{


    static toggleAlarmVolume(appState){

        let volumePreset = this.getAlarmVolumeString(appState)
        let newVolumeLevel;

        switch(volumePreset){
            case 'low':
                newVolumeLevel = 40
                break
            case 'medium':
                newVolumeLevel = 70
                break
            case 'high':
                newVolumeLevel = 100
                break
            default:
                newVolumeLevel = 70
        }

        appState.setStateFunction({
            alarmVolume: newVolumeLevel
        })
    }

    static getAlarmVolumeString(appState){

        let volumeLevel = appState['alarmVolume'] || 70
        let volumeLevelString = ''

        if(volumeLevel <= 40){
            return 'Low'
        }else if(volumeLevel > 70){
            return 'High'
        }else{
            return 'Medium'
        }
    }

}