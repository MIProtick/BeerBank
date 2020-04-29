import React, { Component } from "react";
import { connect } from "react-redux";
import { MdGrade } from "react-icons/md";

class ModalView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const beer = { ...this.props.beers[1] };
        const { food_pairing } = beer;

        let bestServedWith = [];
        if (food_pairing) {
            bestServedWith = food_pairing.map((item, indx) => {
                return item && <li key={"list" + indx}>{item}</li>;
            });
        }

        return (
            <div id="modelWindow">
                <div id="modalDescription">
                    <div id="modalDescription__image">
                        <img src={beer.image_url} alt={beer.name} />
                    </div>
                    <div id="modalDescription__doc">
                        <div id="modalDescription__title">
                            {beer.name} <MdGrade className="fvIconMod" />
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
                        <div class="sugestionContent">
                            <img src={beer.image_url} alt={beer.name} />
                            <div>{beer.name}</div>
                        </div>
                        <div class="sugestionContent">
                            <img src={beer.image_url} alt={beer.name} />
                            <div>{beer.name}</div>
                        </div>
                        <div class="sugestionContent">
                            <img src={beer.image_url} alt={beer.name} />
                            <div>{beer.name}</div>
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
