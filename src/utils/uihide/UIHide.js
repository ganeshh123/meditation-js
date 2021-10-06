export default class UIHide{

    static clockInterval
    static clockValue = 0
    static timerPinned = false

    static affectSelectors = [
        '#titleBar',
        '#leftPanel',
        '#rightPanel',
        '#sceneControlPanel',
        '#timerBottomBar',
        '#timerViewControls'
    ]

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

        if(this.timerPinned == false){
            document.querySelector('#timer').classList.remove('showing')
            document.querySelector('#timer').classList.add('hidden')
            document.querySelector('#timer').style.opacity = '0'
        }

        this.affectSelectors.forEach((selector) => {
            document.querySelector(selector).classList.remove('showing')
            document.querySelector(selector).classList.add('hidden')
            document.querySelector(selector).style.opacity = '0'
        })

        appState.setStateFunction({
            uiShow: false
        })
    }

    static showUI = (appState) => {

        this.affectSelectors.forEach((selector) => {
            document.querySelector(selector).classList.remove('hidden')
            document.querySelector(selector).classList.add('showing')
            document.querySelector(selector).style.opacity = '1'
        })

        if(appState['timerPinned'] == false){
            document.querySelector('#timer').classList.remove('hidden')
            document.querySelector('#timer').classList.add('showing')
        }
        document.querySelector('#timer').style.opacity = '1'
        

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