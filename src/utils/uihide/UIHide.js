export default class UIHide{

    static clockInterval
    static clockValue = 0

    static updateClock = (appState) => {

        let newClockValue

        if(this.clockValue == 5){
            this.hideUI(appState)
            newClockValue = 1
        }else{
            newClockValue = this.clockValue + 1
        }

        this.clockValue = newClockValue
        
    }
  
    static hideUI = (appState) => {
        document.querySelector('#appCenter').style.justifyContent = "flex-end"
        appState.setStateFunction({
            uiShow: false
        })
    }

    static showUI = (appState) => {
        document.querySelector('#appCenter').style.justifyContent = "center"
        appState.setStateFunction({
            uiShow: true
        })
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