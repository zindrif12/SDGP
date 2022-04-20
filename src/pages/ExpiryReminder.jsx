import React from 'react';
import PropTypes from 'prop-types';

ExpiryReminder.propTypes = {
    ExpiryList: PropTypes.array,

};

ExpiryReminder.defaultProps = {
    ExpiryList:[],
};

function ExpiryReminder(props){

    function onDelete(stock_id){
        
        // fetch("http://localhost:8080/api/v1/getExpireInfo/")
        fetch('http://localhost:8080/api/v1/getExpireInfo/' + stock_id, {
            method: 'DELETE',
           
        })
        .then((result)=>{
            result.json().then((result)=>{
                alert("Deleted")
            })
        }) 
    }
           
        
        
        // .then((resp) => {
        //   console.log("the list after deleting...", resp);
    

    const{ExpiryList} = props;
    return(

        

        <div>
           
                <h2 className="text-center">Expiry Reminder</h2>
                <div className="row">
                    

                </div>

                <div className="row">
                    <table style={{marginLeft:"15px"}} className="table table-striped table-bordered">

                        <thead>
                            <tr>
                            <th>Material name</th>
                                <th>Stock No.</th>
                                <th>Expiration Date</th>
                                <th>Quantity</th>
                               
                               

                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ExpiryList.map(
                                    post1 =>
                                    <tr key = {post1.stock_id}>
                                         <td>{post1.mtr_name}</td>
                                        <td>{post1.stock_no}</td>
                                        <td>{post1.expire_date}</td>
                                        
                                        <td>{post1.quantity}</td>
                                       
                                       
                                        <td>                                        
                                            
                                           
                                           <button style={{marginLeft:"10px"}}onClick ={onDelete.bind(this,post1.stock_id)}className="btn btn-danger">Delete</button>
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


export default ExpiryReminder;
