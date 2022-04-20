import React from 'react';
import PropTypes from 'prop-types';
// import Reorder from './pages/Reorder';
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Reorder from './Reorder';

StockReminder.propTypes = {
    MatStockList: PropTypes.array,

};

StockReminder.defaultProps = {
    MatStockList:[],
};

function StockReminder(props){

    function onDelete1(id){
        
        // fetch("http://localhost:8080/api/v1/getExpireInfo/")
       
                alert("Deleted")
            
       
    }

    function onOrder(id){
        // fetch('http://localhost:3000/reorder')

        // const history = useHistory();

        // const onOrder = () =>{ 
        // let path = `http://localhost:3000/reorder`; 
        // history.push(path);

        <Router>
        
        <Switch> 
        <Route path='/Reorder.js'><Reorder/></Route>
          </Switch>
          </Router>
    

        

    }

    const{MatStockList} = props;
    return(

        

        <div>
           
                <h2 className="text-center">Stock Reminder</h2>
                <div className="row">
                    

                </div>

                <div  className="row" >
                    <table style={{marginLeft:"15px"}} className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Material Name</th>
                                <th>Material No.</th>
                                
                                <th>Max Stock</th>
                                <th>Min Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MatStockList.map(
                                    post =>
                                    <tr key = {post.id}>
                                        <td>{post.mtr_name}</td>
                                        <td>{post.mtr_no}</td>
                                        
                                        <td>{post.mtr_max_stock}</td>
                                        
                                        <td>{post.mtr_min_stock}</td>
                                        <td>                                        
                                            
                                           
                                           <button onClick ={onDelete1.bind(this,post.id)}className="btn btn-danger">Delete</button>
                                           <button style={{marginLeft:"10px"}}onClick ={onOrder.bind(this,post.id)}className="btn btn-success">Order</button>
                                    </td>
                                    </tr>
                                )
                            }


                        </tbody>

                    </table>


                </div>

                </div>

       
    );
                        
}


export default StockReminder;
