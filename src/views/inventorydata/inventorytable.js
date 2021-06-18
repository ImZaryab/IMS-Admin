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


import InventoryDataFill from './inventoryDataFill'

const getBadge = status => {
  switch (status) {
    case 'Available': return 'success'
    case 'InShipping': return 'secondary'
    case 'LowStock': return 'warning'
    case 'Unavailable': return 'danger'
    default: return 'primary'
  }
}

const Inventorytable = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/all-inventory?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Current Inventory
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={InventoryDataFill}
            fields={[
              { key: 'name', _classes: 'font-weight-bold' },
              'quantity', 'supplier', 'description', 'status'
            ]}
            hover
            striped
            itemsPerPage={8}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/inventorydata/${item.id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
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
