import React from 'react'

class Classcomponent extends React.Component{
       
       state={
       	subjectname:"Trinadh",
       	year:2001,
       	userdata:""
       }
       handleChange=(e)=>{
        this.setState({
        	userdata:e.target.value
        })

       }
       handleClick=()=>{
       	console.log(this.state.userdata);
       	this.setState({
       		userdata:""
       	})

       }
	render(){
       return(
         <div> 
         <h1>Good Afternoon my friend </h1>
         <p>{this.state.subjectname} </p>
         <p>{this.state.year}</p>
         <input
         value={this.state.userdata}
         onChange={this.handleChange}/>
         <button onClick={this.handleClick}>Click here </button>

         </div>
       	)
}

	}

export default Classcomponent





