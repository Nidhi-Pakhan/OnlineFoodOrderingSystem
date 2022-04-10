import { url } from '../common/constants'
import axios  from 'axios'
import { useState } from 'react'
import './ProductsRow1.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../actions/cartActions'
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom'
//import { decrement, increment } from '../actions/counterActions'

const ProductsRow = ({ products }) => {

  const dispatch = useDispatch()
   const cookies  = new Cookies();
   const [counter1, setCounter]=useState('1')
   const id2 =cookies.get('id'); 
   const history = useHistory()

  const [quantity,setQuantity]=useState('1') 
  

  const onIncrement = (counter1) => {
   setCounter(counter1+1)  
  }

  const onDecrement = () => {
   setCounter(counter1-1) 
}



   const addToCart =(products) => {
    
    console.log(products.id)
    console.log(quantity)
    console.log(id2)
  
 
    console.log("inside addToCArt "+products.status)
  if(products.status === "UNAVAILABLE"){
        alert("Product is not available at this moment!!")
  }


else{


    axios.post(url+'/customer/add-to-cart',{
         
        "productId":products.id,
        "quantity":quantity,
        "userId":id2

      })

      alert("Product is added to Cart successfully")
    
  
    dispatch(addToCartAction(products))
    }  
  }
    return (
    <tr>
     <td>{products.categoryType}</td>
      <td>{products.name}</td>  
      <td>{products.description}</td>
      <td>{products.price}</td>  
      <td>{products.status}</td>
      <td>{products.quantity}</td>
    
            <td>
                  <button className="btn btn-success"
                    onClick={() => {
                       addToCart(products)
                    }}>
                    Add To Cart
                  </button>
                </td> 
     
    </tr>
  )
}

export default ProductsRow 
