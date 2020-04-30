import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let countFav;

        if (this.props.favourite.length > 0) {
            countFav = (
                <span id="countFav__inner">
                    {" "}
                    {this.props.favourite.length}{" "}
                </span>
            );
        } else {
            countFav = <span> </span>;
        }
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper deep-purple darken-4">
                        <NavLink
                            exact={true}
                            to="/"
                            className="brand-logo myLogo"
                        >
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
                                <NavLink
                                    exact={true}
                                    to="/favourite"
                                    id="countFav"
                                >
                                    <span>FAVOURITE</span>
                                    {countFav}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { beers, favourite } = state.beers;
    return {
        beers,
        favourite,
    };
}

export default connect(mapStateToProps)(Header);
