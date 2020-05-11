
let scenes = [
    {
        "scene": 'rain_on_leaves',
        "name": 'Rain on Leaves',
        "video": 'rain_on_leaves',
        "sfx": 'rain_on_leaves',
        "sfxSource": 'https://www.youtube.com/watch?v=eHPvfDUX8Ds',
        "videoSource": 'https://www.pexels.com/video/water-droplets-on-a-leaf-of-plant-2876754/'
    }
]




function changeScene(input) {

    let scene = scenes.filter((item) => {
        return item["scene"] === input
    })[0]

    document.getElementById("sfx").src = "./sfx/" + scene["sfx"] + ".mp3";
    document.getElementById("music").play()
    document.getElementById("sfx").play()
    document.getElementById("video").style.backgroundImage = "url('./img/rain_on_leaves.png')";
    document.getElementById("video").src = "./video/" + scene["video"] + ".mp4";
    document.getElementById("video").play()
}