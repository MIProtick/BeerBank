import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Router, Route, Switch, NavLink } from "react-router-dom";
import { Beer, Header } from "./../_elements";
import { beerActions, beerService } from "./../_factory";

class Favourite extends React.Component {
    constructor(props) {
        super(props);

        document.title = "Favourite | The Beer Bank";

        this.state = {
            beers: [],
        };
    }

    render() {
        const { beers } = this.props;

        return (
            <div className="page">
                <Header />
                <h1>Favourite</h1>
                <Beer details={beers} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { beers } = state.beers;
    return {
        beers,
    };
}

const connectedFavourite = connect(mapStateToProps)(Favourite);
export { connectedFavourite as Favourite };
