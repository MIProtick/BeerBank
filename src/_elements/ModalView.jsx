import React, { Component } from "react";
import { connect } from "react-redux";
import { MdGrade } from "react-icons/md";
import { favouriteActions } from "./../_factory";

class ModalView extends Component {
    constructor(props) {
        super(props);

        this.handleFavourite = this.handleFavourite.bind(this);
    }

    //--------------Handling Favourite in Modal------------//
    handleFavourite(e) {
        // console.log(e.target.id, e.target.parentNode.id);
        if (e.target.parentNode.id.startsWith("beer")) {
            if (this.props.favourite.includes(e.target.parentNode.id)) {
                this.props.dispatch(
                    favouriteActions.removeFavourite(e.target.parentNode.id)
                );
            } else {
                this.props.dispatch(
                    favouriteActions.addFavourite(e.target.parentNode.id)
                );
            }
        }
    }

    //----------------------------------------------------------------//

    render() {
        //--------Fetching MOdel------//
        let beer = {};
        if (this.props.id) {
            let id = this.props.id;
            [beer] = this.props.beers.filter(function(item) {
                return item.id == id;
            });
        } else {
            beer = { ...this.props.beers[1] };
        }

        //----------YouMayLike-----------//
        const youMayLike = [...this.props.beers]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        //--------bestServedWith---------//
        const { food_pairing } = beer;
        let bestServedWith = [];
        if (food_pairing) {
            bestServedWith = food_pairing.map((item, indx) => {
                return item && <li key={"list" + indx}>{item}</li>;
            });
        }

        //---------Handle favourite--------//
        let favIcon = null;
        if (this.props.id) {
            favIcon = this.props.favourite.includes("beer" + this.props.id) ? (
                <MdGrade
                    className="fvIconMod fvSelected"
                    id={"beer" + this.props.id}
                    onClick={this.handleFavourite}
                />
            ) : (
                <MdGrade
                    className="fvIconMod"
                    id={"beer" + this.props.id}
                    onClick={this.handleFavourite}
                />
            );
        } else {
            favIcon = (
                <MdGrade
                    className="fvIconMod"
                    id={"beer" + this.props.id}
                    onClick={this.handleFavourite}
                />
            );
        }

        return (
            <div id="modelWindow">
                <div id="modalDescription">
                    <div id="modalDescription__image">
                        <img src={beer.image_url} alt={beer.name} />
                    </div>
                    <div id="modalDescription__doc">
                        <div id="modalDescription__title">
                            {beer.name} {favIcon}
                        </div>
                        <div id="modalDescription__tag">
                            <p>{beer.tagline}</p>
                        </div>
                        <hr />
                        <div id="modalDescription__rates">
                            <h6>IBU: </h6> <p>{beer.ibu}</p>
                            <h6>ABV: </h6> <p>{beer.abv + "%"}</p>
                            <h6>EBC: </h6> <p>{beer.ebc}</p>
                        </div>
                        <div id="modalDescription__details">
                            {beer.description}
                        </div>
                        <div id="modalDescription__bestServedWith">
                            <h6>Best Served With</h6>
                            <ul>{bestServedWith}</ul>
                        </div>
                    </div>
                </div>
                <div id="sugestion">
                    <h6>You May Also Like</h6>
                    <div id="sugestion__container">
                        <div className="sugestionContent">
                            <img
                                src={youMayLike[0].image_url}
                                alt={youMayLike[0].name}
                            />
                            <div>{youMayLike[0].name}</div>
                        </div>
                        <div className="sugestionContent">
                            <img
                                src={youMayLike[1].image_url}
                                alt={youMayLike[1].name}
                            />
                            <div>{youMayLike[1].name}</div>
                        </div>
                        <div className="sugestionContent">
                            <img
                                src={youMayLike[2].image_url}
                                alt={youMayLike[2].name}
                            />
                            <div>{youMayLike[2].name}</div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(ModalView);
