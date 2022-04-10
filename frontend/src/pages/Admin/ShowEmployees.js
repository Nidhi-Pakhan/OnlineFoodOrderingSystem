import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../../common/constants'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import {  useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';
import UpdateEmployee from './UpdateEmployee'
import AdminHome from './AdminHome'


const ShowEmployees = () =>{
    const [employees, setEmployees] = useState([])
    const history = useHistory()
    const cookies = new Cookies();

    const getEmployees = () => {
        axios.get(url+'/admin/show/EMPLOYEE').then((response) => {      
            //console.log(response.data) 
            setEmployees(response.data)
        })
      }

    useEffect(() => {
        console.log(`Employees component got loaded`)
        getEmployees()
      }, [])
    

 
  const deleteEmployee=(email1)=>{
      console.log(email1)
    
       axios.post(url+'/admin/delete-user',{"email":email1}).then((response) => {
          alert("Employee deleted Successfully")
          getEmployees();
               
       })
   
   }
   
   const updateEmployee =(employee)=>{
      
    }

    return (
    <div>
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
          {employees.map((employee) => {
              //console.log("inside showEmployee")
             // console.log(employees);
            return (
              <tr>
                <td>{employee.email}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.phone}</td>
                <td>{employee.role}</td>
               
                 <td>
                  <button className="btn btn-danger"
                    onClick={() => {
                      deleteEmployee(employee.email)
                    }}>
                    Delete 
                  </button>
                </td> 
                <td>
                  <button className="btn btn-success"
                    onClick={() => {
                        cookies.set('email2',employee.email)    
                        cookies.set('password2',employee.password)
                        history.push('/update-employee')
                    }}>
                    Update 
                  </button>
                </td> 
              </tr>
             
            )
          })}
         </tbody> 
       </table>   
      </div>
    


 </BrowserRouter>
 </div>
 );
}
export default ShowEmployees