import React, { Component } from 'react'

import StockService from '../services/StockService';



export default class Stock extends Component {
searchArray=[];
    constructor(props){
        super(props)

        this.state={
            stocks:[],
            
        }
        this.addStock=this.addStock.bind(this);
        this.editStock=this.editStock.bind(this);
        this.deleteStock=this.deleteStock.bind(this);
    }
    

    deleteStock(stock_id){
        StockService.deleteStock(stock_id).then(res =>{
            this.setState({stocks:this.state.stocks.filter(stock => stock.stock_id !==stock_id)});

        });  


    }

    addStock(){
        this.props.history.push('/stockButton')

    }

    editStock(stock_id){
        this.props.history.push(`/updateStock/map/${stock_id}`); 
        // const { history } = this.props;
        // history.push("/update-material/${id}")

    }

    componentDidMount(){
      StockService.getStocks().then((res) => {
            this.setState({stocks: res.data});
            this.searchArray=res;

        });
    }

    

    onChangeHandler(e){
        console.log(e.target.value);
        let newArray = this.searchArray.filter((d) => {
            console.log(d);
            let searchValue = d.mtr_no.upperCase();
            return searchValue.indexOf(e.target.value) !==-1;
    
        });
        this.setState({stocks:newArray})
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Stock Details</h2>

                <div className="row">
                    <button style={{marginLeft:"15px"}} className="btn btn-primary" onClick={this.addStock}>Create Stocks</button>
                    <input type="text" value={this.state.value} onChange={this.onChangeHandler.bind(this)} placeholder="Search for.." style={{float:'right',width:'200px',marginBottom:10,marginLeft:850,borderColor:"#000"}}/>                </div>

                <div className="row">
                    <table style={{marginLeft:"15px"}} className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Stock No</th>
                                <th>Expire Date</th>
                                <th>Manufacture Date</th>
                                <th>Material No</th>
                                <th>Quantity</th>
                                <th>Received Date</th>
                                <th>Actions</th>
                                

                                
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.stocks.map (
                                    stock=>
                                    <tr key={stock.stock_id}>
                                        <td>{stock.stock_no}</td>
                                        <td>{stock.expire_date}</td>
                                        <td>{stock.manufacture_date}</td>
                                        <td>{stock.mtr_no}</td>
                                        <td>{stock.quantity}</td>
                                        <td>{stock.received_date}</td>
                                        
                                        <td>
                                            <button onClick={() => this.editStock(stock.stock_id)}className="btn btn-info">Update</button>
                                            
                                            <button style={{marginLeft:"10px"}}onClick={() => this.deleteStock(stock.stock_id)}className="btn btn-danger">Delete</button>
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