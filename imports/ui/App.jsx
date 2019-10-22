import React from "react";
import Eits from "./components/Eits";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { EitCollection } from "../api/eits";

import { withTracker } from "meteor/react-meteor-data";

import NavBar from "./components/NavBar/NavBar.component";

class App extends React.Component {
  // constructor(){
  //   super();

  //   state = {
  //     eits: this.props.eits
  //   }
  // }


  render() {
    return (
      <>
        <NavBar {...this.props} />
        <div className="container p-5 m-5 mx-auto">
          
          <Eits {...this.props} />
        </div>
      </>
    );
  }
}

export default withTracker(() => {
  return {
    eits: EitCollection.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user()
  };
})(App);
