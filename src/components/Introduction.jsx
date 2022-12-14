import react,{Component} from 'react'

class Introduction extends Component{

constructor(props){
    super()

    this.state={
        name:props.name,
        email:props.email,
        address:props.address
    }

}

render(){
    return(
        <div className="introduction">
            <h1>Introduction</h1>
            <h3>Name : {this.state.name}</h3>
            <h3>Email : {this.state.email}</h3>
            <h3>Address : {this.state.address}</h3>
            
        </div>
    )
}

}

export default Introduction