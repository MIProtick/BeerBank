import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper deep-purple darken-4">
            <NavLink exact={true} to="/" className="brand-logo myLogo">
              <span className="myLogo__up">B</span>
              <span className="myLogo__down">B</span>
            </NavLink>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink exact={true} to="/">
                  HOME
                </NavLink>
              </li>
              <li className="favnav">
                <NavLink exact={true} to="/favourite">
                  FAVOURITE
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
