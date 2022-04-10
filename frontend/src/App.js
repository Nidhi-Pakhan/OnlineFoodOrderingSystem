import './App.css';
import SignIn from './pages/Signin'
import { BrowserRouter, Route,Link, Switch } from "react-router-dom";
import SignUp from './pages/Signup';
import AdminHome from './pages/Admin/AdminHome';
import CustomerHome from './pages/Customer/CustomerHome';
import EmployeeHome from './pages/Employee/EmployeeHome';
import DeliveryBoyHome from './pages/DeliveryBoy/DeliveryBoyHome';
import ShowProduct from './pages/Admin/ShowProduct';
import ShowEmployees from './pages/Admin/ShowEmployees';
import ShowCustomers from './pages/Admin/ShowCustomers';
import UpdateEmployee from './pages/Admin/UpdateEmployee';
import EditProfile from './EditProfile';
import ShowOrders from './pages/Customer/Showorders';
import Cart from './pages/Customer/Cart';
import Order from './pages/Customer/Order';
import Address from './pages/Customer/Address';
import Payment from './pages/Customer/Payment';
import ChangePassword from './ChangePassword';
import ShowAddress from './pages/Customer/Showaddress';
import EditAddress from './pages/Customer/EditAddress';
import ShowOrderDetails from './pages/Customer/Showordersdetails';

function App() {
  return (
    //
    <BrowserRouter>
    
      <Switch>

        <Route path = "/" exact component={SignIn}/>
        <Route path = "/sign-up" component={SignUp}/>         
        <Route path = "/admin-home" component={AdminHome}/>
        <Route path = "/customer-home"  component={CustomerHome}/>
        <Route path = "/employee-home" component={EmployeeHome}/>        
        <Route path = "/delivery-boy-home" component={DeliveryBoyHome}/>            
        <Route path ="/show-products" component ={ShowProduct}/> 
        <Route path ="/show-employees" component ={ShowEmployees}/> 
        <Route path ="/show-customers" component ={ShowCustomers}/> 
        <Route path={"/update-employee"} component={UpdateEmployee}/> 
        <Route path = "/show-orders"  component={ShowOrders}/>    
        <Route path = "/show-address"  component={ShowAddress}/>                 
        <Route path ="/cart"   component = {Cart}/>                   
        <Route path = "/edit-profile"  component={EditProfile}/>  
        <Route path ="/order" exact component = {Order}/>              
        <Route path = "/address"  component={Address}/>           
        <Route path = "/payment"  component={Payment}/> 
        <Route path = "/change"  component={ChangePassword}/> 
        <Route path = "/edit-address"  component={EditAddress}/> 
        
       
      </Switch>
      
      </BrowserRouter>
  );
}

export default App;
