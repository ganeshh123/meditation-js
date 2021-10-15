let StaticThemes = require('./StaticThemes')

class ThemeController {

    static staticThemes = StaticThemes
    static bdFilterSupport = CSS.supports('backdrop-filter', 'blur(2.6vh)')

    static switchTheme = (appState) => {
        let currentThemeName = appState['currentTheme']['name']
        let newThemeObject = {}

        if(currentThemeName === 'dark'){
            newThemeObject = {
                currentTheme: this.bdFilterSupport ? staticThemes['light'] : staticThemes['lightNb']
            }
        }
        else if(currentThemeName === 'light'){
            newThemeObject = {
                currentTheme: this.bdFilterSupport ? staticThemes['dark'] : staticThemes['darkNb']
            }
        }
        else if(currentThemeName === 'darkSolid'){
            newThemeObject = {
                currentTheme: staticThemes['lightSolid']
            }
        }
        else if(currentThemeName === 'lightSolid'){
            newThemeObject = {
                currentTheme: staticThemes['darkSolid']
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
                newThemeObject = StaticThemes['lightSolid']
            }else{
                newThemeObject = StaticThemes['darkSolid']
            }
        }else{
            if(currentThemeName.includes('light')){
                newThemeObject = this.bdFilterSupport? StaticThemes['light'] : StaticThemes['lightNb']
            }else{
                newThemeObject = this.bdFilterSupport? StaticThemes['dark'] : StaticThemes['darkNb']
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