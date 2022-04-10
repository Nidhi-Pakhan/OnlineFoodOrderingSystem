import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react'
import axios from 'axios'
import {  useHistory } from 'react-router-dom'
import AllOrders from '../Employee/AllOrders'
import AllOrdersByDate from './AllOrdersByDate'
import ShowDeliveryBoy from './ShowDeliveryBoy';
import UpdateDeliveryBoy from './UpdateDeliveryBoy'
import AddDeliveryBoy from './AddDeliveryBoy';
import '../Customer/CustomerHome.css'

const EmployeeHome=()=> {
    
    const history = useHistory()

const Logout=()=>{
    history.push('/')
}  

const cookies = new Cookies();
const name2 = cookies.get('firstName')


return(  
  <div className="container-fluid">
      <div className="row">
        <div className="col">
          {/* <h1>E-commerce app</h1> */}
         
         
        </div>
      </div>
      
      
  <BrowserRouter>
    <div>
        <h1>Online Food Order
        &nbsp;
        &nbsp;
      
        &nbsp;
        &nbsp;
        <h6 className="h6">Hello, {name2}</h6>
       
       
        </h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">
              Employee Home
            </a> */}
            
          
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
                aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li>
                <Link className="nav-link" to="/employee-home">
                   Employee Home
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/all-orders">
                    All Orders
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/show-delivery-boy">
                    Show DeliveryBoy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/all-orders-by-date">
                   Order History
                  </Link>
                </li>
               
              </ul>
           
            </div>
            <button   onClick={Logout} className="btn btn-danger">Logout</button>
          </div>
        </nav>
      </div>
    <switch>
    <Route path = "/all-orders" component ={AllOrders}/>
    <Route path = "/all-orders-by-date" component ={AllOrdersByDate}/>                
    <Route path = "/update-delivery-boy" component ={UpdateDeliveryBoy}/>                
    <Route path ="/show-delivery-boy" exact component ={ShowDeliveryBoy}/>   
    <Route path = "/add-delivery-boy" component ={AddDeliveryBoy}/>                
   
     </switch>
    </BrowserRouter>
    </div>  
    );
  
}
export default EmployeeHome