let darkTheme = {
    'name' : 'dark',
    'backgroundColor' : 'rgba(16, 16, 16, 0.45)',
    'border' : '0.05vh solid rgba(230, 230, 230, 0.06)',
    'boxShadow' : '0.1vh 0.1vh 0 0.1vh rgba(8, 8, 8, 0.21), -0.1vh -0.1vh 0 0.1vh rgba(250, 250, 250, 0.21)',
    'backdropFilter' : 'blur(1.9vh) saturate(1.3)',
    'webkitBackdropFilter' : 'blur(1.9vh) saturate(1.3)',
    'accentColor' : '#ffffff',
    'iconColor': 'invert(100%) sepia(0%) saturate(0%) hue-rotate(27deg) brightness(104%) contrast(105%)'
}

let lightTheme = {
    'name' : 'light',
    'backgroundColor': 'rgba(255, 255, 255, 0.17)',
    'border' : '0.05vh solid rgba(230, 230, 230, 0.06)',
    'boxShadow' : '0.1vh 0.1vh 0 0.1vh rgba(115, 115, 115, 0.42), -0.1vh -0.1vh 0 0.1vh rgba(255, 255, 255, 0.43)',
    'backdropFilter' : 'blur(2.6vh) contrast(0.8) brightness(1.1)',
    'webkitBackdropFilter' : 'blur(2.6h) contrast(0.8) brightness(1.1)',
    'accentColor':'#000000'
}

let darkThemeSolid = {
    'name' : 'darkSolid',
    'backgroundColor' : 'rgb(10, 10, 10)',
    'border' : '0.05vh solid rgba(230, 230, 230, 0.06)',
    'boxShadow' : '0.1vh 0.1vh 0 0.1vh rgba(8, 8, 8, 0.21), -0.1vh -0.1vh 0 0.1vh rgba(250, 250, 250, 0.21)',
    'accentColor' : '#ffffff',
    'iconColor': 'invert(100%) sepia(0%) saturate(0%) hue-rotate(27deg) brightness(104%) contrast(105%)'
}

let lightThemeSolid = {
    'name' : 'lightSolid',
    'backgroundColor': 'rgb(230, 230, 230)',
    'border' : '0.05vh solid rgba(230, 230, 230, 0.06)',
    'boxShadow' : '0.1vh 0.1vh 0 0.1vh rgba(115, 115, 115, 0.42), -0.1vh -0.1vh 0 0.1vh rgba(255, 255, 255, 0.43)',
    'accentColor':'#000000'
}

module.exports = {
    'dark' : darkTheme,
    'light' : lightTheme,
    'darkSolid' : darkThemeSolid,
    'lightSolid' : lightThemeSolid
}