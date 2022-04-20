import React, { Component } from 'react'

import EmployeeService from '../services/EmployeeService';

 



export default class Employees extends Component {
    constructor(props){
        super(props)

        this.state={
            users:[]
           
        }
        this.addUser=this.addUser.bind(this);
     
        this.deleteUser=this.deleteUser.bind(this);
    }

    
    deleteUser(userid){
        EmployeeService.deleteUser(userid).then(res =>{
            this.setState({users:this.state.users.filter(user =>user.userid !==userid)});

        });  


    }
   
    

    componentDidMount(){
        EmployeeService.getUsers().then((res) =>{
            this.setState({users: res.data});

        });
    }

    addUser(){
        this.props.history.push('/employeeList');
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Employeee Details</h2>
                <div className="row">
                    <button style={{marginLeft:"15px"}} className="btn btn-primary" onClick={this.addUser}>Add Users</button>

                </div>

                <div className="row">
                    <table style={{marginLeft:"15px"}} className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                
                                <th>User Mail</th>
                                <th>User Name</th>
                             
    
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key = {user.userid}>
                                      
                                        <td>{user.userName}</td>
                                        <td>{user.emailId}</td>
                                        <td>
                                           
                                           <button style={{marginLeft:"10px"}}onClick={() => this.deleteUser(user.userid)}className="btn btn-danger">Delete</button>
                                        </td>
                                        
                                    </tr>
                                )
                            }


                        </tbody>

                    </table>


                </div>

            </div>
        )
    }



}
