import React from 'react';
import './Signin.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import {url} from '../common/constants'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const Signin = () => {
const cookies = new Cookies();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()

   const signupUser = ()=>{
     history.push("/sign-up");
   }
   
    const signinUser = (props) => {
        if (email.length === 0) {
          alert('please enter email')
        } else if (password.length === 0) {
          alert('please enter password')
        } else {
          console.log(`email = ${email}`)
          console.log(`password = ${password}`)
          
          axios.post(url + '/user/signin',{"email":email, "password":password}).
          then((response)=>{
             const result = response.data
        
             if(result === "incorrect password."){
                 alert("Incorrect password, try again !!!!");
             }
             else if(result === "incorrect email."){
                alert("Incorrect email, try again !!!!");
             }
             else{
                cookies.set('email',result.email)
              cookies.set('firstName', result.firstName)
              cookies.set('id',result.id)
              cookies.set('lastName',result.lastName)
              cookies.set('password',result.password)
              cookies.set('phone',result.phone)
              cookies.set('role',result.role)
             }
          
           
            // console.log(cookies.get('role'))
                              
                 if (result.role === "ADMIN") {
                  history.push("/admin-home");
                } else if (result.role === "EMPLOYEE") {
                  history.push("/employee-home");
                } else if (result.role === "CUSTOMER") {
                  history.push("/customer-home");
                } else if (result.role === "DELIVERY_BOY") {
                  history.push("/delivery-boy-home");
                }     
            
        })
    
   
  
        }
      }

    return (
        <div className="style">
       <div className="container">
       <div className="image">
      <h1> SignIn</h1>
      <div className="style_email"> 
      <div className="mb-3">
        <label className="style_font">Email</label>
        <input
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          placeholder="enter your email"
          className="form-control"
          type="email"
        />
      </div>
      <div className="mb-3">
        <label className="style_font">Password</label>
        <input
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          placeholder="enter your password"
          className="form-control"
          type="password"
        />
      </div>
      </div> 
      <div className="mb-3">
        <button onClick={signinUser} className="btn btn-success">
          Signin
        </button>
        &nbsp;
        <button onClick={signupUser} className="btn btn-primary">
          Signup
        </button>
        <Link className="nav-link" to ="/change">forgot password ?
        </Link>
      </div>
    </div>
    </div>
    </div>
    )
}

export default Signin
