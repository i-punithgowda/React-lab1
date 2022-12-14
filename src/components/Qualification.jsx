import React,{Component} from "react";

class Qualification extends Component{

    constructor(props){
        super()
        this.state={
            data:props.data
        }

       
    }

render(){
    return(
        <div className="Qualification">
            <hr />
            <h1>Qualification</h1>
          {this.props.data.map((q)=>{
            return <div className="qualification-data"> 
                <h3>Education : {q.education}</h3>
                <h3>Institution : {q.institution}</h3>
                <h3>Address : {q.address}</h3>
               
            </div>
          })}
           <hr />
        </div>
    )
}

}

export default Qualification