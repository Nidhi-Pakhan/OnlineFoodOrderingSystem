import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import BreakFast from './BreakFast'
import Deserts from './Deserts'
import MainCourse from './MainCourse'
import Starters from './Starters'
import Thalis from './Thalis'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie';
import {  useHistory } from 'react-router-dom'

import { useState, useEffect } from 'react'
import axios from 'axios'
import React, { Component } from 'react';
import './CustomerHome.css';
import {url} from  '../../common/constants'

const CustomerHome=()=> {
  
const cartItems = useSelector((state) => state.cartItems)
const cookies = new Cookies();
const id1=cookies.get('id')
const history = useHistory()
const [products, setProducts]=useState([])
const data = new FormData()
const email1=cookies.get('email')
const id2 = cookies.get('id')
const name2 = cookies.get('firstName')

const Logout = () =>{
  cookies.remove('email')
  cookies.remove('firstName')
  cookies.remove('id')
  cookies.remove('lastName')
  cookies.remove('password')
  cookies.remove('phone')
  cookies.remove('role')
  history.push('/')
}


const ShowCart=()=>{
  // history.push('/customer-home/cart')
   history.push('/cart')
 }

 
const ShowOrders=()=>{
  // history.push('/customer-home/cart')
   history.push('/show-orders')
 }

 const EditProfile=()=>{
   history.push('/edit-profile')
 }

 const ShowAddress=()=>{
   history.push('/show-address')
 }


return(  
  <div className="bgimg">
  <div className="container-fluid">
  
      <div className="row">
        <div className="col">
           <br></br>
          <h6 className="h5">Hello, {name2}</h6>
        </div>
      </div>
      <div >
            </div>
      
  <BrowserRouter>
    <div>
        <h1>Online Food Order 
        &nbsp;
        &nbsp;
        &nbsp;
        <button onClick={ShowCart} className="btn btn-warning">
          Cart
        </button>
        &nbsp;

        <button onClick={ShowOrders} className="btn btn-success">
          Orders
        </button>
        &nbsp;

        <button onClick={EditProfile} className="btn btn-primary">
          Edit Profile
        </button>
        &nbsp;

        <button onClick={ShowAddress} className="btn btn-info">
          Address
        </button>
        &nbsp;
        <button  className="btn btn-danger" onClick={Logout}>Logout</button>
       
      </h1>
      <br/>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">
              Customer Home
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
                <Link className="nav-link" to="/customer-home">
                    Customer Home
                  </Link> 
            
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/break-fast">
                    BreakFast
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/thalis">
                    Thalis                  
                </Link>
                </li>

                <li>
                  <Link className="nav-link" to="/starters">
                    Starters
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/main-course">
                    MainCourse  
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/deserts">
                   Deserts
                  </Link>
                </li>              
              </ul>
            </div>
          </div>
        </nav>
      </div>
    <switch>
    <Route path = "/break-fast"  component ={BreakFast}/>
    <Route path ="/deserts"  component ={Deserts}/>   
    <Route path ="/main-course"  component ={MainCourse}/>   
    <Route path ="/thalis"  component ={Thalis}/>   
    <Route path ="/starters"  component ={Starters}/>
 
     </switch>
    </BrowserRouter>
    </div>  
    </div>

    );
  
}
export default CustomerHome