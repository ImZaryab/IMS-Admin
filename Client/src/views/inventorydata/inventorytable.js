import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'
import Axios from 'axios'

const getBadge = status => {
  switch (status) {
    case 'Available': return 'success'
    case 'InShipping': return 'secondary'
    case 'LowStock': return 'warning'
    case 'Unavailable': return 'danger'
    case 'null': return 'danger'
    case 'NULL': return 'danger'
    default: return 'primary'
  }
}

const Inventorytable = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [inventoryData, setInventoryData] = useState([])

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/all-inventory?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  useEffect(() => {
    // Axios.get("https://ims-backend.herokuapp.com/api/get").then((response) => {
    //   setInventoryData(response.data)
    // })

    Axios.get("http://localhost:3001/api/get").then((response) => {
      setInventoryData(response.data)
    })

  }, [])

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Current Inventory
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={inventoryData}
            fields={[
              { key: 'item_name', _classes: 'font-weight-bold' },
              'item_quantity', 'item_supplier', 'item_description', 'item_status'
            ]}
            hover
            striped
            itemsPerPage={8}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/inventorydata/${item.item_id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.item_status)}>
                      {item.item_status}
                    </CBadge>
                  </td>
                )
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={1}
            doubleArrows={false} 
            align="center"
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Inventorytable
