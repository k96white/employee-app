import React, { Component } from "react";
import axios from "axios";
import "./GetEmployee.css";
//import nextId from "react-id-generator";
// var express = require('express')
// var cors = require('cors')
// var app = express()

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
         name : '',
         salary : 0 ,
         age:0,
         id:0
    };
  }

//   componentDidMount() {
//     const user = {
//       name: this.state.employee_name,
//       salary : this.state.employee_salary,
//       age : this.state.employee_age
//     };

//     axios
//       .post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//       .catch(error => {
//         console.log(error.response);
//       });
//   }

handleChange= event =>{
    event.preventDefault();
    if(event.target.name==='name'){
      this.setState({name:event.target.value});
    } 
    if(event.target.name==='salary'){
        this.setState({salary:event.target.value});
    }
    if(event.target.name==='age'){
        this.setState({age:event.target.value});
    }
    if(event.target.name==='id'){
        this.setState({id:event.target.value})
    }
};
handleSubmit=event=>{
    event.preventDefault();
    const name = this.state.name;
    const salary =this.state.salary;
    const age = this.state.age;
    const id= this.state.id;
    // const user={
    //     name:this.state.name,
    //     salary : this.state.salary,
    //     age : this.state.age
    // }
    
    axios
      .post(`https://react-firebaseaxiosdemo.firebaseio.com/employees.json`, {name,salary,age,id })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });
    
}


  render() {
    return (
      <div>
        <h1>Add Employee</h1>
        <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Id:
                      <input type="number" name="id"  onChange={this.handleChange} />
                    </label>
                    <label>Employee name:
                    <input type="text" name="name"  onChange={this.handleChange} />
                    </label>
                    <label>Employee salary:
                    <input type="number" name="salary" onChange={this.handleChange} />
                    </label>
                    <label>Employee age:
                    <input type="number" name="age"  onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                    </form>

            
        </div>
        <br />
        
        <br />
      </div>
    );
  }
}

// app.use(cors());