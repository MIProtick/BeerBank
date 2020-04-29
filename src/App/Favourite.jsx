import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Router, Route, Switch, NavLink } from "react-router-dom";
import { Beer, Header } from "./../_elements";
import { favouriteActions } from "./../_factory";

class Favourite extends React.Component {
    constructor(props) {
        super(props);

        document.title = "Favourite | The Beer Bank";

        this.state = {
            beers: [],
        };

        this.clearFavoutite = this.clearFavoutite.bind(this);
    }

    clearFavoutite(e) {
        console.log(e.target.value);
        this.props.dispatch(favouriteActions.clearFavourite(0));
    }

    render() {
        const { beers, favourite } = this.props;

        const favList = [...beers].filter(function(item) {
            return favourite.includes("beer" + item.id);
        });

        return (
            <div className="page">
                <Header />
                <div className="favouriteTitle">
                    <h1>Your Favourites</h1>
                    <p onClick={this.clearFavoutite}>Clear Favourites</p>
                </div>
                <Beer auctioned={favList} />
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

const connectedFavourite = connect(mapStateToProps)(Favourite);
export { connectedFavourite as Favourite };
