export default class SceneController{

    static music = []

    static setMusic = (music) => {
        this.music = music
    }

    static getMusicIds = () => {
        return Object.keys(this.music)
    }

    static getMusicName = (musicId) => {
        if(this.music && this.music[musicId] && this.music[musicId]['name']){
            return this.music[musicId]['name']
        }
    }

    static getMusicDescription = (musicId) => {
        if(this.music && this.music[musicId] && this.music[musicId]['description']){
            return this.music[musicId]['description']
        }
    }

    static getMusicAudio = (musicId) => {
        if(this.music && this.music[musicId]){
            return `assets/music/${musicId}/${musicId}.mp3`
        }
    }

    static getMusicImage = (musicId) => {
        if(this.music && this.music[musicId]){
            return `assets/music/${musicId}/${musicId}.jpg`
        }
    }

    static getMusicImageThumb = (musicId) => {
        if(this.music && this.music[musicId]){
            return `assets/music/${musicId}/${musicId}-thumb.jpg`
        }
    }

    static getMusicSourceName =(musicId) => {
        if(this.music && this.music[musicId]){
            return this.music[musicId]['sourceName']
        }
    }

    static getMusicSourceURL =(musicId) => {
        if(this.music && this.music[musicId]){
            return this.music[musicId]['sourceURL']
        }
    }

    static getMusicSourceArtist =(musicId) => {
        if(this.music && this.music[musicId]){
            return this.music[musicId]['sourceArtist']
        }
    }

    static getMusicSourceArtistURL =(musicId) => {
        if(this.music && this.music[musicId]){
            return this.music[musicId]['sourceArtistURL']
        }
    }
}