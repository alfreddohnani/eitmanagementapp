import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { EitCollection } from "../../../api/eits";
import ReactDOM from 'react-dom';

class Eit extends React.Component {

  toggleCheck = () => {
    
    EitCollection.update(this.props.eit._id, {
      $set: {
        checked: !this.props.eit.checked
      }
    })
  };

  deleteEit = () => {
    EitCollection.remove(this.props.eit._id);
  };

  editEit = () => {
    this.props.history.push(`/edit/${this.props.eit._id}`);
  };

  

  render() {
   

    const { firstname, lastname, bio, checked } = this.props.eit;

    const eitClassName = checked ? "checked" : "";
    return (
      <Card>
        <Card.Body>
          <Card.Title>{`${firstname} ${lastname}`}</Card.Title>
          <Card.Text>{bio}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="btn-sm mx-2" variant="primary">
            View
          </Button>
          <Button
            onClick={this.deleteEit}
            className="btn-sm mx-2"
            variant="danger"
          >
            Delete
          </Button>
          <Button onClick={this.editEit} className="btn-sm mx-2" variant="info">
            Edit
          </Button>
            <input
              type="checkbox"
              ref="checkInput"
              checked={checked}
              onChange={this.toggleCheck}
            />
        </Card.Footer>
      </Card>
    );
  }
}

export default Eit;
