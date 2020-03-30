import React, { Component } from 'react';
import axios from 'axios';
import './GetEmployee.css';
//import Firebase from 'Firebase';


// let config = {
//     apiKey: "*********",
//     authDomain: "react-firebaseaxiosdemo.firebaseapp.com",
//     projectId: "react-firebaseaxiosdemo",
//     databaseURL: "https://react-firebaseaxiosdemo.firebaseio.com",
// };
// if (!Firebase.apps.length) {
//     Firebase.initializeApp(config);
// }
//this.database = firebase.database();



export default class GetEmployee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            employee : [],
            id:1
        }
       
    }
    
    componentDidMount(){
        axios.get(`https://react-firebaseaxiosdemo.firebaseio.com/employees.json`)
             .then(res => {
    
                
                console.log(res.data);
                this.setState({
                    employee : res.data
                })
                
             }).catch(error => {
                console.log(error.response)
            });
            
      }
    componentDidUpdate(){
        this.refreshList();
    }
     
    refreshList(){
        fetch('https://react-firebaseaxiosdemo.firebaseio.com/employees.json')
        .then(response=>response.json())
        .then(data=>{
        this.setState({employee:data});
        }
        );
    }
       

     
           
            // const val = e.target.value;
            // axios.delete(`https://react-firebaseaxiosdemo.firebaseio.com/employees.json`,{val})
            // .then(res => {
            //     console.log(res);
            //     console.log(res.data);
            // })
            // .catch(error => {
            //     console.log(error.response);
            // });

            deleteItem(id){
                if(window.confirm('are u sure?'))
                {
                    
                    fetch(`https://react-firebaseaxiosdemo.firebaseio.com/employees.json/`+id,{
                        method:'DELETE',
                        header:{'Accept':'application/json',
                        'Content-Type':'application/json'
                    }})
                    // let userRef = Firebase.database().ref('employees/' + id);
                    // userRef.remove();
                }
            }
     
        
    render() {
        
        return (
            <div>
                <h1>Hello Employee</h1><br/><br/>

                
                <table className='employeeTable'>
                    <thead>
                         <tr>
                             <th>Id</th>
                             <th>Name</th>
                             <th>Salary</th>
                             <th>Age</th>
                             {/* <th>Update</th> */}
                             <th>Remove</th>
                         </tr>
                    </thead>
                    <tbody>
                      
                  {  
                      this.state.employee!==null?
                       Object.values(this.state.employee).map((item) => {
                        //    console.log(Object.keys(this.state.employee)[0]);
                       return   <tr key={item.id }>
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.salary}</td>
                           <td>{item.age}</td>
                           {/* <td><button className='btn btn-primary' value={item.id}>Edit</button></td> */}
                           <td><button className='btn btn-danger'   onClick={()=>this.deleteItem(Object.keys(this.state.employee)[0])}>Remove</button></td>
                          
                        </tr>
                    }) : <div></div>
                  }

                    </tbody>
                </table>
            </div>
        )
    }
}
