import { url } from '../common/constants'
import axios  from 'axios'
import { useState } from 'react'
import './ProductsRow1.css'

const ProductsRow = ({ products }) => {
   // const [id2,id]=useState('')
  
    
    // const deleteUser =(id1)=>{
    //     console.log(id1)
    //     const data = new FormData()
    //     data.append('id2', id1)
   
    //     //setEmail (customers.email)
    //     axios.post('http://localhost:8080/admin/delete-user',data).then((response) => {
         
    //     })
     
    // }
    return (
    <tr>
       <td>{products.id}</td>
    {/*<td>{products.categoryType}</td>
      <td>{products.description}</td>
      <td>{products.price}</td>  
      <td>{products.status}</td> */}
      
      <td>{products.name}</td> 
      
      <td>{products.categoryType}</td>
      <td>{products.description}</td>
      <td>{products.price}</td>  
      <td>{products.status}</td>
      <td>
        <img
          src ={url +'/' + products.image}
          alt =""
          className="image"
        />
      </td>
     
      {/* <td>
       <button onClick={deleteUser(products.id)} className="btn btn-danger">
              Delete
            </button> 

      </td> */}
    </tr>
  )
}

export default ProductsRow
