//import axios from '../../../../foodorder/node_modules/axios';
import axios from 'axios'
import { useState, useEffect } from 'react'
//import { BrowserRouter, Link } from 'react-router-dom'
//import { url } from '../common/constants'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import {  useHistory } from 'react-router-dom'
import { url } from '../../common/constants'
import '../../components/ProductsRow1.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../../actions/cartActions'
import Cookies from 'universal-cookie';
import { AlternateEmailRounded } from '@material-ui/icons'
//import { decrement, increment } from '../actions/counterActions'



const BreakFast= () =>{


  const dispatch = useDispatch()
  const cookies  = new Cookies();
  const [counter1, setCounter]=useState('1')
  const id2 =cookies.get('id'); 
  const history = useHistory()
  const [products, setProducts] = useState([])
 const [quantity,setQuantity]=useState(1) 
 

 const Increment = (id) => {
  
  setQuantity(quantity+1)  
 }

 const Decrement = (id) => {
  setQuantity(quantity-1) 
}

  const addToCart = (products) => {
   
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
    
    useEffect(() => {
        console.log(`Customers component got loaded`)
        getProducts()
    
      }, [])

      const getProducts = () => {
          axios.get(url+'/product/find-product-by-categoryType/BREAKFAST').then((response) => {    
        console.log(response.data)  
        const result = response.data
    
            setProducts(response.data)
        //console.log(products.id);
        console.log(response.data);
      //  console.log(result.data);
          })
      }

    return(
    <div>
      
 <table className="table table-borderless">
        <thead>
          <tr>
          <th>CategoryType</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Status</th>
           
          </tr>
        </thead>
        <tbody>
          {products.map((products) => {
            return (
              <tr>
              <td>{products.categoryType}</td>
                <td>{products.name}</td>
                <td>{products.description}</td>
                <td>{products.price}</td>
                <td>{products.status}</td>
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
          })}
        </tbody>
      </table>
    
    </div>
     
 );
}
export default BreakFast