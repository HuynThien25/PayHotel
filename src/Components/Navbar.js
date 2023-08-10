import React from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";

export default function App() {
  return (
    <>
      <MDBNavbar sticky light bgColor="light" expand="lg"> 
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">ClementHotel</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
