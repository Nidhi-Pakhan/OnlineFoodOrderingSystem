import axios from 'axios'
import { useState} from 'react'
import './EditAddress.css';
import { Link,useHistory } from 'react-router-dom';
import {url} from '../../common/constants'
import Cookies from 'universal-cookie';


const EditAddress = () => {
  // define the state
  
  const cookies = new Cookies();
  const id1=cookies.get('id');
  console.log("inside Edit Address: "+id1)
  const email=cookies.get('email');


  const [addressLine1, setaddressLine1] = useState('')
  const [addressLine2, setaddressLine2] = useState('')
  const [city, setcity] = useState('')
  const [pinCode, setpinCode] = useState('')
  const [state,setstate] = useState('')
  const [country,setcountry] = useState('')
  const history = useHistory()

  //const history  = useHistory();


  const editProfile = () => {


    
    if (addressLine1.length === 0) {
      alert('Enter addressLine1')
   }

   else if (addressLine1.length === 0) {
    alert('Enter addressLine1')
 }

  else if (city.length===0) {
      alert('Enter City')
  }
  
  else if (pinCode.length===0){
    alert('Enter pinCode')
  }
  
    
  else if (state.length===0){
    alert('Enter state')
  }
    

  else if (country.length===0){
    alert('Enter Country')
  }
    
  else{


      axios.post(url+'/user/editaddress', {
         
         "userId":id1,
         "addressLine1":addressLine1,
         "addressLine2":addressLine2,
         "city":city,
         "pinCode":pinCode,
         "state":state,   
          "country":country
       })
       alert('successfully Updated user')     
       
       history.push('/customer-home')
     
  }
}

const Back=()=>{
    history.push('/customer-home')
   // history.push('/address')
}

  return (
      <div className="bgimgg">
      <div className="container">
      <h1>Edit Address</h1>
      <div className="image">
      <div className="mb-3">
        <label>addressLine1</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setaddressLine1(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter area"
        />
      </div> 
      <div className="mb-3">
        <label>addressLine2</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setaddressLine2(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter street"
        />
      </div>
      
      

      <div className="mb-3">
        <label>City</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setcity(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter city"
        />
      </div>
     

      <div className="mb-3">
        <label>State</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setstate(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter state"
        />
      </div>
          
      <div className="mb-3">
        <label>Pincode</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setpinCode(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter pincode"
        />
      </div>



      <div className="mb-3">
        <label>Country</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setcountry(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter country"
        />
      </div>

      <br/>
      <div className="mb-3 text-center">
        <button onClick={editProfile} className="btn btn-success">
          Update Address
        </button> 
         &nbsp;

         <button onClick={Back} className="btn btn-warning">
          Back 
        </button>
        <br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default EditAddress