import React from "react";
import { Navbar, Nav, NavItem, Badge } from "reactstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link className="navbar-brand" to="/">
            <img style={{ height: "48px" }} src={logo} alt="logo" /> React Store
          </Link>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/cart">
                Cart{" "}
                {cartItems.length ? <Badge>{cartItems.length}</Badge> : null}
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    cartItems: state.cartItems
  };
};
export default connect(mapStateToProps)(Header);
