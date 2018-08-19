import React from "react";
import Logo from "./Logo";
import Title from "./Title";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Header extends React.Component {
  render() {
    return (
      <Navbar color="dark" dark={true} expand="md">
        <NavbarBrand href="#">
          <Logo />
          <Title />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Cart</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
