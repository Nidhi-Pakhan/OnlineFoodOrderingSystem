import axios from 'axios'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';
import {url} from '../../common/constants'
import './CustomerHome.css';

const ShowOrderDetails = () =>{
    const [products, setProducts]=useState([])
    const cookies = new Cookies();
    const id2=cookies.get('id2')  

    const name2 = cookies.get('firstName')  
    const [products1, setProducts1] = useState([])
    const history = useHistory()
  
    useEffect(() => {
        console.log(`Customers component got loaded`)
        getItems()
      
      }, [])
    
      console.log("orderId : "+id2)
      const getItems = () => {
        axios.get(url+'/customer/displayorder/'+id2).then((response) => {
        setProducts(response.data)
        })
      }


   const Back=()=>{
       history.push('/customer-home') 
   }
    return(
    <div className='bgimg'>

     <div className="container-fluid">
      <div className="row">
        <div className="col">
          <br></br>
         {/* <h6 className="h6">Hello, {name2}</h6> */}
        </div>
      </div>
      </div>     
        <h3 className='h3'>Order Details</h3>   
        {/* <button className="btn btn-warning" onClick={Back} >
            Back 
          </button> */}
        
        <table className="table table-borderless">
        <thead>
        <tr>
        <th></th>
        &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;  
          <th>name</th>
          <th>categoryType</th>
          <th>description</th>
          <th>price</th>
          &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;   
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; 
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;   
          <th></th>
        </tr>
        </thead>
        <tbody>
          {products.map((products) => {
            return (
              <tr>
              <td></td>
              &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;  
              <td>{products.name}</td>
                <td>{products.categoryType}</td>
                <td>{products.description}</td>
                <td>{products.price}</td>
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;   
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; 
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;   
                <td></td>
              </tr>         
            )
          })}
        </tbody>
      </table>
        <div className="mb-3 text-center">
          &nbsp;
          &nbsp;
          <button onClick={Back} className="btn btn-warning">
            Back 
          </button>
           <br/> <br/>
        </div>

    </div>      
    )
} 

export default ShowOrderDetails