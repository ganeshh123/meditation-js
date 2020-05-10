const containerDOM = document.getElementById('container')
const create = React.createElement

const {
    Button,
    color,
    Slider,
    Icon
} = MaterialUI


let styles = {

    app: {
        height: '100%',
        width: '100%',
        margin: 0
    },

    VolumeControl: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    }
}


class VolumeControl extends React.Component{

    constructor(props){
        super(props)
    }

    state = {
        volume: document.getElementById(this.props.type).volume * 100
    }

    changeVol = (event, value) => {

        document.getElementById(this.props.type).volume = value/100
        this.setState({
            volume:  value
        })        
    }

    render(){

        let icon = ''
        if(this.props.type === 'music'){
            icon = 'audiotrack'
        }else if(this.props.type === 'sfx'){
            icon = 'volume_down'
        }

        return(
            <div style={styles.VolumeControl}>
                <Icon>{icon}</Icon>
                <Slider value={this.state.volume} onChange={this.changeVol} />
            </div>
        )
    }
}





class App extends React.Component{
    constructor(props){
        super(props)
    }


    state={

    }

    
    render(){
        return(
            <div id='app' style={styles.app}>
               <div id='sceneSwitch'>

               </div>
               <div id='volControl'>
               <VolumeControl type='music'/>
               <VolumeControl type='sfx' />'
                
               </div>
            </div>
        )
    }
}


ReactDOM.render(create(App), containerDOM)