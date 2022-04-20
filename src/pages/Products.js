
import React, { Component } from 'react'

import MaterialService from '../services/MaterialService';

 



export default class Products extends Component {
    constructor(props){
        super(props)

        this.state={
            materials:[]
           
        }
        this.addMaterial=this.addMaterial.bind(this);
        this.editMaterial=this.editMaterial.bind(this);
        this.deleteMaterial=this.deleteMaterial.bind(this);
    }

    editMaterial(id){
        
        this.props.history.push(`/update-Material/map/${id}`); 

    }
    deleteMaterial(id){
        MaterialService.deleteMaterial(id).then(res =>{
            this.setState({materials:this.state.materials.filter(material =>material.id !==id)});

        });  


    }
   
    

    componentDidMount(){
        MaterialService.getMaterials().then((res) =>{
            this.setState({materials: res.data});

        });
    }

    addMaterial(){
        this.props.history.push('/addMatcrud');
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Material Details</h2>
                <div className="row">
                    <button style={{marginLeft:"15px"}} className="btn btn-primary" onClick={this.addMaterial}>Add Material</button>

                </div>

                <div className="row">
                    <table style={{marginLeft:"15px"}} className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Material Name</th>
                                <th>Material No.</th>
                                <th>Vendor</th>
                                <th>Max Stock</th>
                                <th>Min Stock</th>
                                <th>Duration</th>
                                <th>Status</th>
                                <th>Bin</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.materials.map(
                                    material =>
                                    <tr key = {material.id}>
                                        <td>{material.mtr_name}</td>
                                        <td>{material.mtr_no}</td>
                                        <td>{material.mtr_vendor}</td>
                                        <td>{material.mtr_max_stock}</td>
                                        <td>{material.mtr_min_stock}</td>
                                        <td>{material.mtr_duration}</td>
                                        <td>{material.mtr_status}</td>
                                        <td>{material.mtr_bin}</td>
                                        <td>
                                           <button onClick = { () => this.editMaterial(material.id)} className="btn btn-info">Update</button>
                                           <button style={{marginLeft:"10px"}}onClick={() => this.deleteMaterial(material.id)}className="btn btn-danger">Delete</button>
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
