import Cookies from 'universal-cookie';
import axios from 'axios'
import { useState, useEffect} from 'react';
import {url} from '../../common/constants'
import { SettingsSystemDaydream } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';


const UpdateProduct =()=>{

  const [products, setProducts] = useState([])
    const cookies = new Cookies();
    const id4=cookies.get('id4')
    const name4 = cookies.get('name4')
    const image4 = cookies.get('image4')
    const price4 = cookies.get('price4')
    const categoryType4 = cookies.get('categoryType4')
    const status4 = cookies.get('status4')
    const description4 = cookies.get('descrption4')
        
    
    
    const history = useHistory()
    
 //   const [id,setId] = useState('')

    const [name,setName]=useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [status, setStatus] = useState('')
    const [categoryType, setCategoryType] =useState('')    
    const onSelectCategory = (categoryName) => {
    setCategoryType(categoryName)
    
    }
  
    const onSelectStatus = (statusName) => {
      setStatus(statusName)
    
    }


  
    useEffect(() => {
        console.log(`Customers component got loaded`)
        getProducts()
    
      }, [])
    


        const getProducts = () => {
          axios.get(url+'/product/product-list').then((response) => {
            
              setProducts(response.data)
         
          })
        }
        

        
 

            


    
  const back = () =>{
      history.push('/show-products')
  }

    const addAlbumToDB = () => {
    if (name.length === 0) {
            alert('enter name')
          }  
     else if (description.length === 0) {
        alert('enter description')
      } else if (price.length === 0) {
        alert('enter price')
      } else if (status.length===0) {
        alert('Enter status')
      } 
      else if (categoryType.length===0) {
          alert('Enter categoryType')}    
      else {
    
         axios.put(url+'/product/update-product/'+id4, {
         
         "id":id4,   
         "name":name,
         "description":description,
          "price":price,
          "status":status,
          "categoryType":categoryType,
          "image":image4
          
         
      
        })
      
        alert("Product updated successfully")
        getProducts();
        history.push('show-products')
      }
    }
  
  
    return(
      <div>
      <h1 className="page-title"></h1>
      <div className="row">
        <div className="col">
                </div>
        <div className="col-10">
          
          
         <div className="mb-3">
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value)
              }}
              type="text"
              placeholder={name}
             // value={name4}
              className="form-control"
            />
          </div> 

          
          <div className="mb-3">
            <label htmlFor="">Description</label>
            <input
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              type="text"
              
              className="form-control"
            />
          </div>
      
          <div className="mb-3">
            <label htmlFor="">Price</label>
            <input
              onChange={(e) => {
                setPrice(e.target.value)
              }}
              type="text"
              placeholder={price}
              //value={price4}
              className="form-control"
            />
          </div>
        
          
<div className="Screen"> 
               CategoryType : 
                {
                    <select className="nextBtn"  onChange={e => { onSelectCategory(e.target.value)} }>
                        <option disabled selected>Select Category</option>
                                    <option>BREAKFAST</option>
                                    <option>THALIS</option>
                                    <option>STARTERS</option>
                                    <option>MAINCOURSE</option>
                                    <option>DESERTS</option>
                    </select> 
                }
            {/* </div> */}
            </div>      

      <br/>
 <div className="Screen"> 
            {/* <div className="mb-3 text-center"> */}
                Status : 
                {
                    <select className="nextBtn"  onChange={e => { onSelectStatus(e.target.value)} }>
                        <option disabled selected>Select Status</option>
                                    <option>ACTIVE</option>
                                    <option>INACTIVE</option>
                    </select> 
                }
            {/* </div> */}
            </div>      

    

  
  <div>
  </div>
  
            <div className="mb-3 text-center">
              <button onClick={addAlbumToDB} className="btn btn-success">
                Update
              </button>
              <button onClick={back} className="btn btn-warning">
                Back
              </button>
  
            </div>
          </div>
        </div>
      </div>
  
  
    )
  }
export default UpdateProduct