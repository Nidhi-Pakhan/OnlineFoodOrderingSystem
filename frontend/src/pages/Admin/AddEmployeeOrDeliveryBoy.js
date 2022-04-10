import axios  from "axios"
import { useState } from "react"
import {url} from '../../common/constants'
import { useHistory } from "react-router";
import React from 'react';

const AddEmployeeOrDeliveryBoy = () =>{
  const history = useHistory()
  const [email,setEmail]=useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password , setPassword] = useState('')
  const [phone, setPhone] =useState('')
  const [role, setRole] = useState('EMPLOYEE')
 
  const Back =()=>{
    history.push('/admin-home')
  }
  
  const addAlbumToDB = () => {
    if (email.length === 0) {
      alert('enter Email')
    } else if (firstName.length === 0) {
      alert('enter First Name')
    } else if (lastName.length===0) {
      alert('Enter Last Name')
    }  else if (password.length===0) {
        alert('Enter Password')}
    else if (phone.length===0) {
        alert('Enter Phone')}    
    else {
  
//console.log(firstName);

       axios.post(url+'/admin/add-user', {
         
       // const result = response.data
       //   console.log(result)
      
       "email":email,
        "firstName":firstName,
        "lastName":lastName,
        "password":password,
        "phone":phone,
        "role":role
    
      })
      alert("Employee or DeliverBoy added successfully")
      history.push('/admin-home')
    }
  }


  return(
    <div>
    <h1 className="page-title"></h1>
    <div className="row">
      <div className="col">
              </div>
      <div className="col-10">
        <div className="mb-3">
          <label htmlFor="">email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">First Name</label>
          <input
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Last Name</label>
          <input
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            className="form-control"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="">Phone</label>
          <input
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="Screen"> 
               Role : 
                {
                    <select className="nextBtn" onChange={e => {  setRole(e.target.value)} }>
                        <option disabled selected>Select Role</option>
                                    <option>EMPLOYEE</option>
                                    <option>DELIVERY_BOY</option>
                    </select> 
                }
            </div>      
        <div>
        </div>
          <div className="mb-3 text-center">
            <button onClick={addAlbumToDB} className="btn btn-success">
              Add
            </button>
            <button onClick={Back} className="btn btn-warning">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}
export default AddEmployeeOrDeliveryBoy