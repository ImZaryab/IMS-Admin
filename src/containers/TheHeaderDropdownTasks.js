import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  // CProgress
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdownTasks = () => {
  const itemsCount = 5
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-list" />
        <CBadge shape="pill" color="warning">{itemsCount}</CBadge>
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>You have {itemsCount} pending tasks</strong>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="md mb-1">Add new customer</div>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="md mb-1">Add Item</div>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="md mb-1">Delete Supplier xyz</div>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="md mb-1">Approve Pay Order</div>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="md mb-1">Do something</div>
        </CDropdownItem>
        <CDropdownItem className="text-center border-top"><strong>View all tasks</strong></CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownTasks