(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{741:function(e,t,c){"use strict";c.r(t);var n=c(30),a=c(0),s=c(22),i=c(648),r=c(658),u=c.n(r),o=c(2),l=function(e){switch(e){case"Available":return"success";case"InShipping":return"secondary";case"LowStock":return"warning";case"Unavailable":case"null":case"NULL":return"danger";default:return"primary"}};t.default=function(){var e=Object(s.g)(),t=Object(s.h)().search.match(/page=([0-9]+)/,""),c=Number(t&&t[1]?t[1]:1),r=Object(a.useState)(c),b=Object(n.a)(r,2),j=b[0],d=b[1],p=Object(a.useState)([]),h=Object(n.a)(p,2),m=h[0],f=h[1];return Object(a.useEffect)((function(){c!==j&&d(c)}),[c,j]),Object(a.useEffect)((function(){u.a.get("https://ims-backend.herokuapp.com/api/get").then((function(e){f(e.data)}))}),[]),Object(o.jsx)(i.wb,{children:Object(o.jsx)(i.u,{xl:12,children:Object(o.jsxs)(i.j,{children:[Object(o.jsx)(i.n,{children:"Current Inventory"}),Object(o.jsxs)(i.k,{children:[Object(o.jsx)(i.y,{items:m,fields:[{key:"item_name",_classes:"font-weight-bold"},"item_quantity","item_supplier","item_description","item_status"],hover:!0,striped:!0,itemsPerPage:8,activePage:j,clickableRows:!0,onRowClick:function(t){return e.push("/inventorydata/".concat(t.item_id))},scopedSlots:{status:function(e){return Object(o.jsx)("td",{children:Object(o.jsx)(i.b,{color:l(e.item_status),children:e.item_status})})}}}),Object(o.jsx)(i.sb,{activePage:j,onActivePageChange:function(t){c!==t&&e.push("/all-inventory?page=".concat(t))},pages:1,doubleArrows:!1,align:"center"})]})]})})})}}}]);
//# sourceMappingURL=46.060a7d07.chunk.js.map