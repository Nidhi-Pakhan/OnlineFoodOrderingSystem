import './App.css';
import SignIn from './pages/Signin'
import { BrowserRouter, Route,Link, Switch } from "react-router-dom";
import AdminHome from './pages/Admin/AdminHome'
import CustomerHome from './pages/Customer/CustomerHome';
import EmployeeHome from './pages/Employee/EmployeeHome';
import DeliveryBoyHome from './pages/DeliveryBoy/DeliveryBoyHome';
import SignUp from './pages/Signup'
import ShowProduct from './pages/Admin/ShowProduct'
import Cart from './pages/Customer/Cart'
import Order from './pages/Customer/Order';
import Address from './pages/Customer/Address'
import Payment from './pages/Customer/Payment';
import ShowOrders from './pages/Customer/Showorders';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile'

function App() {
  return (
    //
    <BrowserRouter>
    
      <Switch>

        <Route path = "/" exact component={SignIn}/>
        <Route path = "/admin-home" component={AdminHome}/>
        <Route path = "/customer-home"  component={CustomerHome}/>
        <Route path = "/employee-home" component={EmployeeHome}/>        
        <Route path = "/delivery-boy-home" component={DeliveryBoyHome}/>
        <Route path = "/sign-up" component={SignUp}/>         
        <Route path ="/show-products" component ={ShowProduct}/>   
        <Route path ="/cart"   component = {Cart}/> 
        <Route path ="/order" exact component = {Order}/>              
        <Route path = "/address"  component={Address}/>           
        <Route path = "/payment"  component={Payment}/>                 
        <Route path = "/show-orders"  component={ShowOrders}/>                    
        <Route path = "/change"  component={ChangePassword}/>                    
        <Route path = "/edit-profile"  component={EditProfile}/>                    
          
      </Switch>
      
      </BrowserRouter>
  );
}

export default App;
