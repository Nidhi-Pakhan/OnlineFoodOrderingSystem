import axios from 'axios'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';
import {url} from '../../common/constants'
import './ShowAddress.css'

const ShowAddress = () =>{
    const [products, setProducts]=useState([])
    const cookies = new Cookies();
    const id1=cookies.get('id')  
    const name2 = cookies.get('firstName')  
    const [address, setAddress] = useState('')
    const history = useHistory()
  
    useEffect(() => {
        console.log(`Customers component got loaded`)
        getAddress()
    
      }, [])
    
      const getAddress = () => {
          //const data = new FormData()
        axios.get(url+'/customer/getAddress/'+id1).then((Response) => {
          console.log("display address" +Response.data)
          setAddress(Response.data)
        })
      }
      console.log("display setaddress" +address)
     
      const EditAddress = ()=>{
        history.push('/edit-address') 
      }

   const Back=()=>{
       history.push('/customer-home') 
   }


    return(
      
    <div className='addressimg'>

     {/* <div className="container-fluid">
      <div className="row">
        <div className="col"> */}
          <br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h6 className="h5">Hello, {name2}</h6>
        {/* </div>
      </div>
      </div> */}
        <h1>My Address</h1>   
             <br/><br/>
             <div>
             <h6 className='h6'>Area :     {address.addressLine1}</h6>
             <h6 className='h6'>Street :   {address.addressLine2}</h6>
             <h6 className='h6'>City :     {address.city}</h6>
             <h6 className='h6'>pincode :  {address.pinCode}</h6>
             <h6 className='h6'>State :    {address.state}</h6>
             <h6 className='h6'>Country :  {address.country}</h6>
             </div>  

             <br/><br/>
        
        <div className="mb-3 text-center">
        <button onClick={EditAddress} className="btn btn-success">
            Edit Address 
          </button>
          &nbsp;
          &nbsp;
          <button onClick={Back} className="btn btn-warning">
            Back 
          </button>
           <br/> <br/> <br/>
        </div>

    </div>      
    )
} 

export default ShowAddress