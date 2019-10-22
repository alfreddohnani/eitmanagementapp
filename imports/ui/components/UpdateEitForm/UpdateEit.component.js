import React from "react";
import { Form, Button } from "react-bootstrap";
import { EitCollection } from "../../../api/eits";
import { withTracker } from "meteor/react-meteor-data";
import ReactDOM from 'react-dom';
 
class UpdateEitForm extends React.Component {
  handleSubmit = event => {
    const firstname = ReactDOM.findDOMNode(this.refs.firstname).value.trim();
    const lastname = ReactDOM.findDOMNode(this.refs.lastname).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    const bio = ReactDOM.findDOMNode(this.refs.bio).value.trim();

    Meteor.call("eits.update", this.props.eit._id, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      bio: bio
    });
  };
  render() {
    const eit = this.props.eit;
    return (
      <>
        <div className="container p-1">
          <h3 className="text-center">Update EIT</h3>
          <Form className="col-md-6 mx-auto">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                ref="firstname"
                type="text"
                placeholder=""
                defaultValue={eit ? eit.firstname : ""}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                ref="lastname"
                type="text"
                placeholder=""
                defaultValue={eit ? eit.lastname : ""}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref="email"
                type="email"
                placeholder=""
                defaultValue={eit ? eit.email : ""}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                ref="bio"
                type="text"
                placeholder=""
                defaultValue={eit ? eit.bio : ""}
              />
            </Form.Group>
            <Button onClick={this.handleSubmit} variant="primary">
              Update
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default withTracker(props => {
  const id = props.match.params.id;

  return {
    eit: EitCollection.findOne(id)
  };
})(UpdateEitForm);
