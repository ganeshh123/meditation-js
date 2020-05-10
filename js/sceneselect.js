

function changeScene(source) {
    document.getElementById("sfx").src = "./sfx/" + source + ".mp3";
    document.getElementById("music").play()
    document.getElementById("sfx").play()
    document.getElementById("video").src = "./video/" + source + ".mp4";
    document.getElementById("video").play()
    document.getElementById("infoPanel").style.display = "none";
}