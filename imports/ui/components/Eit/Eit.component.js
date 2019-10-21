import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { EitCollection } from "../../../api/eits";

class Eit extends React.Component {
  eit = this.props.eit;

  toggleChecked = () => {
    EitCollection.update(this.eit._id, {
      $set: { checked: !this.eit.checked }
    });
  };

  deleteEit = () => {
    EitCollection.remove(this.eit._id);
  }

  render() {
    const { firstname, lastname, bio , checked} = this.eit;

    const eitClassName = checked ? 'checked' : '';
    return (
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{`${firstname} ${lastname}`}</Card.Title>
          <Card.Text>{bio}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="btn-sm mx-2" variant="primary">
            View
          </Button>
          <Button onClick={this.deleteEit} className="btn-sm mx-2" variant="danger">
            Delete
          </Button>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              readOnly
              checked={!!checked}
              onClick={this.toggleChecked}
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" for="customCheck1"></label>
          </div>
        </Card.Footer>
      </Card>
    );
  }
}

export default Eit;
