import axios from 'axios'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import {  useHistory } from 'react-router-dom'
import {url} from '../../common/constants'
import './CustomerHome.css';
const Order= ()=>{

    const [products, setProducts]=useState([])
    const cookies = new Cookies();
    const id1=cookies.get('id') 
    const history = useHistory()


    useEffect(() => {
        console.log(`Customers component got loaded`)
        getProducts()
    
      }, [])
    
      const getProducts = () => {
        axios.get(url+'/customer/cart/'+id1).then((response) => {
            console.log(response.data)  
    //      const result = response.data
            setProducts(response.data)
        })
      }


const  ConfirmOrder = () =>{

     axios.post(url+'/customer/place-order/' +id1).then((response) => {
        const result = response.data        
      })        

   alert('Order is successfully added ') 
       history.push('/customer-home')
}

const CancelOrder = () =>{
    alert('Order is successfully Cancel ')
    history.push('/customer-home')
}

const Back = () =>{
  history.push('/payment')
}


return(
    <div className='orderbg'>
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <h1>My Orders</h1>
    <div></div>

    {/*       */}

            <br/><br/>
    <table className="table table-borderless">
        <thead>
          <tr>
          &nbsp;  &nbsp; 
          &nbsp;     &nbsp;  &nbsp;  &nbsp; 
          &nbsp;     &nbsp;  &nbsp;  &nbsp; 
          <th>Type</th>
            <th>name</th>
            {/* <th>description</th> */}
            <th>price</th>
            &nbsp;     &nbsp;  &nbsp;  &nbsp; 
            &nbsp;     &nbsp;  &nbsp;  &nbsp; 
            &nbsp;     &nbsp;  &nbsp;  &nbsp; 
            &nbsp;     &nbsp;  &nbsp;  &nbsp; 
            &nbsp;     &nbsp;  &nbsp;  &nbsp; 
          </tr>
        </thead>
        <tbody>
          {products.map((products) => {
            return (
              <tr>
              &nbsp;  &nbsp; 
              &nbsp;     &nbsp;  &nbsp;  &nbsp; 
              &nbsp;     &nbsp;  &nbsp;  &nbsp; 
                <td><h5>{products.categoryType}</h5></td>
                <td><h5>{products.name}</h5></td>
                {/* <td><h5>{products.description}</h5></td> */}
                <td><h5>{products.price}</h5></td>
                &nbsp;     &nbsp;  &nbsp;  &nbsp; 
                &nbsp;     &nbsp;  &nbsp;  &nbsp; 
                &nbsp;     &nbsp;  &nbsp;  &nbsp; 
                &nbsp;     &nbsp;  &nbsp;  &nbsp; 
            &nbsp;     &nbsp;  &nbsp;  &nbsp; 
              </tr>
             
            )
          })}
        </tbody>
      </table>
      <br/><br/>
  <div className="mb-3 text-center">
  <button onClick={Back} className="btn btn-warning">
              Back
            </button> 
            &nbsp;
        &nbsp;
<button onClick={ ConfirmOrder } className="btn btn-success">
         Confirm Order 
    </button>
        &nbsp;
        &nbsp;
          
    <button onClick={CancelOrder} className="btn btn-warning">
          Cancel Order
    </button> 
    <br></br> <br></br> <br></br> <br></br> <br></br> 
    </div>
        </div>
          
)
}
export default Order