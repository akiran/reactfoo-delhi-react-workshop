import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import logo from "../logo.svg";
import CartList from "./CartList";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { dropdownOpen: false };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    const { cartItems, products, addCartItem } = this.props;
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img style={{ height: "48px" }} src={logo} alt="logo" /> React Store
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Dropdown
              direction="right"
              nav
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle nav>
                <NavLink>
                  Cart{" "}
                  {cartItems.length ? <Badge>{cartItems.length}</Badge> : null}
                </NavLink>
              </DropdownToggle>
              <CartList
                cartItems={cartItems}
                products={products}
                addCartItem={addCartItem}
              />
            </Dropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
