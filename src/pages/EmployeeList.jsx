import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class EmployeeList extends Component {

    constructor(props){
        super(props)

        this.state={
            //id:this.props.match.params.id,
            
            
            userId:'',
          userName:'',
         emailId:'',
        }

        
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
      

        this.saveUser=this.saveUser.bind(this);
    }

    
            
        

    // componentDidMount(){
        
    //     MaterialService.getMaterialById(this.state.id).then ((res) => {
    //         let material=res.data;
    //         this.setState({
    //             mtr_no: material.mtr_no,
    //             mtr_id: material.mtr_id,mtr_name: material.mtr_name,mtr_vendor: material.mtr_vendor,
    //         mtr_max_stock: material.mtr_max_stock,mtr_min_stock: material.mtr_min_stock,mtr_duration: material.mtr_duration,
    //         mtr_status: material.mtr_status,mtr_bin: material.mtr_bin

    //         });
    //     })
    // }

    saveUser = (e) => {
        e.preventDefault();
        const isValid=this.validate();

        let user = {userName: this.state.c,emailId: this.state.emailId};
            
                console.log('material => ' + JSON.stringify(user));
            
       
        EmployeeService.createUser(user).then(res =>{
            this.props.history.push('/employees')

            // const { history } = this.props;
            // history.push("/Products")
        });
    }


    

    changeUserNameHandler =(event) => {
        this.setState({userName: event.target.value});
    }


    
    changeEmailIdHandler =(event) => {
        this.setState({emailId: event.target.value});
    }
   

    
    cancle(){
        this.props.history.push('/employees')
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Create User</h3>
                        <div className="card-body">
                            <form>

                                
                                 <div className="form-group">
                                    <label>User Name:</label>
                                    <input placeholder="User Name" name="mtr_no" className="form-control"
                                    value={this.state.userId} onChange={this.changeUserNameHandler}/>
                                    
                                </div> 

                                <div className="form-group">
                                    <label>Email Id:</label>
                                    <input placeholder="Material Name" name="mtr_name" className="form-control"
                                    value={this.state.mtr_name} onChange={this.changeEmailIdHandler}/>
                                    
                                </div>

                               

                                

                                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancle.bind(this)} style={{marginLeft: "10px"}}>Cancle</button>



                            </form>



                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
