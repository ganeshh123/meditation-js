
let scenes = [
    {
        "scene": 'rain_on_leaves',
        "video": 'rain_on_leaves',
        "sfx": 'rain_on_leaves'
    }
]




function changeScene(input) {

    document.getElementById("infoPanel").style.display = "none";

    let scene = scenes.filter((item) => {
        return item["scene"] === input
    })[0]

    document.getElementById("sfx").src = "./sfx/" + scene["sfx"] + ".mp3";
    document.getElementById("music").play()
    document.getElementById("sfx").play()
    document.getElementById("video").src = "./video/" + scene["video"] + ".mp4";
    document.getElementById("video").play()
}