import axios  from "axios"
import { useState } from "react"
import {url } from '../../common/constants'
import { useHistory } from "react-router";
import React from 'react';


const AddDeliveryBoy = () =>{
  const [email,setEmail]=useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password , setPassword] = useState('')
  const [phone, setPhone] =useState('')
  const [role, setRole] = useState('DELIVERY_BOY')
 const history = useHistory()



 const back =()=>{
   history.push('/show-delivery-boy')
 }
  const onSelectRole=(roleName)=>{
    setRole(roleName)
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
  
       axios.post(url+'/admin/add-user', {
      
       "email":email,
        "firstName":firstName,
        "lastName":lastName,
        "password":password,
        "phone":phone,
        "role":role
    
      })
      alert(" DeliverBoy added successfully")
      history.push('/show-delivery-boy')
      
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
            {/* <div className="mb-3 text-center"> */}
               Role : 
                {
                    <select className="nextBtn" onChange={e => { onSelectRole(e.target.value)} }>
                        <option disabled selected>Select Role</option>
                                    <option>DELIVERY_BOY</option>
                    </select> 
                }
            {/* </div> */}
            </div>      
<div>
</div>
          <div className="mb-3 text-center">
            <button onClick={addAlbumToDB} className="btn btn-success">
              Add
            </button>
              &nbsp;
            <button onClick={back} className="btn btn-warning">
              Back
            </button>

          </div>
        </div>
      </div>
    </div>


  )
}
export default AddDeliveryBoy