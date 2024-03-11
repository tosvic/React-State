import React from "react";
import { Component } from "react";
import Seun from "./components/Seun";



class App extends Component{
   
  state = {
    persons:[
      {name: "Seun", age: 30},
      {name: "Adeola", age: 55},
      {name: "Tope", age: 28},
      {name: "Bose", age: 35},
    ],

    show: "jumoke"
  }

   
 
  

  switchNameHandler(){
    this.setState({
      persons:[
        {name: "Shola", age: 30},
        {name: "Adeola", age: 55},
        {name: "Tope", age: 28},
        {name: "Bose", age: 35},
      ],

    })
  }

  render(){
    

    return (
      <>
        <Seun oruko = {this.state.persons[0].name} age={this.state.persons[0].age}></Seun>
        <Seun oruko = {this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Seun oruko = {this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Seun oruko = {this.state.persons[3].name} age={this.state.persons[3].age}/>

        <button onClick={()=>{this.switchNameHandler}}>Change</button>
      </>
    )

  }




}



export default App;





