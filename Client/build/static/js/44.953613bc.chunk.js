(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[44],{756:function(t,e,c){"use strict";c.r(e);var n=c(31),a=c(0),r=c(661),s=c(663),i=c(667),o=c.n(i),d=c(23),j=c(2);e.default=function(t){var e=t.match,c=Object(d.g)(),i=Object(a.useState)([]),l=Object(n.a)(i,2),b=l[0],u=l[1];Object(a.useEffect)((function(){o.a.get("http://localhost:3001/api/getcontracts").then((function(t){t.data[0].contract_date=t.data[0].contract_date.toString().split("T")[0],u(t.data)}))}));var h=b.find((function(t){return t.contract_id.toString()===e.params.id})),O=h?Object.entries(h):[["id",Object(j.jsxs)("span",{children:[Object(j.jsx)(s.a,{className:"text-muted"})," Not found"]})]];return Object(j.jsx)(r.wb,{children:Object(j.jsx)(r.u,{lg:6,children:Object(j.jsxs)(r.j,{children:[Object(j.jsxs)(r.n,{children:["Contract ID: ",e.params.id]}),Object(j.jsxs)(r.k,{children:[Object(j.jsx)("table",{className:"table table-striped table-hover",children:Object(j.jsx)("tbody",{children:O.map((function(t,e){var c=Object(n.a)(t,2),a=c[0],r=c[1];return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"".concat(a,":")}),Object(j.jsx)("td",{children:Object(j.jsx)("strong",{children:r})})]},e.toString())}))})}),Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-ghost-success",onClick:function(){h&&c.push("/contracts/".concat(h.contract_id,"/").concat(h.contract_id))},children:"Update"}),Object(j.jsx)("button",{type:"button",className:"btn btn-ghost-danger",onClick:function(){return t=h.item_id.toString(),o.a.delete("http://localhost:3001/api/delete/".concat(t)),void c.goBack();var t},children:"Delete"})]})]})]})})})}}}]);
//# sourceMappingURL=44.953613bc.chunk.js.map