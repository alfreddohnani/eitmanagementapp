import React from "react";
import { Card, Button, Col } from "react-bootstrap";

class Eit extends React.Component {
  eit = this.props.eit;

  render() {
    const { firstname, lastname, bio } = this.eit;
    console.log(this.eit);

    return (
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{`${firstname} ${lastname}`}</Card.Title>
          <Card.Text>{bio}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="btn-sm mx-2" variant="primary">View</Button>
          <Button className="btn-sm mx-2" variant="danger">Delete</Button>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" for="customCheck1">
             
            </label>
          </div>
        </Card.Footer>
      </Card>
    );
  }
}

export default Eit;

{
  /* <Card style={{ width: "18rem" }}>
<Card.Title>{`${firstName} ${lastName}`}</Card.Title>
<Card.Body>
  <Card.Text>{bio}</Card.Text>
  <Button variant="primary">View</Button>
</Card.Body>
</Card> */
}
