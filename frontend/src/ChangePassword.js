import './ChangePassword.css'
import { useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {url} from './common/constants'

const ChangePassword = () => {
  // define the state
  
  const [email, setEmail] = useState('')
  const [security, setSecurity] = useState('')
  const [password, setPassword] = useState('')
  

  const history =useHistory();

  const changepassword = () => {
    
    console.log(`email = ${email}`)
   // console.log(`security = ${security}}`)
    console.log(`password = ${password}`)


    if (email.length===0){
      alert('Enter You Email')
    }
    // else if (security.length===0){
    //   alert('Enter Security Answer')
    // }
    else if(password.length===0){
    alert('Enter New Password')
    }
    else{
   

      console.log(email)
      console.log(password)
     

      
      axios.post(url+'/user/changepassword',{"email":email,"password":password}).then((response)=>{
        
          const result = response.data
          
          
          if(result.status === 'success'){
              alert('Password Updated Sucessfully')
              history.push('/')   
          }
          else{
            alert('Error While Adding Data')
          }
      })
    }
  }

  return (
      
      <div className="style">
      <div className="container">
      <h1>Change Your Password</h1>
      <div className="image">
      <div className="mb-3">
     
      <div className="mb-3">
        <label>Email</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setEmail(event.target.value)
          }}
          className="form-control"
          type="email"
          placeholder="Enter Your Email"
          
        />
      </div>
    
      
    
      <div className="mb-3">
        <label>New Password</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setPassword(event.target.value)
          }}
          className="form-control"
          type="password"
          placeholder="Enter New Password"
        />
      </div>
      <div className="mb-3">
        <button onClick={changepassword} className="btn btn-success">
          Confirm 
        </button> <Link className="nav-link" to ="/">Back</Link>
       
      </div>
 
    </div>
    </div>
    </div>
      </div>
    
  )
}

export default ChangePassword