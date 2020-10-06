let unloadedVideoSrc

let changeScene = (input)  => {

    let scene = scenes.filter((item) => {
        return item["scene"] === input
    })[0]

    document.getElementById("sfx").src = "./sfx/" + scene["sfx"] + ".mp3";
    document.getElementById("music").play()
    document.getElementById("sfx").play()
    document.getElementById("video").style.backgroundImage = "url('./img/" + scene["background"] + ".png')";


    document.getElementById("video").src = ''
    if(!unloadedVideoSrc){
        document.getElementById("video").src = "./video/" + scene["video"] + ".mp4";
    }else{
        unloadedVideoSrc = "./video/" + scene["video"] + ".mp4";
    }
    /* Load Video from External Sources */
    if(scene['externalVideo'] && scene['externalVideo'] === true){
        if(!unloadedVideoSrc){
            document.getElementById("video").src = scene["video"]
        }else{
            unloadedVideoSrc = scene["video"]
        }
    }

    /*Load Audio from Video */

    document.getElementById("video").play()
}

let toggleVideo = () => {
    if(!unloadedVideoSrc){
        unloadedVideoSrc = document.getElementById("video").src
        document.getElementById("video").src = ''
    }else{
        document.getElementById("video").src = unloadedVideoSrc
        unloadedVideoSrc = undefined
    }
}