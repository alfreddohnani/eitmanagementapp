import React from "react";
import Eit from "./Eit/Eit.component";
import { CardDeck, Button, Alert } from "react-bootstrap";
import ReactDOM from "react-dom";

class Eits extends React.Component {
  state = {
    showAlert: false
  };
  bulkDelete = (eits, event) => {
    eits.forEach(eit => {
      if (eit.owner !== this.props.currentUser._id) {
        this.setState({ showAlert: true });
        return;
        // throw new Meteor.Error("not-authorized");
      }
      Meteor.call("eits.delete", eit._id);
    });
  };
  render() {
    const checkedEntries = this.props.eits.filter(eit => eit.checked);
    const numberOfCheckedEntries = checkedEntries.length;
    return (
      <>
      <div className="row">
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
      <div className="row">
        {this.props.currentUser && numberOfCheckedEntries >= 1 ? (
          <Button
            onClick={this.bulkDelete.bind(null, checkedEntries)}
            className="ml-auto"
            variant="danger"
          >
            Bulk delete({numberOfCheckedEntries})
          </Button>
        ) : (
          ""
        )}

        <CardDeck>
          {this.props.eits.map(eit => (
            <div key={eit._id} className="col-lg-4 mb-4">
              <Eit eit={eit} {...this.props} />
            </div>
          ))}
        </CardDeck>
      </div>
      </>
    );
  }
}

export default Eits;
