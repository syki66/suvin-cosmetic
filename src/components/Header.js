import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBLink
} from "mdbreact";

import { HashRouter } from "react-router-dom";


class Header extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <HashRouter >
          <div style={{ display: 'flex', justifyContent: 'center', textAlign:"center", backgroundColor: "#9e4f89" }}>
              <MDBNavbar color="" dark expand="md" className="z-depth-0">
                  <MDBNavbarBrand>
                      <MDBNavLink style={{minWidth: 130}} to="/"><strong className="white-text">Suvin Cosmetic</strong></MDBNavLink>
                  </MDBNavbarBrand>

                  <MDBNavbarToggler onClick={this.toggleCollapse} />
                  <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>


                      <MDBNavbarNav center>

                          <MDBNavItem>
                              <MDBNavLink style={{minWidth: 130}} to="Information">Information</MDBNavLink>
                          </MDBNavItem>

                          <MDBNavItem>
                              <MDBNavLink style={{minWidth: 130}} to="Business">Business</MDBNavLink>
                          </MDBNavItem>

                          <MDBNavItem>
                              <MDBNavLink style={{minWidth: 130}} to="Product">Product</MDBNavLink>
                          </MDBNavItem>

                          <MDBNavItem>
                              <MDBNavLink style={{minWidth: 130}} to="Global_Network">Global Network</MDBNavLink>
                          </MDBNavItem>

                          <MDBNavItem>
                              <MDBNavLink style={{minWidth: 130}} to="Inquiry">Inquiry</MDBNavLink>
                          </MDBNavItem>

                          <MDBNavItem>
                              <MDBNavLink style={{minWidth: 130}} to="Customer">Customer</MDBNavLink>
                          </MDBNavItem>

                      </MDBNavbarNav>

                  </MDBCollapse>
              </MDBNavbar>
              </div>
    </HashRouter>


    );
  }
}

export default Header;