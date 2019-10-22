import React from "react";
import AccountsUIWrapper from "../AccountsUIWrapper/AccountsUIWrapper";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample08"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                EIT MANAGEMENT APP<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item  ml-auto">
              <a className="nav-link" href="#">
                <AccountsUIWrapper />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
