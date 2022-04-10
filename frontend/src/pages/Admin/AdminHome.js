import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import AddProducts from './AddProducts';
import AddEmployeeOrDeliveryBoy from './AddEmployeeOrDeliveryBoy';
import ShowProduct from './ShowProduct';
import ShowEmployees from './ShowEmployees';
import ShowCustomers from './ShowCustomers';
import UpdateEmployee from './UpdateEmployee';
import UpdateProduct from './UpdateProduct';
import AllOrdersByDate from '../Employee/AllOrdersByDate';
import Cookies from 'universal-cookie';
import {  useHistory } from 'react-router-dom'


const AdminHome =()=>{
  const history = useHistory()
  const cookies = new Cookies();
  const name2 = cookies.get('firstName')

  const Logout= ()=>{
    history.push('/')
  }
    return(<div>      
      <div >
      </div>
  
  <BrowserRouter>
    <div>
      
  
        <h1>Online Food Order
        &nbsp;
        &nbsp;
    
       
        </h1>
        <h6 className="h6">Hello, {name2}</h6>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="">
              Admin Home
            </a> */}

            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

              <li>
              <Link className="nav-link" to="/admin-home">
                    Admin Home
                  </Link> 
              </li>
                <li className="nav-item">
                   <Link className="nav-link" to="/show-products">
                    Show Products
                  </Link> 
                </li>
                <li>
                  <Link className="nav-link" to="/show-employees">
                    Show Employees
                  </Link>
                </li>
                <li>
                   <Link className="nav-link" to="/show-customers">
                    Show Customers
                  </Link> 
                </li>
                <li>
                  <Link className="nav-link" to="/all-orders-by-date">
                   Show Orders
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/add-employee-deliveryboy">
                    Add EmployeeOrDeliveryBoy
                  </Link>
                </li>
               
              </ul>
            </div>
            <button  className="btn btn-danger" onClick={Logout}>Logout</button>
          </div>
        </nav>
      </div>
    <Switch>
      
     
    <Route path ="/add-employee-deliveryboy"  component ={AddEmployeeOrDeliveryBoy}/>
    <Route path = "/show-employees" exact component ={ShowEmployees}/>
     <Route path ="/show-products" exact component ={ShowProduct}/>    
     <Route path ="/show-customers" exact component ={ShowCustomers}/>   
     <Route path={"/update-employee"} component={UpdateEmployee}/>  
     <Route path ="/update-product" exact component ={UpdateProduct}/>      
     <Route path ="/add-products" exact component ={AddProducts}/>   
     <Route path = "/all-orders-by-date" component ={AllOrdersByDate}/> 
    </Switch>
    </BrowserRouter>  
    
    </div>
    )
}
export default AdminHome