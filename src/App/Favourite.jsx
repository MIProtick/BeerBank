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
        const { beers, favourite } = this.props;

        const favList = [...beers].filter(function(item) {
            return favourite.includes("beer" + item.id);
        });

        // const favList = [...beers].map((item) => {
        //     if (favourite.includes("beer" + item.id)) {
        //         return item;
        //     }
        // });
        console.log("favList");
        console.log(favList);

        return (
            <div className="page">
                <Header />
                <h1>Favourite</h1>
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
