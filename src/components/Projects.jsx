import react,{Component} from 'react'

class Project extends Component{
    constructor(props){
        super()
        this.state={
            data:props.project
        }
    }

    render(){
        return(
           

            <div className="Projects">
                 <h1>Projects</h1>

                {this.state.data.map((p)=>{
                    return <div className="each-project">
                        <h3>Project Name :  {p.pname}</h3>
                        <h3>Project duration : {p.pduration}</h3>
                    </div>
                })}

            </div>

        )
    }
}

export default Project