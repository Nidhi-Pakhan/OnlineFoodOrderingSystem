import axios from 'axios'
import { useState} from 'react'
import './Signup.css'
import { Link,useHistory } from 'react-router-dom';
import { url } from '../common/constants'

const Signup = () => {
  // define the state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const history = useHistory()
 
  const signupUser = () => {
    console.log(`first name = ${firstName}`)
    console.log(`last name = ${lastName}`)
    console.log(`email = ${email}`)
    console.log(`mobile = ${phone}`)
    console.log(`password = ${password}`)
  
    
    if (firstName.length === 0) {
      alert('Enter First Name')
   }
  if (lastName.length===0) {
      alert('Enter Last Name')
  }
  else if (email.length===0){
      alert('Enter email ')
  }
  else if (phone.length===0){
    alert('Enter mobile')
  }
  
  else if (password.length===0){
    alert('Enter password')
  }

  
  else{
      console.log(firstName)
      console.log(lastName)
      console.log(email)
      console.log(phone)
      console.log(password)
    

      axios.post(url+'/user/signup', {
                 
         "firstName":firstName,
         "lastName":lastName,
         "email":email,
         "password":password,
         "phone":phone,
       
       })
       alert('successfully added new User')     
       
       history.push('/')
      
     
  }
}

  

  return (
      <div className="style">
      <div className="container">
      <h1>Signup</h1>
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
            setPassword(event.target.value)
          }}
          className="form-control"
          type="password"
          placeholder="Enter Your Password"
        />
      </div>

     
          
    

      <div className="mb-3">
        <button onClick={signupUser} className="btn btn-success">
          Signup 
        </button> <Link className="nav-link" to ="/">already have an account</Link>
      </div>
    </div>
     </div>
     </div>
  )
}

export default Signup