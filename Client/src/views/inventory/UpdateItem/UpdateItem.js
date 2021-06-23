import React, { useState, useEffect, useRef} from 'react';
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import {
    CButton,
    CCard,
    CCardBody,
    CForm,
    CInput,
    CInputGroup
  } from '@coreui/react'

import { CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const UpdateItem = ({match}) => {

let history = useHistory();

const [inventoryData, setInventoryData] = useState([])
const [itemName, setItemName] = useState("");
const [itemQuantity, setItemQuantity] = useState(0);
const [itemDesc, setItemDesc] = useState("");

useEffect(() => {
  Axios.get("http://localhost:3001/api/get").then((response) => {
    setInventoryData(response.data)
  })
}, [])

const item = inventoryData.find( item => item.item_id.toString() === match.params.id)
const itemDetails = item ? item : 
  [['id', (<span><CIcon className="text-muted" /> Not found</span>)]];

  const ItemData = {
    ItemName: itemDetails.item_name, 
    ItemQuantity: itemDetails.item_quantity, 
    ItemDescription: itemDetails.item_description,
    ItemID: itemDetails.item_id
  }

const handleItemNameChange = (e) => {
    ItemData.ItemName = e.target.value
}

const handleItemQuantityChange = (e) => {
    ItemData.ItemQuantity = e.target.value
}

const handleItemDescChange = (e) => {
    ItemData.ItemDescription = e.target.value
}

const handleUpdate = () => {
    Axios.put("http://localhost:3001/api/update", ItemData)
    history.push(`/inventorydata/${item.item_id}`)
  }

  console.log(ItemData)

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Product ID: {itemDetails.item_id}
          </CCardHeader>
          <CCardBody>
          <CForm onSubmit={handleUpdate}>
                  <h1>Update Item Details</h1>

                  <CInputGroup className="mb-3">
                    <CInput type="text" defaultValue={itemDetails.item_name} name="itemName"  autoComplete="itemname" onChange={handleItemNameChange}/>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInput type="number" defaultValue={itemDetails.item_quantity} name="itemQuantity"  min="1" onChange={handleItemQuantityChange}/>
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInput type="text" defaultValue={itemDetails.item_description} name="itemDescription"  autoComplete="itemdesc" onChange={handleItemDescChange}/>
                  </CInputGroup>
                  <div className="d-flex justify-content-center">
                  <button type="submit" class="btn btn-ghost-success" >Save Changes</button>
                  </div>
                </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UpdateItem;