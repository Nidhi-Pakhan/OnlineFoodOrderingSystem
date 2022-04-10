import React from 'react';
import axios  from "axios"
import { useState } from "react"
import {  useHistory } from 'react-router-dom'
import {url } from '../../common/constants'

const AddProducts = () =>{
  const history = useHistory()
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


  const Back = () =>{
    history.push('/show-products')
} 



  const addAlbumToDB = () => {
    if (name.length === 0) {
      alert('enter name')
    } else if (description.length === 0) {
      alert('enter description')
    } else if (price.length===0) {
      alert('Enter Price')
    }  else if (categoryType.length===0) {
        alert('Enter Category')}
   
    else {
      //  const data = new FormData()
      //  data.append('name', name)
      //  data.append('description', description)
      //  data.append('price', price)
      //  data.append('status',status)
      //  data.append('categoryType', categoryType)
      
    //  console.log(data.name)
       
    

    //   send the song info to the API
    axios.post(url + '/product/add-product',{
      "name":name,
      "description":description,
      "price":price,
      "status":status,
      "categoryType":categoryType
    }).then((response) => {
      const result = response.data
     
        alert('successfully added Product')

        // go to the list of artists
        history.push('/show-products')
     
      
      
    })

    


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
            className="form-control"
          />
        </div>
       

<div className="Screen"> 
       
               CategoryType : 
                {
                    <select className="nextBtn" onChange={e => { onSelectCategory(e.target.value)} }>
                        <option disabled selected>Select Category</option>
                                    <option>BREAKFAST</option>
                                    <option>THALIS</option>
                                    <option>STARTERS</option>
                                    <option>MAINCOURSE</option>
                                    <option>DESERTS</option>
                    </select> 
                }
            </div> 

          <br/>
 <div className="Screen"> 
                Status : 
                {
                    <select className="nextBtn" onChange={e => { onSelectStatus(e.target.value)} }>
                        <option disabled selected>Select Status</option>
                                    <option>AVAILABLE</option>
                                    <option>UNAVAILABLE</option>
                    </select> 
                }       
            </div>

     
          <div className="mb-3">
          <div className="mb-3 text-center">
            <button onClick={addAlbumToDB} className="btn btn-success">
              Add
            </button>
            <button onClick={Back} className="btn btn-warning">
              Back
            </button>
            </div>  
          </div>
        </div>
       </div>
     </div>
  )
} 
export default AddProducts