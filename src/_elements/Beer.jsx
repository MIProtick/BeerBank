import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { MdGrade } from "react-icons/md";
import Card from "react-bootstrap/Card";
import { favouriteActions } from "./../_factory";
import { connect } from "react-redux";

class Beer extends React.Component {
    constructor(props) {
        super(props);

        this.handleFavourite = this.handleFavourite.bind(this);
    }

    handleFavourite(e) {
        console.log(e.target.parentNode.id.slice(4));
        this.props.dispatch(
            favouriteActions.addFavourite(e.target.parentNode.id)
        );
    }

    render() {
        const beers = [...this.props.details];

        const beerList = beers.map((beer) => {
            return (
                beer && (
                    <Card className="beerCard" key={beer.id}>
                        <Card.Img variant="top" src={beer.image_url} />
                        <div className="fvIcon">
                            <MdGrade
                                className="fvIconMod"
                                id={"beer" + beer.id}
                                onClick={this.handleFavourite}
                            />
                        </div>
                        <hr />
                        <Card.Body>
                            <Card.Title>{beer.name}</Card.Title>
                            <Card.Text>{beer.tagline}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            );
        });

        return (
            <div className="beer">
                {
                    <CardDeck>
                        <div className="beerDeck">{beerList}</div>
                    </CardDeck>
                }
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

export default connect(mapStateToProps)(Beer);
