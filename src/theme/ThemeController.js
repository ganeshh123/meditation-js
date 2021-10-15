let StaticThemes = require('./StaticThemes')

class ThemeController {

    static staticThemes = StaticThemes
    static bdFilterSupport = CSS.supports('backdrop-filter', 'blur(2.6vh)')

    static switchTheme = (appState) => {
        let currentThemeName = appState['currentTheme']['name']
        let newThemeObject = {}

        if(currentThemeName === 'dark'){
            newThemeObject = {
                currentTheme: this.bdFilterSupport ? this.staticThemes['light'] : this.staticThemes['lightNb']
            }
        }
        else if(currentThemeName === 'light'){
            newThemeObject = {
                currentTheme: this.bdFilterSupport ? this.staticThemes['dark'] : this.staticThemes['darkNb']
            }
        }
        else if(currentThemeName === 'darkSolid'){
            newThemeObject = {
                currentTheme: this.staticThemes['lightSolid']
            }
        }
        else if(currentThemeName === 'lightSolid'){
            newThemeObject = {
                currentTheme: this.staticThemes['darkSolid']
            }
        }

        appState.setStateFunction(newThemeObject)
    }

    static toggleSolidBg = (appState) => {
        let currentThemeName = appState['currentTheme']['name']
        let solidBg = this.getSolidBg(appState)
        let newThemeObject

        if(solidBg == 'Off'){
            if(currentThemeName.includes('light')){
                newThemeObject = this.staticThemes['lightSolid']
            }else{
                newThemeObject = this.staticThemes['darkSolid']
            }
        }else{
            if(currentThemeName.includes('light')){
                newThemeObject = this.bdFilterSupport? this.staticThemes['light'] : this.staticThemes['lightNb']
            }else{
                newThemeObject = this.bdFilterSupport? this.staticThemes['dark'] : this.staticThemes['darkNb']
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

}

export default ThemeController