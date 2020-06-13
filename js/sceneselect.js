
let scenes = [
    {
        "scene": 'rain_on_leaves',
        "name": 'Rain on Leaves',
        "video": 'rain_on_leaves',
        "sfx": 'rain_on_leaves',
        "sfxSource": 'https://www.youtube.com/watch?v=eHPvfDUX8Ds',
        "videoSource": 'https://www.pexels.com/video/water-droplets-on-a-leaf-of-plant-2876754/',
        "musicSource": 'https://www.youtube.com/watch?v=962VmrIh9vQ',
        "description" : 'Light rain falling on leaves accompanied by calm piano music',
        "background" : 'rain_on_leaves'
    },
    {
        "scene": 'forest_1',
        "name": 'Calm Forest',
        "video": 'forest',
        "sfx": 'forest',
        "sfxSource": '',
        "videoSource": 'https://www.pexels.com/video/plants-clinging-by-the-tree-branches-in-a-forest-2882118/',
        "musicSource": 'https://www.youtube.com/watch?v=962VmrIh9vQ',
        "description" : 'A calm forest with a gentle breeze',
        "background" : 'forest1'
    }
]




function changeScene(input) {

    let scene = scenes.filter((item) => {
        return item["scene"] === input
    })[0]

    document.getElementById("sfx").src = "./sfx/" + scene["sfx"] + ".mp3";
    document.getElementById("music").play()
    document.getElementById("sfx").play()
    document.getElementById("video").style.backgroundImage = "url('./img/" + scene["background"] + ".png')";
    document.getElementById("video").src = "./video/" + scene["video"] + ".mp4";
    document.getElementById("video").play()
}

let videosrc

let toggleVideo = () => {
    if(!videosrc){
        videosrc = document.getElementById("video").src
        document.getElementById("video").src = ''
    }else{
        document.getElementById("video").src = videosrc
        videosrc = undefined
    }
}