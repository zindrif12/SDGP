import React, { Component } from 'react'
import StockService from '../services/StockService';

export default class StockButton extends Component {

    constructor(props){
        super(props)

        this.state={
            
            
            stock_no:'',
            expire_date:'',
            manufacture_date:'',
            mtr_id:'',
            quantity:'',
            received_date:'',
            
           
        }

        this.changeStockNoHandler=this.changeStockNoHandler.bind(this);
        this.changeExpireDateHandler=this.changeExpireDateHandler.bind(this);
        this.changeManufactureDateHandler=this.changeManufactureDateHandler.bind(this);
        this.changeMaterialID1Handler=this.changeMaterialID1Handler.bind(this);
        this.changeQuantityHandler=this.changeQuantityHandler.bind(this);
        this.changeReceivedDateHandler=this.changeReceivedDateHandler.bind(this);
        

        this.saveStock=this.saveStock.bind(this);
    }

    // componentDidMount(){
        
    //     StockService.getStockById(this.state.id).then ((res) => {
    //         let stock=res.data;
    //         this.setState({
    //             stock_id: stock.stock_id,expire_date: stock.expire_date,manufacture_date: stock.manufacture_date,
    //             mtr_id: stock.mtr_id,quantity: stock.quantity,received_date: stock.received_date,
           

    //         });
    //     })
    // }

    saveStock = (e) => {
        e.preventDefault();
        let stock = {stock_no: this.state.stock_no,expire_date: this.state.expire_date,manufacture_date: this.state.manufacture_date,
            mtr_no: this.state.mtr_no,quantity: this.state.quantity,received_date: this.state.received_date
            };
        console.log('stock => ' + JSON.stringify(stock));

        StockService.createStocks(stock).then(res =>{
            this.props.history.push('/stock')
        })
    }


    changeStockNoHandler =(event) => {
        this.setState({stock_no: event.target.value});
    }
    
    changeExpireDateHandler =(event) => {
        this.setState({expire_date: event.target.value});
    }
    changeManufactureDateHandler =(event) => {
        this.setState({manufacture_date: event.target.value});
    }
    changeMaterialID1Handler =(event) => {
        this.setState({mtr_no: event.target.value});
    }
    
    changeQuantityHandler =(event) => {
        this.setState({quantity: event.target.value});
    }
    changeReceivedDateHandler =(event) => {
        this.setState({received_date: event.target.value});
    }

    
    cancle(){
        this.props.history.push('/stock')
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Create Stock</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Stock No:</label>
                                    <input placeholder="Stock No" name="stock_no" className="form-control"
                                    value={this.state.stock_no} onChange={this.changeStockNoHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Expire Date:</label>
                                    <input placeholder="Expire Date" name="expire_date" className="form-control"
                                    value={this.state.expire_date} onChange={this.changeExpireDateHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Manufacture Date:</label>
                                    <input placeholder="Manufacture Date" name="manufacture_date" className="form-control"
                                    value={this.state.manufacture_date} onChange={this.changeManufactureDateHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Material No:</label>
                                    <input placeholder="Material No" name="mtr_no" className="form-control"
                                    value={this.state.mtr_no} onChange={this.changeMaterialID1Handler}/>
                                </div>

                                <div className="form-group">
                                    <label>Quantity:</label>
                                    <input placeholder="Quantity" name="quantity" className="form-control"
                                    value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Received Date:</label>
                                    <input placeholder="received date" name="received_date" className="form-control"
                                    value={this.state.received_date} onChange={this.changeReceivedDateHandler}/>
                                </div>

                                
                                

                                <button className="btn btn-success" onClick={this.saveStock}
                                >Save</button>
                                <button className="btn btn-danger" onClick={this.cancle.bind(this)} style={{marginLeft: "10px"}}>Cancle</button>



                            </form>



                        </div>

                    </div>

                </div>

            </div>
        )
    }
}