import React, {useState, useEffect} from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';

//import InventoryDataFill from './inventoryDataFill'


const Item = ({match}) => {

  let history = useHistory();

  const [inventoryData, setInventoryData] = useState([])

useEffect(() => {
  Axios.get("http://localhost:3001/api/get").then((response) => {
    setInventoryData(response.data)
  })
}, [])

const handleDelete = (ItemID) => {
  Axios.delete(`http://localhost:3001/api/delete/${ItemID}`)

  //redirect to previous page
  history.goBack();
}

  const item = inventoryData.find( item => item.item_id.toString() === match.params.id)
  const itemDetails = item ? Object.entries(item) : 
    [['id', (<span><CIcon className="text-muted" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Product ID: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    itemDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <div className="d-flex justify-content-center">
              <button type="button" class="btn btn-ghost-success">Update</button>
              <button type="button" class="btn btn-ghost-danger" onClick={() => handleDelete(item.item_id.toString())}>Delete</button>
              </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Item