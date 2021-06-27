import React, { useState } from 'react';
import Axios from 'axios'

import {
    CButton,
    CCard,
    CCardBody,
    CForm,
    CInput,
    CInputGroup
  } from '@coreui/react'
  //import CIcon from '@coreui/icons-react'

const AddItem = (props) => {

const [itemName, setItemName] = useState('');
const [itemQuantity, setItemQuantity] = useState(0);
const [itemDesc, setItemDesc] = useState('');


const handleItemNameChange = (e) => {
  setItemName(e.target.value)
}

const handleItemQuantityChange = (e) => {
  setItemQuantity(e.target.value)
}

const handleItemDescChange = (e) => {
  setItemDesc(e.target.value)
}

const handleSubmit = (e) => {
  
  const ItemData = {
    ItemName: itemName, 
    ItemQuantity: itemQuantity, 
    ItemDescription: itemDesc
  }

  // Axios.post("https://ims-backend.herokuapp.com/api/insert", ItemData).then(() => {
  //   alert('Successfully Added Data!')
  // })


  Axios.post("http://localhost:3001/api/insert", ItemData).then(() => {
    alert('Successfully Added Data!')
  })

}


    return(
        <div>

<CCard className="mx-5">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Add Item To Inventory</h1>

                  <CInputGroup className="mb-3">
                    <CInput type="text" name="itemName" placeholder="Item Name" autoComplete="itemname" onChange={handleItemNameChange}/>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInput type="text" placeholder="Item ID" autoComplete="itemid" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInput type="number" name="itemQuantity" placeholder="Quantity" min="1" onChange={handleItemQuantityChange}/>
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInput type="text" name="itemDescription" placeholder="Item Description" autoComplete="itemdesc" onChange={handleItemDescChange}/>
                  </CInputGroup>

                  <CButton type="submit" color="success" block>Add Item</CButton>
                </CForm>
              </CCardBody>
            </CCard>

        </div>
    )   
}

export default AddItem;