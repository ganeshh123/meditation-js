let staticThemes = require('./StaticThemes')

class Theme {

    static staticThemes = staticThemes

    static switchTheme = (themeName, appState) => {
        if(staticThemes[themeName]){
            appState.currentTheme = staticThemes[themeName]
            console.log('Theme switched to ' + themeName)
        }else{
            appState.currentTheme = staticThemes['dark']
        }
    }

}

export default Theme