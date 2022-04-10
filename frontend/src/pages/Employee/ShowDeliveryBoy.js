import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../../common/constants'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import {  useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';

const ShowDeliveryBoy = () =>{
    
    const [deliveryBoy, setDeliveryBoy] = useState([])
    const history = useHistory()
    const cookies = new Cookies();


    useEffect(() => {
       // console.log(`Employees component got loaded`)
        getDeliveryBoy()
      }, [])
    
      const getDeliveryBoy = () => {
        axios.get(url+'/admin/show/DELIVERY_BOY').then((response) => {
            console.log(response.data)  
       // const result = response.data //err
            setDeliveryBoy(response.data)
        })
      }
    const AddEmployee1 = () =>{
        history.push('/add-delivery-boy')
      
    } 

  const deleteDeliveryBoy=(email1)=>{
      console.log(email1)
 
       //setEmail (customers.email)
       axios.post(url+'/admin/delete-user',{"email":email1}).then((response) => {
          alert("DeliverBoy deleted Successfully")
          // history.push('/show-customers')      
       })
   
   }

   const updateDeliveryBoy =(deliveryBoy)=>{
      cookies.set('email2',deliveryBoy.email)    
      cookies.set('password2',deliveryBoy.password)
      history.push('/update-delivery-boy')
    }

    return(
    <BrowserRouter>    
    <div>
      {/* <h3 className="page-title">DeliverBoy</h3> */}
 <br></br>
<br></br>
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
          {deliveryBoy.map((deliveryBoy) => {
            return (
              <tr>
                
                <td>{deliveryBoy.email}</td>
                <td>{deliveryBoy.firstName}</td>
                <td>{deliveryBoy.lastName}</td>
                <td>{deliveryBoy.phone}</td>
                <td>{deliveryBoy.role}</td>
                
                 <td>
                  <button className="btn btn-danger"
                    onClick={() => {
                      deleteDeliveryBoy(deliveryBoy.email)
                    }}>
                    Delete 
                  </button>
                </td> 
                <td>
                  <button className="btn btn-success"
                    onClick={() => {
                      updateDeliveryBoy(deliveryBoy)
                    }}>
                    Update 
                  </button>
                </td> 
              </tr>
             
            )
          })}
        </tbody> 
      </table>  
      
      <button onClick={AddEmployee1} className="btn btn-primary">
          Add DeliveryBoy
        </button>  
  
    </div>
      
 </BrowserRouter>
 );
}
export default ShowDeliveryBoy