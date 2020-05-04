import React from "react";
import { connect } from "react-redux";
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
        var conf = confirm("Do you really want clear all your Favourites?");
        if (conf) {
            this.props.dispatch(favouriteActions.clearFavourite(0));
        }
    }

    render() {
        //-------------Anime---------------
        const anim = {
            animationName: "fadein",
            animationDuration: "1s",
        };
        //---------------------------------

        const { beers, favourite } = this.props;
        const favList = [...beers].filter(function(item) {
            return favourite.includes("beer" + item.id);
        });

        const showFav =
            favList.length != 0 ? (
                <Beer auctioned={favList} />
            ) : (
                <div className="noFav" style={anim}>
                    No beer to show as favourite
                </div>
            );

        return (
            <div className="page">
                <Header />
                <div className="favouriteTitle">
                    <h1>Your Favourites</h1>
                    <p onClick={this.clearFavoutite}>Clear Favourites</p>
                </div>
                {showFav}
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
