import Cookies from 'universal-cookie';
import axios from 'axios'
import { useState, useEffect } from 'react';
import {url} from '../../common/constants'
import { useHistory } from 'react-router';

const UpdateEmployee = () => {
  console.log(`Update Component got loaded`)
    const cookies = new Cookies();
    const history = useHistory()

    const [id,setId] = useState('')
    const email3=cookies.get('email2')
    const password3 = cookies.get('password2') 
    const [user,setUser] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [phone, setPhone] =useState('')
    const [role, setRole] = useState('EMPLOYEE')
    
    useEffect(() => {
      console.log(`Update Component got loaded`)
      getUser()  
    }, [])
  
 
      const getUser = () => {
        console.log(email3)
        console.log(password3)
        
  
        axios.post(url + '/user/signin',{"email":email3 , "password":password3}).then((response) => {
            const result = response.data
            console.log(result.data)
            setRole(result.role)
            setId(result.id)
            setEmail(result.email)
            //setPassword(result.password)
            setFirstName(result.firstName)
            setLastName(result.lastName)
            setPhone(result.phone)
        })
      
    }
 

    const back = () =>{
        history.push('/show-employees')
    }

    const addAlbumToDB = () => {
      if (email3.length === 0) {
        alert('enter Email')
      } else if (firstName.length === 0) {
        alert('enter First Name')
      } else if (lastName.length===0) {
        alert('Enter Last Name')
      } 
      else if (phone.length===0) {
          alert('Enter Phone')}    
      else {
    
        console.log("inside update callback")
        console.log(id)
         axios.put(url+'/employee/home/update-profile/'+id, {
          "id":id,   
          "email":email,
          "firstName":firstName,
          "lastName":lastName,
          "password":password,
          "phone":phone,
          "role":role
        }).then((response) => { console.log(response.data)})
        

        alert("Employee updated successfully")
            history.push('/show-employees')
        }
    }
 
    return (<div>
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
              placeholder={email3}
              type="text"
              //value={email}
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
              placeholder={firstName}
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
              placeholder={lastName}
              className="form-control"
            />
          </div>
          
         
          <div className="mb-3">
            <label htmlFor="">Phone</label>
            <input
              placeholder={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
              type="text"
             
              className="form-control"
            />
          </div>
  
  <div>
  </div> 
            <div className="mb-3 text-center">
              <button onClick={addAlbumToDB} className="btn btn-success">
                Update
              </button>
              <button onClick={back} className="btn btn-warning">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
  )
  
    
  }
export default UpdateEmployee;

