import axios from 'axios'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';
import {url} from '../../common/constants';
import { BrowserRouter,  Route, Switch,Redirect ,Link} from 'react-router-dom'
import ShowOrderDetails from './Showordersdetails';
import './CustomerHome.css';
const ShowOrders = () =>{
    const [products, setProducts]=useState([])
    const cookies = new Cookies();
    const id1=cookies.get('id')  
   
    const name2 = cookies.get('firstName')  
    const [products1, setProducts1] = useState()
    const history = useHistory()
  
    useEffect(() => {
        console.log(`Customers component got loaded`)
        getProducts();
     
      }, [])
    
      const getProducts = () => {
          //const data = new FormData()
        axios.get(url+'/employee/home/order-list/'+id1).then((response) => {
        setProducts(response.data)
        })
      }

   
   const OrderDetails = (id2) => {
     console.log("========="+id2)
    cookies.set('id2', id2);
   //  <Redirect to="/" />
    //<Redirect to= "ShowOrderDetails" />
    history.push('/order-details')
  }

   const Back=()=>{
       history.push('/customer-home') 
   }
    return(
      <BrowserRouter>  
    <div className='bgimg'>

     <div className="container-fluid">
      <div className="row">
        <div className="col">
          <br></br>
          <h6 className="h6">Hello, {name2}</h6>
        </div>
      </div>
      </div>
        <h1>My Orders</h1>   
        {/* <button className="btn btn-warning" onClick={Back} >
            Back 
          </button> */}
        
        
        <table className="table table-borderless">
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th></th>
            <th>totalPrice</th>
            <th>issuedOn</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products) => {
            return (
              <tr>
              {/* <td>{products.id}</td>  */}
              <td></td>
                <td>{products.totalPrice}</td>
                <td>{products.issuedOn}</td>
                <td>{products.orderStatus}</td>
                {
            cookies.set('id2', products.id)
          }     
                <td>
              {/* <ul className="navbar-nav">       
                <li>  nav-link */}
                   <Link className="font-weight-bold text-muted nav-link" to="/order-details">
                   Order Details
                  </Link>
                  {/* </li>
                  </ul> */}
               
                  </td> 
                 
                    {/* <td><button onClick={OrderDetails(products.id)} className="btn btn-warning">
                      Order Details
                 </button> </td>    */}
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
           <br/><br/>
        </div>
        </div>  
 <Switch>
   <Route path = "/order-details"  component={ShowOrderDetails}/> 
</Switch> 
    
    </BrowserRouter>      
    )
} 

export default ShowOrders