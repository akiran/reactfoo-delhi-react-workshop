import React from "react";
import { Button, Form, Col, FormGroup, Label, Input } from "reactstrap";
import { UserContext } from "../context";

export default class Profile extends React.Component {
  getChangeHandler = e => {
    this.props.setUser({
      ...this.props.user,
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
  };
  render() {
    return (
      <UserContext.Consumer>
        {({ user, setUser }) => {
          const changeHandler = e =>
            setUser({
              ...user,
              [e.target.name]: e.target.value
            });
          return (
            <div>
              <h1>Profile</h1>
              <Form onSubmit={this.submitHandler}>
                <FormGroup row>
                  <Label for="firstName" sm={4}>
                    First name:
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First name"
                      value={user.firstName}
                      onChange={changeHandler}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="lastName" sm={4}>
                    Last name:
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="last name"
                      value={user.lastName}
                      onChange={changeHandler}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="email" sm={4}>
                    E-mail:
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="last name"
                      value={user.email}
                      onChange={changeHandler}
                    />
                  </Col>
                </FormGroup>
                <Button type="submit">Submit</Button>
              </Form>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
