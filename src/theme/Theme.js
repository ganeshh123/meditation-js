let staticThemes = require('./StaticThemes')

class Theme {

    static current = staticThemes['dark'];

    static switchTheme = (themeName) => {
        if(staticThemes[themeName]){
            current = staticThemes[themeName]
        }else{
            current = staticThemes['dark']
        }
    }

}

export default Theme