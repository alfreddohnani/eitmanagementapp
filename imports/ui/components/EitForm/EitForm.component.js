import React from "react";
import { Form, Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import { EitCollection } from "../../../api/eits";

import ToastNotification from "../Toasts/Toast.component";

export default class EitForm extends React.Component {
  handleSubmit = event => {
    const firstname = ReactDOM.findDOMNode(this.refs.firstname).value.trim();
    const lastname = ReactDOM.findDOMNode(this.refs.lastname).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    const bio = ReactDOM.findDOMNode(this.refs.bio).value.trim();

    EitCollection.insert({
      firstname,
      lastname,
      email,
      bio,
      createdAt: new Date() // current time
    });

    console.log(firstname);

    // Clear form
    ReactDOM.findDOMNode(this.refs.firstname).value = "";
    ReactDOM.findDOMNode(this.refs.lastname).value = "";
    ReactDOM.findDOMNode(this.refs.email).value = "";
    ReactDOM.findDOMNode(this.refs.bio).value = "";
  };

  render() {
    return (
      <>
        <div className="container p-1">
          <h3 className="text-center">Add New EIT</h3>
          <Form className="col-md-6 mx-auto">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Firstname</Form.Label>
              <Form.Control ref="firstname" type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Lastname</Form.Label>
              <Form.Control ref="lastname" type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Bio</Form.Label>
              <Form.Control ref="bio" type="text" placeholder="" />
            </Form.Group>
            <Button onClick={this.handleSubmit} variant="primary">
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
}
