import react,{Component} from 'react'
import Introduction from './components/Introduction'
import Project from './components/Projects'
import Qualification from './components/Qualification'

class App extends Component{

constructor(){
  super()

  this.state={
    introduction:{
      name:"Punith",
      email:"impuni007@gmail.com",
      address:'Kengeri'
    },

    qualification:[{
      education:"10th",
      institution:"Excellent english high school",
      address:"Bengaluru"
    },

    {
      education:"12th",
      institution:"Seshadripuram Independent puc",
      address:"Kengeri"
    },

    {
      education:"BCA",
      institution:"Global Institute of Management Sciences",
      address:"RR Nagar"
    },

    {
      education:"MCA",
      institution:"RV College of Engineering",
      address:"Kengeri"
    }
    
  ],

  projects:[{
    pname:"web-app",
    pduration:"20",

  },

{
pname:"android-app",
pduration:"12"
}

]

  }

}


render(){
  return(
    <>
    <Introduction name={this.state.introduction.name} email={this.state.introduction.email} address={this.state.introduction.address} />
    
    <Qualification data={this.state.qualification} />

    <Project project={this.state.projects} />
    </>
  )
}

}

export default App;