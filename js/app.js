const containerDOM = document.getElementById('container')
const create = React.createElement

let styles = {

    app: {
        height: '100%',
        width: '100%',
        margin: 0
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
                
            </div>
        )
    }
}


ReactDOM.render(create(App), containerDOM)