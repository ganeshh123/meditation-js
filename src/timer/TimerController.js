import SettingsController from "../settings/SettingsController"

export default class TimerController{

    static writeTimerData = (timerState) => {
        SettingsController.storeData('timerState', {
            timerMode: timerState['timerMode'],
            timerSessionLength: timerState['timerSessionLength'],
            timerBreakLength: timerState['timerBreakLength'],
            timerStatus: timerState['timerStatus'],
            timerDuration: timerState['timerDuration']
        })
    }

    static readTimerData = (timerState) => {
        let timerData = SettingsController.readData('timerState')
        if (!timerData) {
            return
        }
        if (timerData['timerStatus'] == 'running') {
            timerData['timerStatus'] = 'paused'
        }

        timerState.setTimerState(timerData)
    }

    static updateTimer = (timerState) => {
        let currentTimerDuration = timerState['timerDuration']
        let updatedTimerState = {}

        if (currentTimerDuration > 0) {
            updatedTimerState['timerDuration'] = currentTimerDuration - 1
        }
        if (currentTimerDuration == 0) {
            document.getElementById("alarm-audio").play();
            this.nextPhase(timerState.getTimerState())
        }

        timerState.setTimerState(updatedTimerState, (newTimerState) => {
            this.writeTimerData(newTimerState)
        })
    }

    static startTimer = (timerState) => {
        timerState.setTimerState({
            'timerInterval': setInterval(() => {
                this.updateTimer(timerState.getTimerState())
            }, 1000),
            'timerDuration': timerState['timerDuration'] - 1,
            'timerStatus': 'running'
        }, (newTimerState) => {
            this.writeTimerData(newTimerState)
        })

    }

    static nextPhase = (timerState) => {
        let currentTimerMode = timerState['timerMode']
        clearInterval(timerState['timerInterval'])

        if (currentTimerMode === 'Session') {
            this.startBreak()
        }
        if (currentTimerMode === 'Break') {
            this.startSession()
        }

    }

    static startSession = (timerState) => {
        let timerSessionLength = timerState['timerSessionLength'] * 60

        timerState.setTimerState({
            timerMode: 'Session',
            timerDuration: timerSessionLength
        }, (newTimerState) => {
            this.writeTimerData(newTimerState)
            if (['stopped', 'running'].includes(newTimerState['timerStatus'])) {
                this.startTimer(newTimerState)
            }
        })
    }

    static startBreak = (timerState) => {
        let timerBreakLength = timerState['timerBreakLength'] * 60

        timerState.setTimerState({
            timerMode: 'Break',
            timerDuration: timerBreakLength
        }, (newTimerState) => {
            this.writeTimerData(newTimerState)
            if (['stopped', 'running'].includes(newTimerState['timerStatus'])) {
                this.startTimer(newTimerState)
            }
        })
    }

    static getMinutes = (timerState) => {
        let duration = timerState['timerDuration']
        let minutes = parseInt(duration / 60, 10)

        if (minutes < 10) {
            return ('0' + minutes).toString()
        } else {
            return minutes.toString()
        }
    }

    static getSeconds = (timerState) => {
        let duration = timerState['timerDuration']
        let seconds = parseInt(duration % 60, 10)

        if (seconds < 10) {
            return ('0' + seconds).toString()
        } else {
            return seconds.toString()
        }
    }

    static getCurrentPhase = (timerState) => {
        return timerState['timerMode']
    }

    static getNextPhase = (timerState) => {
        let currentPhase = this.getCurrentPhase(timerState)

        if (currentPhase === 'Session') {
            return 'Break'
        }
        if (currentPhase === 'Break') {
            return 'Session'
        }
    }

    static getNextPhaseLength = (timerState) => {
        let nextPhase = this.getNextPhase(timerState)
        let nextPhaseLength = 25

        if (nextPhase === 'Break') {
            nextPhaseLength = timerState['timerBreakLength']
        }
        if (nextPhase === 'Session') {
            nextPhaseLength = timerState['timerSessionLength']
        }

        return nextPhaseLength
    }
}