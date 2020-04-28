import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { MdGrade } from "react-icons/md";
import Card from "react-bootstrap/Card";

class Beer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const beer = this.props.details;

        // const beerList = beer.map(beer => {
        //    return(

        //    )
        // });

        return (
            <div className="beer">
                {beer && (
                    <CardDeck>
                        <div className="beerDeck">
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                            <Card className="beerCard">
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
                        </div>
                    </CardDeck>
                )}
            </div>
        );
    }
}

export default Beer;
