import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { MdGrade } from "react-icons/md";
import Card from "react-bootstrap/Card";

class Beer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const beers = [...this.props.details];

        const beerList = beers.map((beer) => {
            return (
                beer && (
                    <Card className="beerCard" key={beer.id}>
                        <Card.Img variant="top" src={beer.image_url} />
                        <div className="fvIcon">
                            <MdGrade className="fvIconMod" />
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

export default Beer;
