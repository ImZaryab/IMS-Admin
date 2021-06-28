import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from "@coreui/react";
import Axios from "axios";

const getBadge = (status) => {
  switch (status) {
    case "Completed":
      return "success";
    case "Shipping":
      return "secondary";
    case "Pending":
      return "warning";
    case "Unavailable":
      return "danger";
    case "null":
      return "danger";
    case "NULL":
      return "danger";
    default:
      return "primary";
  }
};

export default function Contracts() {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [contractsData, setContractsData] = useState([]);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/contracts?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getcontracts").then((response) => {
        response.data[0].contract_date = response.data[0].contract_date.toString().split('T')[0]
        setContractsData(response.data)
    })
  }, []);

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>Current Contracts</CCardHeader>
          <CCardBody>
            <CDataTable
              items={contractsData}
              fields={[
                { key: "contract_id", _classes: "font-weight-bold" },
                "contracter",
                "contract_date",
                "contract_description",
                "contract_status",
              ]}
              hover
              striped
              itemsPerPage={8}
              activePage={page}
              clickableRows
              onRowClick={(item) =>
                history.push(`/contracts/${item.contract_id}`)
              }
              scopedSlots={{
                "contract_status": (item) => (
                  <td>
                    <CBadge color={getBadge(item.contract_status)}>
                      {item.contract_status}
                    </CBadge>
                  </td>
                ),
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
  );
}
