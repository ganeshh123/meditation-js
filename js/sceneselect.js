let changeScene = (input)  => {

    let scene = scenes.filter((item) => {
        return item["scene"] === input
    })[0]

    document.getElementById("sfx").src = "./sfx/" + scene["sfx"] + ".mp3";
    document.getElementById("music").play()
    document.getElementById("sfx").play()
    document.getElementById("video").style.backgroundImage = "url('./img/" + scene["background"] + ".png')";
    document.getElementById("video").src = "./video/" + scene["video"] + ".mp4";

    /* Load Video from External Sources */
    if(scene['externalVideo'] && scene['externalVideo'] === true){
        document.getElementById("video").src = ''
        document.getElementById("video").src = scene["video"]
    }

    /*Load Audio from Video */
    
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