import React from 'react';

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
    return(
        <div>

<CCard className="mx-5">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Add Item To Inventory</h1>

                  <CInputGroup className="mb-3">
                    <CInput type="text" placeholder="Item Name" autoComplete="itemname" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInput type="text" placeholder="Item ID" autoComplete="itemid" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInput type="number" placeholder="Quantity" min="1"/>
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInput type="text" placeholder="Item Description" autoComplete="itemdesc"/>
                  </CInputGroup>

                  <CButton type="submit" color="success" block>Add Item</CButton>
                </CForm>
              </CCardBody>
            </CCard>

        </div>
    )   
}

export default AddItem;