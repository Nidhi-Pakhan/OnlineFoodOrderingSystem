import axios from 'axios'
import { useState} from 'react'
import './ChangePassword.css'
import { Link,useHistory } from 'react-router-dom';
import { url } from './common/constants'
import Cookies from 'universal-cookie';


const EditProfile = () => {
  // define the state
  
  const cookies = new Cookies();
  const id=cookies.get('id1');
  console.log(id)
  const email=cookies.get('email');


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('CUSTOMER')
  const [password,setpassword] = useState('')
  const history = useHistory()

  //const history  = useHistory();


  const editProfile = () => {

    console.log(`first name = ${firstName}`)
    console.log(`last name = ${lastName}`)
    console.log(`mobile = ${phone}`)
    console.log(`password = ${password}`)
 //   console.log(`role = ${role}`)
    
    if (firstName.length === 0) {
      alert('Enter First Name')
   }
  if (lastName.length===0) {
      alert('Enter Last Name')
  }
  
  else if (phone.length===0){
    alert('Enter mobile')
  }
  
    
  else if (password.length===0){
    alert('Enter password')
  }
    
  
  else{
//      const data = new FormData()
      console.log(firstName)
      console.log(lastName)
      console.log(phone)
      console.log(password)

      axios.post(url+'/user/editprofile', {
         
        "id":id,
         "firstName":firstName,
         "lastName":lastName,
         "email":email,
         "phone":phone,
         "role":role,   
          "password":password
       })
       alert('successfully Updated user')     
       
       history.push('/customer-home')
      
  }
}

const Back=()=>{
    history.push('/customer-home')
}

  return (
      <div className="style">
      <div className="container">
      <h1>Edit Profile</h1>
      <div className="image">
      <div className="mb-3">
        <label>First Name</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setFirstName(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter Your First Name"
        />
      </div>
      <div className="mb-3">
        <label>Last Name</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setLastName(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter Your Last Name"
        />
      </div>
      
      

      <div className="mb-3">
        <label>Phone</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setPhone(event.target.value)
          }}
          className="form-control"
          type="number"
          placeholder="Enter Your Mobile Number"
        />
      </div>
     

      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setpassword(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter Your Password"
        />
      </div>
          
    

      <div className="mb-3 text-center">
        <button onClick={editProfile} className="btn btn-success">
          Update Profile
        </button> 
         &nbsp;

         <button onClick={Back} className="btn btn-warning">
          Back 
        </button>

      </div>
    </div>
    </div>
    </div>
  )
}

export default EditProfile