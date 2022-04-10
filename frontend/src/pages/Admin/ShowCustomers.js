import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import AddEmployee  from './AddEmployeeOrDeliveryBoy'
import {  useHistory } from 'react-router-dom'
import {url} from '../../common/constants'

const ShowCustomers= () =>{
    
  const [customers, setCustomers] = useState([])
  const history = useHistory()

  useEffect(() => {
      console.log(`Employees component got loaded`)
      getCustomers()
    }, [])
  
    const getCustomers = () => {
      axios.get(url+'/admin/show/CUSTOMER').then((response) => {
          console.log(response.data)  
      //const result = response.data
          setCustomers(response.data)
      })
    }

const deleteCustomers=(email1)=>{
  console.log(email1)

   axios.post(url+'/admin/delete-user',{"email":email1}).then((response) => {
      alert("Customer Deleted Successfully")
       history.push('/show-customers')      
   })

}

  return(
    <BrowserRouter>    
    <div>        
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Email</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customers) => {
            return (
              <tr>
                <td>{customers.email}</td>
                <td>{customers.firstName}</td>
                <td>{customers.lastName}</td>
                <td>{customers.phone}</td>
                <td>{customers.role}</td>
                 <td>
                  <button className="btn btn-danger"
                    onClick={() => {
                      deleteCustomers(customers.email)
                    }}>
                    Delete 
                  </button>
                </td> 
              </tr>    
            )
          })}
        </tbody> 
      </table>    
    </div>
      <switch>
      <Route path = "/add-employee" component ={AddEmployee}/>  
      </switch>
 </BrowserRouter>

 );
}
export default ShowCustomers