import axios from 'axios'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import PaymentRow from '../../components/OrderRow'
import { Link, useHistory } from 'react-router-dom'
import {url} from '../../common/constants'

const Payment = ()=>{
    var today = new Date(),
    paymentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(paymentDate);
 
     const [amount,setTotalPrice] = useState('')
     const [paymentType,setPaymentType] = useState('COD')     
     const [status, setStatus]= useState('PENDING')
     const [products, setProducts]=useState([])
     const cookies = new Cookies();
     const id1=cookies.get('id') 
     const history = useHistory()


const addToPayment = () =>{
     

  axios.post(url + '/customer/add-payment', {

    "userId":id1,
    "amount":amount,
    "status":status,
    "paymentType":paymentType

  }).then((response) => {
     const result = response.data
     alert('Payment successfully added  !!!!')
     history.push('/order')
   })

  
     }
     
     useEffect(() => {
         console.log(`Customers component got loaded`)
         getProducts()
       }, [])
    
       const getProducts = () => {
         axios.get(url+'/customer/cart/'+id1).then((response) => {
             console.log(response.data)  
           const result = response.data
             setProducts(response.data)
         })
       }

    useEffect(() => {
      console.log(`Customers component got loaded`)
      getTotalPrice()

    })

    const getTotalPrice = () => {
      axios.get(url+'/customer/cart/total-amt/'+id1).then((response) => {
          setTotalPrice(response.data)
            console.log(amount)
        })
    }

  const  onSelectPayment =(paymentType)=>{
    setPaymentType(paymentType)
  }


const Cancel = () =>{
    
    history.push('/customer-home')
}
const Back=()=>{
  history.push('/address')
}

    return(
        <div className='paymentbg'>
          <h1>Payment</h1>
          <br/><br/>

    <table className="table table-borderless">
        <thead>
          <tr>
          &nbsp;   &nbsp;  &nbsp;   &nbsp;
          &nbsp;   &nbsp;   
          <th>categoryType</th>       
            <th>name</th>        
            <th>description</th>
          
            <th>price</th>
            &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;  
            &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; 
            &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; 
            &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;   
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; 
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;   
          </tr>
        </thead>
        <tbody>
          {products.map((products) => {
            return (
              <tr>
             &nbsp;   &nbsp;   &nbsp;   &nbsp;
             &nbsp;   &nbsp;  
             <td>{products.categoryType}</td> 
                <td>{products.name}</td>
                <td>{products.description}</td>
            
                <td>{products.price}</td>  
           
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;   
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; 
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;  
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;   
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; 
                &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp;   
            
              </tr>             
            )
          })}
        </tbody>
      </table>  
      <br/>       <br/>    
        <div className="mb-3">
        &nbsp;   &nbsp;    &nbsp;   &nbsp;
        <label style={{fontWeight: "bold"}}>Total price  &nbsp; =  &nbsp;  &nbsp;</label>
        <label >{amount}</label>
      </div>
    
  
      <div className="Screen"> 
      &nbsp;   &nbsp;    &nbsp;   &nbsp;
            <label  style={{fontWeight: "bold"}}  >Payment Type &nbsp; :  &nbsp; &nbsp; </label> 
                { 
                    <select  className="nextBtn" onChange={e => { onSelectPayment(e.target.value)} }>
                        <option disabled selected >Select PaymentType   </option>
                                    <option>COD</option>
                                    <option>CARD</option>
                                    
                    </select> 
                }
            </div>      
            <br/>       <br/>    
      <div className="mb-3 text-center">
        <button onClick={addToPayment} className="btn btn-success">
          Add
        </button>
                &nbsp;  
        <button onClick={Cancel} className="btn btn-warning">
          cancel
        </button>
        &nbsp;  
        <button onClick={Back} className="btn btn-warning">
            Back 
          </button> 
        </div> 
          </div>
    )
}
export default Payment