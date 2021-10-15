
export default class VolumeController{

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
        if(volumeLevel == undefined){
            volumeLevel = 70
        }

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

    

}