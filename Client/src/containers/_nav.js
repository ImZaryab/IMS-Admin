import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem', //specifies whether the element is a parent element having children in dropdown or just a root element
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Inventory System']
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Inventory',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Show Inventory',
        to: '/inventorydata',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Item',
        to: '/AddItem',
      }
    ]
  },
  
]

export default _nav
