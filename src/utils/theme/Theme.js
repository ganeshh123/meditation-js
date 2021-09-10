let staticThemes = require('./StaticThemes')

class Theme {

    static staticThemes = staticThemes

    static switchTheme = (appState) => {

        let currentThemeName = appState['currentTheme']['name']

        let newThemeObject = {}

        if(currentThemeName === 'dark'){
            newThemeObject = {
                currentTheme: staticThemes['light']
            }
        }
        else if(currentThemeName === 'light'){
            newThemeObject = {
                currentTheme: staticThemes['dark']
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