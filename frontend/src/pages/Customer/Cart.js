import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../../actions/cartActions'
import {url} from '../../common/constants'
import axios from 'axios'
import Cookies from 'universal-cookie';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './MyCart.css';

const Cart = () => {
//  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()
  const history = useHistory()
  const [products, setProducts]=useState([])
  const cookies = new Cookies();
  const id2=cookies.get('id');
  const [result,setResult]=useState([])

  useEffect(() => {
    console.log(`Customers component got loaded`)
    getProducts()

  }, [])

  const getProducts = () => {
    axios.get(url+'/customer/cart/'+id2).then((response) => {
        console.log(response.data)  
//      const result = response.data
        setProducts(response.data)
        setResult(products)

    })
  }

  const Back =()=>{
    history.push('/customer-home')
  }
  const submitOrder=()=>{
    if(products.length==0){
      alert('cart is empty')
      history.push('/customer-home')
    }
    else{
    history.push('/address')
    }
  }

  const removeFromCart = (products,pid) => {
   
    console.log("product id inside removefrom cart "+pid);
    axios.delete(url+'/customer/cart-delete/'+id2+"/"+pid, {
      })
      
    
      //dispatch(removeFromCartAction(products))   
      alert("Product is deleted from Cart successfully") 
      history.push('/cart')
  }

  return (
    <div className="cartbgimg">
    <br></br>
      <h1>My Cart</h1>
     
            <br/><br/>
      {/* <table className="table table-striped"> */}
      <table >
        <thead>
          <tr>
          {/* <th>categoryType</th>
            <th>name</th>
           
            <th>description</th>
            <th>price</th> */}
          </tr>
        </thead>
        <tbody>
          {products.map((products) => {
            return (
              <tr>
              <td></td>
              {/* <td>{products.categoryType}</td>
                <td>{products.name}</td>
              
                <td>{products.description}</td>
                <td>{products.price}</td>
              <td></td> */}
              <div >
              &nbsp; 
             
          <div> &nbsp; &nbsp;  &nbsp; Category    :   {products.categoryType} </div>
           <div>  &nbsp; &nbsp;  &nbsp; Name        :   {products.name} </div>
           {/* <div>  &nbsp; &nbsp;  &nbsp; Description :   {products.description} </div> */}
           <div>  &nbsp; &nbsp;  &nbsp; Price       :   {products.price} </div>
           <br></br>
            
           </div>
           <td colSpan={7}></td>  
              <td >  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;
                  <button className="btn btn-danger"
                    onClick={() => {   
                      removeFromCart(products,products.id)
                    }}>
                     Remove
                  </button>
                  </td>
              </tr>
             
            )
          })}
        </tbody>
      </table>
      <br/>
     <div className="mb-3 text-center"> 
                  <button className="btn btn-success"
                    onClick={() => {
                      submitOrder()
                    }}>
                    Submit Order
                  </button>
                  &nbsp;
                  <button onClick={Back} className="btn btn-warning">
                    Back
                  </button>
                  <br/><br/>
                  </div>
    </div>
  )
}

export default Cart
