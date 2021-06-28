import React, { useState, useEffect} from 'react';
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import {
    CCard,
    CCardBody,
    CForm,
    CInput,
    CInputGroup,
    CSelect
  } from '@coreui/react'

import { CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const UpdateContract = ({match}) => {

let history = useHistory();

const [contractsData, setContractsData] = useState([]);
const [contractStatus, setContractStatus] = useState('');

useEffect(() => {
  // Axios.get("https://ims-backend.herokuapp.com/api/get").then((response) => {
  //   setInventoryData(response.data)
  // })

  Axios.get("http://localhost:3001/api/getcontracts").then((response) => {
    response.data[0].contract_date = response.data[0].contract_date.toString().split('T')[0]
    setContractsData(response.data)
  })

}, [])

const item = contractsData.find( item => item.contract_id.toString() === match.params.id)
const itemDetails = item ? item : 
  [['id', (<span><CIcon className="text-muted" /> Not found</span>)]];

  const ContractData = {
    ContractID: itemDetails.contract_id,
    Contracter: itemDetails.contracter,
    ContractDescription: itemDetails.contract_description,
    ContractStatus: itemDetails.contract_status
  }

const handleContracterChange = (e) => {
    ContractData.Contracter = e.target.value
}

const handleStatusChange = (e) => {
    itemDetails.contract_status = e.target.value
    setContractStatus(e.target.value)
    console.log(contractStatus)
    ContractData.ContractStatus = contractStatus
    console.log(ContractData.ContractStatus)
}

const handleDescChange = (e) => {
    ContractData.ContractDescription = e.target.value
}

const handleUpdate = () => {
    // Axios.put("https://ims-backend.herokuapp.com/api/update", ItemData)
    // history.push(`/inventorydata/${item.item_id}`)

    Axios.put("http://localhost:3001/api/updatecontract", ContractData)
    history.push(`/contracts/${item.contract_id}`)
  }

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Contract ID: {itemDetails.contract_id}
          </CCardHeader>
          <CCardBody>
          <CForm onSubmit={handleUpdate}>
                  <h1>Update Contract Details</h1>

                  <CInputGroup className="mb-3">
                    <CInput type="text" defaultValue={itemDetails.contracter} name="contracter"  autoComplete="contracter" onChange={handleContracterChange}/>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInput type="text" defaultValue={itemDetails.contract_description} name="description" onChange={handleDescChange}/>
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                      <CSelect value={itemDetails.contract_status} onChange={handleStatusChange}>
                          <option value="Completed">Completed</option>
                          <option value="Pending">Pending</option>
                          <option value="Shipping">Shipping</option>
                      </CSelect>
                    {/* <CInput type="text" defaultValue={itemDetails.contract_status} name="contractStatus"  autoComplete="ContractStatus" onChange={handleStatusChange}/> */}
                  </CInputGroup>
                  <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-ghost-success" >Save Changes</button>
                  </div>
                </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UpdateContract;