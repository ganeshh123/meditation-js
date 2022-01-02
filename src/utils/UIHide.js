import SettingsController from '../settings/SettingsController'

export default class UIHide{

    static clockInterval
    static clockValue = 0
    static timerPinned = false

    static affectSelectors = [
        '#titleBar',
        '#leftPanel',
        '#rightPanel',
        '#mediaPanel',
        '#timerBottomBar',
        '#timerViewControls'
    ]

    static updateClock = (appState) => {

        const uiAutoHideTimer = parseInt(SettingsController.readSetting('uiAutoHideTimer'))

        let newClockValue

        if(this.clockValue === uiAutoHideTimer){
            this.hideUI(appState)
            newClockValue = 1
        }else{
            newClockValue = this.clockValue + 1
        }

        this.clockValue = newClockValue
        
    }
  
    static hideUI = (appState) => {

        const uiAutoHide = SettingsController.readSetting('uiAutoHide')
        if(uiAutoHide === false){
            return
        }

        if(this.timerPinned === false){
            document.querySelector('#timer').classList.remove('playFadeIn')
            document.querySelector('#timer').classList.add('playFadeOut')
            document.querySelector('#timer').style.opacity = '0'
        }

        this.affectSelectors.forEach((selector) => {
            document.querySelector(selector).classList.remove('playFadeIn')
            document.querySelector(selector).classList.add('playFadeOut')
            document.querySelector(selector).style.opacity = '0'
        })

        if(appState.videoDisabled === false && appState.videoLoaded === false){
            document.querySelector('#videoLoading').style.opacity = '1'
        }
    }

    static showUI = (appState) => {

        this.affectSelectors.forEach((selector) => {
            document.querySelector(selector).classList.remove('playFadeOut')
            document.querySelector(selector).classList.add('playFadeIn')
            document.querySelector(selector).style.opacity = '1'
        })

        if(this.timerPinned === false){
            document.querySelector('#timer').classList.remove('playFadeOut')
            document.querySelector('#timer').classList.add('playFadeIn')
        }
        document.querySelector('#timer').style.opacity = '1'
    }

    static setClockInterval = (appState) => {
        this.clockValue = 0
        this.clockInterval = setInterval(() => {
            this.updateClock(appState)
        }, 1000)
    }

    static setup = (appState) => {
        document.addEventListener('mousemove', () => {
            clearInterval(this.clockInterval)
            this.showUI(appState)
            this.setClockInterval(appState)
        })
        this.setClockInterval(appState)
    }
}