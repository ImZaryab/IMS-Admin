(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[47],{739:function(t,e,c){"use strict";c.r(e);var n=c(30),i=c(0),s=c(648),a=c(650),r=c(658),o=c.n(r),d=c(22),j=c(2);e.default=function(t){var e=t.match,c=Object(d.g)(),r=Object(i.useState)([]),b=Object(n.a)(r,2),l=b[0],u=b[1];Object(i.useEffect)((function(){o.a.get("localhost:3001/api/get").then((function(t){u(t.data)}))}));var h=l.find((function(t){return t.item_id.toString()===e.params.id})),O=h?Object.entries(h):[["id",Object(j.jsxs)("span",{children:[Object(j.jsx)(a.a,{className:"text-muted"})," Not found"]})]];return Object(j.jsx)(s.wb,{children:Object(j.jsx)(s.u,{lg:6,children:Object(j.jsxs)(s.j,{children:[Object(j.jsxs)(s.n,{children:["Product ID: ",e.params.id]}),Object(j.jsxs)(s.k,{children:[Object(j.jsx)("table",{className:"table table-striped table-hover",children:Object(j.jsx)("tbody",{children:O.map((function(t,e){var c=Object(n.a)(t,2),i=c[0],s=c[1];return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"".concat(i,":")}),Object(j.jsx)("td",{children:Object(j.jsx)("strong",{children:s})})]},e.toString())}))})}),Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(j.jsx)("button",{type:"button",class:"btn btn-ghost-success",onClick:function(){h&&c.push("/inventorydata/".concat(h.item_id,"/").concat(h.item_id))},children:"Update"}),Object(j.jsx)("button",{type:"button",class:"btn btn-ghost-danger",onClick:function(){return t=h.item_id.toString(),o.a.delete("localhost:3001/api/delete/".concat(t)),void c.goBack();var t},children:"Delete"})]})]})]})})})}}}]);
//# sourceMappingURL=47.c8920327.chunk.js.map