const scenes = document.querySelectorAll(".controls .sceneSelect button");
const audio = document.getElementById("#audio");
const video = document.querySelector("#video");

function changeScene(source) {
    document.getElementById("audio").src = "./audio/" + source + ".mp3";
    document.getElementById("video").src = "./video/" + source + ".mp4";
    document.getElementById("infoText").style.display = "none";
    document.getElementById('container').style.display = 'flex';
}