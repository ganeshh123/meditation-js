/* Global Imports */
import React from 'react';

/* Local Imports */
import Theme from '../theme/Theme'


class AudioVideoControls extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        currentScene : scenes[0]
    }

    selectScene = (event) => {
        changeScene(event.target.value)
        let scene = scenes.filter((item) => {
            return item["scene"] === event.target.value
        })[0]
        this.setState({
            currentScene : scene
        })
    }

    render(){
        return(
            <div>
                <FormControl title='Chnage Scene'>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.currentScene.scene}
                    onChange={this.selectScene}
                    >
                    <MenuItem value={'rain_on_leaves'}>Rain falling on leaves</MenuItem>
                    <MenuItem value={'forest_1'}>Calm Forest</MenuItem>
                    <MenuItem value={'campfire'}>Morning Campfire</MenuItem>
                    <MenuItem value={'stars'}>Among the Stars</MenuItem>
                    <MenuItem value={'sunset'}>Seaside Sunset</MenuItem>
                    <MenuItem value={'cloud_watching'}>Cloud Watching</MenuItem>
                    <MenuItem value={'jungle_after_rainfall'}>Jungle After Rainfall</MenuItem>
                    </Select>
                    <FormHelperText>{this.state.currentScene.description}</FormHelperText>
                </FormControl>
            </div>
        )
    }
}