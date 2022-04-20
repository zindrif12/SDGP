import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect,useState } from 'react';

import Home from './pages/Home';

import Products from './pages/Products';
import StockReminder from './pages/StockReminder';
import Reorder from './pages/Reorder';
import EmployeeList from './pages/EmployeeList';
import Employees from './pages/Employees';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import createEmpComponent from './pages/createEmpComponent';
import MaterialButton from './pages/MaterialButton';
import UpdateMaterial from './pages/UpdateMaterial';
import Stock from './pages/Stock';
import StockButton from './pages/StockButton';
import UpdateStock from './pages/UpdateStock';



import ExpiryReminder from './pages/ExpiryReminder';





function App() {

  const [MatStockList,setMatStockList] =useState([]);
  useEffect(() =>{
    async function fetchMatStockList(){
      try{
        const requesUrl = 'http://localhost:8080/api/v1/getInfo';
        const response= await fetch(requesUrl);
        const responseJSON= await response.json();
        console.log(responseJSON);
        setMatStockList(responseJSON);

      }catch{

      }
    }
    fetchMatStockList();

  },[]);


  const [ExpiryList,setExpiryList] =useState([]);
  useEffect(() =>{
    async function fetchExpiryList(){
      try{
        const requesUrl1 = 'http://localhost:8080/api/v1/getExpireInfo';
        const response1= await fetch(requesUrl1);
        const responseJSON1= await response1.json();
        console.log(responseJSON1);
        setExpiryList(responseJSON1);

      }catch{

      }
    }
    fetchExpiryList();

  },[]);



  return (
    <>
      <Router>
        <Navbar />
        <Switch> 
          <Route path='/' exact component={Home} />
          
          <Route path='/products' component={Products} />
          {/* <StockReminder MatStockList = {MatStockList}/> */}

          {/* <StockReminder MatStockList = {MatStockList}/> */}

          <Route path='/reorder' component={Reorder}/>
          <Route path='/Stock' component={Stock} /> 
          <Route path='/StockButton' component={StockButton}/>
          <Route path='/updateStock/map/:stock_id' component={UpdateStock}/>   
          <Route path='/addMatcrud' component={MaterialButton}/>
          <Route path='/employeelist' component={EmployeeList}/>
          <Route path='/employees' component={Employees}/> 
          <Route path='/update-Material/map/:id' component={UpdateMaterial}/>
          {/* <StockReminder MatStockList = {MatStockList}/>  */}
          {/* <ExpiryReminder ExpiryList = {ExpiryList}/>  */}
          {/* <Route path='/expiryReminder' component={ExpiryReminder}/> */}

          <Route path='/expiryReminder'> <ExpiryReminder ExpiryList = {ExpiryList}/> </Route>
          {/* <ExpiryReminder ExpiryList = {ExpiryList}/> */}

          <Route path='/stockReminder'> <StockReminder MatStockList = {MatStockList}/> </Route>
          {/* <ExpiryReminder MatStockList = {MatStockList}/> */}

          

          {/* <Route path='/stockReminder' component={StockReminder}/>
          <StockReminder MatStockList = {MatStockList}/> */}

          
        </Switch>
      </Router>
    </>
  );
}

export default App;
