import React from "react";
import { Card, Button, Col, Alert } from "react-bootstrap";
import { EitCollection } from "../../../api/eits";
import ReactDOM from "react-dom";
import { timingSafeEqual } from "crypto";

class Eit extends React.Component {
  state = {
    showAlert: false
  };
  toggleCheck = () => {
    const id = this.props.eit._id;
    const checked = !this.props.eit.checked;

    Meteor.call("eits.setChecked", id, !this.props.eit.checked);
  };

  deleteEit = () => {
    console.log('---logging owner', this.props.eit.owner);
    console.log('-----logging currentUser', this.props.currentUser._id);
    if (this.props.eit.owner !== this.props.currentUser._id) {
      this.setState({ showAlert: true });
      return;
      // throw new Meteor.Error("not-authorized");
    }
    Meteor.call("eits.delete", this.props.eit._id);
  };

  editEit = () => {
    if (this.props.eit.owner !== this.props.currentUser._id) {
      this.setState({ showAlert: true });
      return;
      // throw new Meteor.Error("not-authorized");
    }
    this.props.history.push(`/edit/${this.props.eit._id}`);
  };

  render() {
    const { firstname, lastname, bio, checked } = this.props.eit;

    const eitClassName = checked ? "checked" : "";
    return (
      <>
        <div>
          <Alert
            show={this.state.showAlert}
            variant="danger"
            onClose={() => this.setState({ showAlert: false })}
            dismissible
          >
            <Alert.Heading>Error</Alert.Heading>
            <p>You are not authorized to perform this action.</p>
          </Alert>
        </div>

        <Card>
          <Card.Body>
            <Card.Title>{`${firstname} ${lastname}`}</Card.Title>
            <Card.Text>{bio}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <Button className="btn-sm mx-2" variant="primary">
            View
          </Button> */}
            <small>
              Added by:
              <i>
                {this.props.eit.username ? this.props.eit.username : ""}{" "}
              </i>
            </small>
            {this.props.currentUser ? (
              <div>
                <Button
                  onClick={this.deleteEit}
                  className="btn-sm mx-2"
                  variant="danger"
                >
                  Delete
                </Button>
                <Button
                  onClick={this.editEit}
                  className="btn-sm mx-2"
                  variant="info"
                >
                  Edit
                </Button>
                <input
                  type="checkbox"
                  ref="checkInput"
                  checked={checked}
                  onChange={this.toggleCheck}
                />
              </div>
            ) : (
              ""
            )}
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default Eit;
