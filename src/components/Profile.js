import React from "react";
import { Button, Form, Col, FormGroup, Label, Input } from "reactstrap";

export default class Profile extends React.Component {
  changeHandler = e => {
    this.props.setUser({
      ...this.props.user,
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
  };
  render() {
    const { user } = this.props;
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
                onChange={this.changeHandler}
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
                onChange={this.changeHandler}
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
                onChange={this.changeHandler}
              />
            </Col>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
