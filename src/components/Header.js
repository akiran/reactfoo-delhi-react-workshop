import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Badge } from "reactstrap";
import logo from "../logo.svg";
import { CartItemsContext } from "../context";

export default class Header extends React.Component {
  render() {
    return (
      <CartItemsContext.Consumer>
        {({ cartItems }) => (
          <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="#" onClick={() => this.props.setRoute("")}>
                <img style={{ height: "48px" }} src={logo} alt="logo" /> React
                Store
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink onClick={() => this.props.setRoute("Profile")}>
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => this.props.setRoute("Cart")}>
                    Cart{" "}
                    {cartItems.length ? (
                      <Badge>{cartItems.length}</Badge>
                    ) : null}
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </div>
        )}
      </CartItemsContext.Consumer>
    );
  }
}
