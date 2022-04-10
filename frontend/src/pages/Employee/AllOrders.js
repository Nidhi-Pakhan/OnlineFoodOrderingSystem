import axios from 'axios'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom'
import {url} from '../../common/constants'

const AllOrders = () =>{
    const [products, setProducts]=useState([])
    const cookies = new Cookies();

   

    const ChangeStatus = (id) =>{
        console.log(id)
        axios.put(url+'/employee/home/order-change-status/'+ id).then((response) => {
     
    })
}

    useEffect(() => {
        console.log(`Customers component got loaded`)
        getProducts()
    
      }, [])
    
      const getProducts = () => {
        axios.get(url+'/employee/home/order-list').then((response) => {
    //        console.log(response.data)  
    //      const result = response.data
            setProducts(response.data)
        })
      }

   
    return(
    <div>
        <table className="table table-striped">
        <thead>
          <tr>
           <th>OrderId</th>
            <th>totalPrice</th>
            <th>issuedOn</th>
            <th>Order Status</th>
            <th>Change Status</th>
           
          </tr>
        </thead>
        <tbody>
          {products.map((products) => {
            return (
              <tr>
                <td>{products.id}</td>
                <td>{products.totalPrice}</td>
                <td>{products.issuedOn}</td>
                <td>{products.orderStatus}</td>
                <td>
                <button
                    onClick={()=>ChangeStatus(products.id)} className="btn btn-success">
                    Change 
                  </button>  
                </td>
               
              </tr>         
            )
          })}
        </tbody>
      </table>
  

    </div>      
    )
} 
export default AllOrders