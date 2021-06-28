import React, {useState, useEffect} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';

const ContractItem = ({match}) => {

  let history = useHistory();

  const [contractsData, setContractsData] = useState([]);

useEffect(() => {
  // Axios.get("https://ims-backend.herokuapp.com/api/get").then((response) => {
  //   setInventoryData(response.data)
  // })

  Axios.get("http://localhost:3001/api/getcontracts").then((response) => {
    response.data[0].contract_date = response.data[0].contract_date.toString().split('T')[0]
    setContractsData(response.data)
  })
})

const handleDelete = (ItemID) => {
  // Axios.delete(`https://ims-backend.herokuapp.com/api/delete/${ItemID}`)

  Axios.delete(`http://localhost:3001/api/delete/${ItemID}`)

  //redirect to previous page
  history.goBack();
}

  const item = contractsData.find( item => item.contract_id.toString() === match.params.id)
  const itemDetails = item ? Object.entries(item) : 
    [['id', (<span><CIcon className="text-muted" /> Not found</span>)]]

  const handleUpdateRoute = () => {
    if(item) history.push(`/contracts/${item.contract_id}/${item.contract_id}`)
  }

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Contract ID: {match.params.id}
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
              <button type="button" className="btn btn-ghost-success" onClick={handleUpdateRoute}>Update</button>
              <button type="button" className="btn btn-ghost-danger" onClick={() => handleDelete(item.item_id.toString())}>Delete</button>
              </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ContractItem