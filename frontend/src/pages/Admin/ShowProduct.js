import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../../common/constants'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import {  useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'


const ShowProducts= () =>{
    
    const [products, setProducts] = useState([])
   // const [search, setSearch] = useState([])
    const history = useHistory()

  
    const AddProducts = () =>{
      history.push('/add-products')
  } 


    useEffect(() => {
        console.log(`Customers component got loaded`)
        getProducts()
      }, [])
    

      const getProducts = () => {
        axios.get(url+'/product/product-list').then((response) => {
            console.log("inside show product"+response.data)  
  //      const result = response.data
            setProducts(response.data)
        })
      }
      
      const deleteProduct=(id3)=>{
        console.log("id submmieed is : "+id3)
         axios.delete(url+'/product/delete-product/'+id3).then((response) => {            
            // history.push('/show-customers')      
         alert("product deleted successfully")
         getProducts();
         history.push('/show-products')  
          })
     
     }
const updateProduct=(products)=>{
      const cookies = new Cookies()
      cookies.set('id4',products.id)
      cookies.set('name4',products.name)
      cookies.set('descrption4',products.description)
      cookies.set('status4',products.status)
      cookies.set('categoryType4',products.categoryType)
      cookies.set('price4',products.price)
      
      history.push('/update-product')  
}

const updateProductStatus = (id5, status1) => {
  axios.put(url+'/product/change-status/'+id5+'/'+status1);
  alert('Status changed!');
  history.push('/show-products');
 // window.location.reload(false);

}

    return(
    <div>
       <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
          
            <th>Name</th>
            <th>CategoryType</th>
            <th>Description</th>
            <th>Price</th>
            <th>Status</th>
            
          </tr>
        </thead>

        <tbody>
          {products.map((products) => {
            return (
              <tr>
                <td>{products.name}</td>
                <td>{products.categoryType}</td>
                <td>{products.description}</td>
                <td>{products.price}</td>
                <td>{products.status}</td>
            
                <td>
             <button className="btn btn-success"
               onClick={() => {
                 updateProductStatus(products.id , products.status)
               }}>
               Change status
             </button>
           </td>
                 <td>
                  <button className="btn btn-danger"
                    onClick={() => {
                      console.log("product id :"+products.id)
                      deleteProduct(products.id)
                    }}>
                    Delete
                  </button>
                </td> 
              
             <td>
             <button className="btn btn-success"
               onClick={() => {
                 updateProduct(products)
               }}>
               Update 
             </button>
           </td>
        
           </tr>
            )
          })}
        </tbody>  
      </table>  
          
      <button onClick={AddProducts} className="btn btn-primary">
          Add Products
        </button>  
    </div>
     
 );
}
export default ShowProducts