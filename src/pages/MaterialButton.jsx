import React, { Component } from 'react'
import MaterialService from '../services/MaterialService';

export default class MaterialButton extends Component {

    constructor(props){
        super(props)

        this.state={
            //id:this.props.match.params.id,
            
            
            mtr_no:'',
            mtr_name:'',
            mtr_vendor:'',
            mtr_max_stock:'',
            mtr_min_stock:'',
            mtr_duration:'',
            mtr_status:'',
            mtr_bin:'',
            nameError:'',
            numError:'',
        }

        
        this.changeMaterialNoHandler=this.changeMaterialNoHandler.bind(this);
        this.changeMaterialNameHandler=this.changeMaterialNameHandler.bind(this);
        this.changeVenderHandler=this.changeVenderHandler.bind(this);
        this.changeMaxStockHandler=this.changeMaxStockHandler.bind(this);
        this.changeMinStockHandler=this.changeMinStockHandler.bind(this);
        this.changeDurationHandler=this.changeDurationHandler.bind(this);
        this.changeStatusHandler=this.changeStatusHandler.bind(this);
        this.changeBinHandler=this.changeBinHandler.bind(this);


        this.saveMaterial=this.saveMaterial.bind(this);
    }

    validate=()=>{
        let nameError="";
        let numError="";

        if(!(this.state.mtr_no&&this.state.mtr_name&&this.state.mtr_vendor&&this.state.mtr_max_stock&&this.state.mtr_min_stock
            && this.state.mtr_min_stock&&this.state.mtr_duration&&this.state.mtr_status&&this.state.mtr_bin)){
            nameError=(alert("Fill all the feilds"))
        }
        if(nameError){
            this.setState({nameError});
            return false;
        }if (!this.state.mtr_duration.match(/^[0-9]+$/)) {
            numError = (alert('Only numbers in duration feild'))
            
        }if(numError){
            this.setState({numError});
            return false;
        
        }if (!this.state.mtr_max_stock.match(/^[0-9]+$/)) {
            numError = (alert('Only numbers in Max Stock feild'))
            
        }if(numError){
            this.setState({numError});
            return false;
        
        }if (!this.state.mtr_min_stock.match(/^[0-9]+$/)) {
            numError = (alert('Only numbers in Min Stock feild'))
            
        }if(numError){
            this.setState({numError});
            return false;
        }
      
        return true;

        

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

    saveMaterial = (e) => {
        e.preventDefault();
        const isValid=this.validate();

        let material = {mtr_no: this.state.mtr_no,mtr_name: this.state.mtr_name,mtr_vendor: this.state.mtr_vendor,
            mtr_max_stock: this.state.mtr_max_stock,mtr_min_stock: this.state.mtr_min_stock,mtr_duration: this.state.mtr_duration,
            mtr_status: this.state.mtr_status,mtr_bin: this.state.mtr_bin};
            if (isValid){
                console.log('material => ' + JSON.stringify(material));
            }
       
        MaterialService.createMaterial(material).then(res =>{
            this.props.history.push('/Products')

            // const { history } = this.props;
            // history.push("/Products")
        });
    }


    

    changeMaterialNoHandler =(event) => {
        this.setState({mtr_no: event.target.value});
    }


    
    changeMaterialNameHandler =(event) => {
        this.setState({mtr_name: event.target.value});
    }
    changeVenderHandler =(event) => {
        this.setState({mtr_vendor: event.target.value});
    }
    changeMaxStockHandler =(event) => {
        this.setState({mtr_max_stock: event.target.value});
    }
    
    changeMinStockHandler =(event) => {
        this.setState({mtr_min_stock: event.target.value});
    }
    changeDurationHandler =(event) => {
        this.setState({mtr_duration: event.target.value});
    }

    changeStatusHandler =(event) => {
        this.setState({mtr_status: event.target.value});
    }

    changeBinHandler =(event) => {
        this.setState({mtr_bin: event.target.value});
    }

    cancle(){
        this.props.history.push('/Products')
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Create Material</h3>
                        <div className="card-body">
                            <form>

                                
                                 <div className="form-group">
                                    <label>Material No.:</label>
                                    <input placeholder="Material No." name="mtr_no" className="form-control"
                                    value={this.state.mtr_no} onChange={this.changeMaterialNoHandler}/>
                                    <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                </div> 

                                <div className="form-group">
                                    <label>Material Name:</label>
                                    <input placeholder="Material Name" name="mtr_name" className="form-control"
                                    value={this.state.mtr_name} onChange={this.changeMaterialNameHandler}/>
                                    <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                </div>

                                <div className="form-group">
                                    <label>Vender:</label>
                                    <input placeholder="Vender" name="mtr_vendor" className="form-control"
                                    value={this.state.mtr_vendor} onChange={this.changeVenderHandler}/>
                                    <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                </div>

                                <div className="form-group">
                                    <label>Max Stock:</label>
                                    <input placeholder="Max Stock" name="mtr_max_stock" className="form-control"
                                    value={this.state.mtr_max_stock} onChange={this.changeMaxStockHandler}/>
                                    <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                </div>

                                <div className="form-group">
                                    <label>Min Stock:</label>
                                    <input placeholder="Min Stock" name="mtr_min_stock" className="form-control"
                                    value={this.state.mtr_min_stock} onChange={this.changeMinStockHandler}/>
                                    <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                </div>

                                <div className="form-group">
                                    <label>Duration:</label>
                                    <input placeholder="Duration" name="mtr_duration" className="form-control"
                                    value={this.state.mtr_duration} onChange={this.changeDurationHandler}/>
                                    <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                </div>

                                <div className="form-group">
                                    <label>Status:</label>
                                    <input placeholder="Status" name="mtr_status" className="form-control"
                                    value={this.state.mtr_status} onChange={this.changeStatusHandler}/>
                                    <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                </div>

                                <div className="form-group">
                                    <label>Bin:</label>
                                    <input placeholder="Bin" name="mtr_bin" className="form-control"
                                    value={this.state.mtr_bin} onChange={this.changeBinHandler}/>
                                    <div style={{fontSize:12,color:"red"}}>{this.state.nameError}</div>
                                </div>

                                

                                <button className="btn btn-success" onClick={this.saveMaterial}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancle.bind(this)} style={{marginLeft: "10px"}}>Cancle</button>



                            </form>



                        </div>

                    </div>

                </div>

            </div>
        )
    }
}