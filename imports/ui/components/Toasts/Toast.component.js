import React from "react";
import { Row, Col, Button, Toast } from "react-bootstrap";

class ToastNotification extends React.Component {
  state = {
    show: true
  };

  hideToast = () => {
    this.setState({ show: false });
  };
  render() {
    return (
        <div className=""
          style={{
            position: "absolute",
            top: 0,
            right: 0
          }}
        >
          <Toast className="m-3 bg-success" show={this.state.show} onClose={this.hideToast}>
            <Toast.Header>
              <strong className="mr-auto">Success</strong>
            </Toast.Header>
            <Toast.Body>Eit added successfully</Toast.Body>
          </Toast>
        </div>
    );
  }
}

export default ToastNotification;
