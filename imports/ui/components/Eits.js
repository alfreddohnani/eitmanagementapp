import React from "react";
import Eit from "./Eit/Eit.component";
import { CardDeck } from "react-bootstrap";

class Eits extends React.Component {
  render() {
    return (
      <div className="row">
        <CardDeck>
          {this.props.eits.map(eit => (
            <div key={eit._id} className="col-md-6 my-2">
              <Eit eit={eit} {...this.props}  />
            </div>
          ))}
        </CardDeck>
      </div>
    );
  }
}

export default Eits;
