import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import {  useHistory } from 'react-router-dom'
import ProductsRow from '../../components/ProductsRow'
import {url} from '../../common/constants'

const Thalis= () =>{    
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState([])
    const history = useHistory()

  

    useEffect(() => {
        console.log(`Customers component got loaded`)
        getProducts()
    
      }, [])
    

      const getProducts = () => {
        axios.get(url+'/product/find-product-by-categoryType/THALIS').then((response) => {
            console.log(response.data)  
  //      const result = response.data
            setProducts(response.data)
        })
      }
      
    return(
    <div>
 
<div></div>
       
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
            return <ProductsRow products={products} />
          })} 
        </tbody> 
      </table>    
    </div>
     
 );
}
export default Thalis