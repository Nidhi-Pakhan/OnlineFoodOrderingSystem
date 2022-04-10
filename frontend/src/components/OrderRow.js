import { url } from '../common/constants'
import axios  from 'axios'
import './ProductsRow1.css'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../actions/cartActions'

const OrderRow = (products) => {
    //console.log(products)
    const result = products
    console.log(products.productId.id)
   // console.log(products.id)
  // const dispatch = useDispatch()
   
 
    return (
    <div>
    <tr>
       <td>{products.productId.id}</td>
       <td>{products.productId.name}</td> 
      <td>{products.productId.price}</td>  
      
    </tr>
    

    </div>
  )
}

export default OrderRow 
