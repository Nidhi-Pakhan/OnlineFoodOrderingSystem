import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../../common/constants'
import Cookies from 'universal-cookie';

import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../../actions/cartActions'


const Address= () => {
  const dispatch = useDispatch()
  const history = useHistory()


    const cookies = new Cookies();
    const id1=cookies.get('id');    
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [city, setCity] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress]=useState([])


  const Back=()=>{
    history.push('/cart')
  }
  
     const ExistingAddress =()=>{
    axios.get(url+'/customer/checkAddress/'+id1).then((Response)=>{
      setAddress(Response.data)
     const result= Response.data
     console.log("inside ExsistiingUser" + result.data )
         if(result.status === "success"){
            alert(" OK Address exist! proceed further ")
            history.push('/payment') 
         }else{
           alert("Address does not exist , please add!!!")
         }
      })
     
     }


    const addAddress = () => {
      console.log(`addressLine1 = ${addressLine1}`)
      console.log(`addressLine2 = ${addressLine2}`)
      console.log(`city = ${city}`)
      console.log(`pinCode = ${pinCode}`)
      console.log(`state = ${state}`)
      console.log(`country = ${country}`)
      
      if (addressLine1.length === 0) {
        alert('Enter First Name')
     }
    if (addressLine2.length===0) {
        alert('Enter Last Name')
    }
    else if (city.length===0){
        alert('Enter email ')
    }
    else if (pinCode.length===0){
      alert('Enter mobile')
    }
    
    else if (state.length===0){
        alert('Enter password')
      }
    
      else if (country.length===0){
        alert('Enter password')
      }
    else{
  //      const data = new FormData()
        console.log(addressLine1)
        console.log(addressLine2)
        console.log(city)
        console.log(pinCode)
        console.log(state)
        console.log(country)
  
        axios.post(url+'/user/add-address/'+id1, {
           
         
          
           "addressLine1":addressLine1,
           "addressLine2":addressLine2,
           "city":city,
           "pinCode":pinCode,
           "state":state,
           "country":country
     //      "role":role   
          
         })
         alert('successfully added  Address')     
           history.push('/payment') 
        
    }
  }
  
    return (
        <div className="bgimgg">
          <h1>My Address</h1>
        <div className="container">
        <div className="image">
        <div className="mb-3">
          <label>Address Line1</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setAddressLine1(event.target.value)
            }}
            className="form-control"
            type="text"
            placeholder="Enter AddressLine1"
          />
        </div>
        <div className="mb-3">
          <label>Address Line2</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setAddressLine2(event.target.value)
            }}
            className="form-control"
            type="text"
            placeholder="Enter AddressLine2"
          />
        </div>
        
       
  
        <div className="mb-3">
          <label>City</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setCity(event.target.value)
            }}
            className="form-control"
            type="text"
            placeholder="Enter City"
          />
        </div>
       
       
        <div className="mb-3">
          <label>Pincode</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setPinCode(event.target.value)
            }}
            className="form-control"
            type="number"
            placeholder="Enter Pincode"
          />
        </div>
            
        
        <div className="mb-3">
          <label>State</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setState(event.target.value)
            }}
            className="form-control"
            type="text"
            placeholder="Enter State"
          />
        </div>    
      
      
        <div className="mb-3">
          <label>Country</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setCountry(event.target.value)
            }}
            className="form-control"
            type="text"
            placeholder="Enter Country"
          />
        </div>    
      
        <div className="mb-3 text-center">

            &nbsp;
            &nbsp;
            <br></br>
          <button onClick={addAddress} className="btn btn-success">
            Add Address 
          </button>

            &nbsp;
            &nbsp;
          <button onClick={Back} className="btn btn-warning">
            Back 
          </button>  
         
        </div>
        &nbsp; &nbsp; &nbsp;    &nbsp; 
            <button onClick={ExistingAddress} className="btn btn-success">
             Use existing Address
            </button>
            <br/><br/><br/>
      </div>
      </div>
      </div>
     
    )
  }
  

export default Address