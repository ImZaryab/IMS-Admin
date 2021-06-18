import React from 'react';
import PropTypes from 'prop-types';
import { CWidgetBrand, CRow, CCol } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import ChartLineSimple from '../charts/ChartLineSimple';

const WidgetsBrand = ({withCharts})=>{

  // render

  return withCharts ?
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="facebook"
        rightHeader="620"
        rightFooter="Call-ins"
        leftHeader="519"
        leftFooter="Closed Contracts"
      >
        <CIcon
          name=""
          height="52"
          className="my-4"
        />
        <ChartLineSimple
          className="position-absolute w-100 h-100"
          backgroundColor="rgba(255,255,255,.1)"
          dataPoints={[65, 59, 84, 84, 51, 55, 40]}
          label="Closed Contracts"
          labels="weeks"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="twitter"
        rightHeader="2300"
        rightFooter="Item Shippings"
        leftHeader="1950"
        leftFooter="Items Stocked"
      >
        <CIcon
          name=""
          height="52"
          className="my-4"
        />
        <ChartLineSimple
          className="position-absolute w-100 h-100"
          backgroundColor="rgba(255,255,255,.1)"
          dataPoints={[1, 13, 9, 17, 34, 41, 38]}
          label="Stocked-in"
          labels="weeks"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="linkedin"
        rightHeader="2500"
        rightFooter="In-stock"
        leftHeader="2000"
        leftFooter="Utilized"
      >
        <CIcon
          name=""
          height="52"
          className="my-4"
        />
        <ChartLineSimple
          className="position-absolute w-100 h-100"
          backgroundColor="rgba(255,255,255,.1)"
          dataPoints={[78, 81, 80, 45, 34, 12, 40]}
          label="Contracted"
          labels="weeks"
        />
      </CWidgetBrand>
    </CCol> 

    <CCol sm="6" lg="3">
      <CWidgetBrand
        rightHeader="12"
        rightFooter="events"
        leftHeader="4"
        leftFooter="meetings"
        color="gradient-warning"
      >
        <CIcon
          name=""
          height="52"
          className="my-4"
        />
        <ChartLineSimple
          className="position-absolute w-100 h-100"
          backgroundColor="rgba(255,255,255,.1)"
          dataPoints={[35, 23, 56, 22, 97, 23, 64]}
          label="Potential Attendees"
          labels="weeks"
        />
      </CWidgetBrand>
    </CCol>
  </CRow> :
  
  <CRow>
    <CCol sm="6" lg="3">
    <CWidgetBrand
        color="facebook"
        rightHeader="620"
        rightFooter="Call-ins"
        leftHeader="519"
        leftFooter="Closed Contracts"
      >
        <CIcon
          name=""
          height="52"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
    <CWidgetBrand
        color="twitter"
        rightHeader="2300"
        rightFooter="Item Shippings"
        leftHeader="1950"
        leftFooter="Items Stocked"
      >
        <CIcon
          name=""
          height="52"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
    <CWidgetBrand
        color="linkedin"
        rightHeader="2500"
        rightFooter="In-stock"
        leftHeader="2000"
        leftFooter="Utilized"
      >
        <CIcon
          name=""
          height="52"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
    <CWidgetBrand
        rightHeader="12"
        rightFooter="events"
        leftHeader="4"
        leftFooter="meetings"
        color="gradient-warning"
      >
        <CIcon
          name=""
          height="52"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>
  </CRow>
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool
}

export default WidgetsBrand
