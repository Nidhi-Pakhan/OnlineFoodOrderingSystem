import axios from 'axios'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
//import PaymentRow from '../../components/OrderRow'
import { Link, useHistory } from 'react-router-dom'
import {url} from '../../common/constants'

const AllOrdersByDate = () =>{
    const [products, setProducts]=useState([])
    const cookies = new Cookies();

  
    const ChangeStatus = (id) =>{
        axios.put(url+'/employee/home/order-change-status/'+id).then((response) => {
            console.log(response.data)  
    //      const result = response.data
            setProducts(response.data)
    })
}

    useEffect(() => {
        console.log(`Customers component got loaded`)
        getProducts()
    
      }, [])
    
      const getProducts = () => {
        axios.get(url+'/employee/home/order-list-by-date').then((response) => {
            console.log(response.data)  
    //      const result = response.data
            setProducts(response.data)
        })
      }

   
    return(
    <div>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>totalPrice</th>
            <th>issuedOn</th>
            <th>orderStatus</th>
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
                
              </tr>
             
            )
          })}
        </tbody>
      </table>
  

    </div>      
    )
} 
export default AllOrdersByDate