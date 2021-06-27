let fetch = require('sync-fetch')

let buildSourcesObject = (sourcesArray) => {
    let sourcesObject = {}

    sourcesArray.forEach((source) => {
        sourcesObject[source['id']] = source
    })

    return sourcesObject
}

class MediaSources {

    static scenesArray = fetch('./assets/scenes.json', 
        {headers: {Accept: 'application/vnd.citationstyles.csl+json'}
    }).json()

    static musicTracksArray = fetch('./assets/musicTracks.json', 
        {headers: {Accept: 'application/vnd.citationstyles.csl+json'}
    }).json()

    static presetsArray = fetch('./assets/presets.json', 
        {headers: {Accept: 'application/vnd.citationstyles.csl+json'}
    }).json()

    static scenes = buildSourcesObject(fetch('./assets/scenes.json', 
        {headers: {Accept: 'application/vnd.citationstyles.csl+json'}
    }).json())


    static musicTracks = buildSourcesObject(fetch('./assets/musicTracks.json', 
        {headers: {Accept: 'application/vnd.citationstyles.csl+json'}
    }).json())

    static presets = buildSourcesObject(fetch('./assets/presets.json', 
        {headers: {Accept: 'application/vnd.citationstyles.csl+json'}
    }).json())

}

export default MediaSources