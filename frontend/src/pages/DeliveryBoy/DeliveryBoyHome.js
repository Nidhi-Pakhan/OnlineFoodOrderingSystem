import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react'
import axios from 'axios'
import {  useHistory } from 'react-router-dom'
import DBAllOrders from './DB_AllOrders';

const DeliveryBoyHome = ()=>{
        
        const history = useHistory()
    
    const Logout=()=>{
        history.push('/')
    }  
    const cookies = new Cookies();
    const name2 = cookies.get('firstName')
    
    
    return(  
      <div className="container-fluid">
          {/* <div className="row">
            <div className="col">
            </div>
          </div> */}
          
          
      <BrowserRouter>
        <div>
            <h1>Online Food Order</h1>
            &nbsp;
            <h6>Hello {name2}</h6>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">
                  DeliveryBoy Home
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
                    <Link className="nav-link" to="/delivery-boy-home">
                        DeliveryBoy Home
                     </Link> 
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/db-all-orders">
                        All Orders
                      </Link>
                    </li>
                 
                  </ul>
                </div>
                <button   onClick={Logout} className="btn btn-danger">Logout</button>
              </div>
            </nav>
          </div>
        <switch>
        <Route path = "/db-all-orders" component ={DBAllOrders}/>
        
         </switch>
        </BrowserRouter>
        </div>  
        );
}

export default DeliveryBoyHome