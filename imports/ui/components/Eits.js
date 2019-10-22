import React from "react";
import Eit from "./Eit/Eit.component";
import { CardDeck, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

class Eits extends React.Component {
  bulkDelete = (eits, event) => {
    eits.forEach(eit => {
      Meteor.call("eits.delete", eit._id);
    });
  };
  render() {
    const checkedEntries = this.props.eits.filter(eit => eit.checked);
    const numberOfCheckedEntries = checkedEntries.length;
    return (
      <div className="row">
        {numberOfCheckedEntries >= 1 ? (
          <Button onClick={this.bulkDelete.bind(null, checkedEntries)} className="ml-auto" variant="danger">
            Bulk delete({numberOfCheckedEntries})
          </Button>
        ) : (
          ""
        )}
        <CardDeck>
          {this.props.eits.map(eit => (
            <div key={eit._id} className="col-md-4 my-2">
              <Eit eit={eit} {...this.props} />
            </div>
          ))}
        </CardDeck>
      </div>
    );
  }
}

export default Eits;
