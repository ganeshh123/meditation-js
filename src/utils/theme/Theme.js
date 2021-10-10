let staticThemes = require('./StaticThemes')

class Theme {

    static staticThemes = staticThemes

    static switchTheme = (appState) => {

        let currentThemeName = appState['currentTheme']['name']

        let bdFilterSupport = CSS.supports('backdrop-filter')

        let newThemeObject = {}

        if(currentThemeName === 'dark'){
            newThemeObject = {
                currentTheme: bdFilterSupport ? staticThemes['light'] : staticThemes['lightNb']
            }
        }
        else if(currentThemeName === 'light'){
            newThemeObject = {
                currentTheme: bdFilterSupport ? staticThemes['dark'] : staticThemes['darkNb']
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

}

export default Theme