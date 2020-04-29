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
        console.log(e.target);
        if (e.target.parentNode.id != "") {
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

    render() {
        // console.log(this.props);
        const { favourite } = this.props;
        const beers = [...this.props.auctioned];
        const beerList = beers.map((beer) => {
            return favourite.includes("beer" + beer.id)
                ? beer && (
                      <Card className="beerCard fvCard" key={beer.id}>
                          <Card.Img variant="top" src={beer.image_url} />
                          <div className="fvIcon">
                              <MdGrade
                                  className="fvIconMod fvSelected"
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
                : beer && (
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
    const { beers, favourite } = state.beers;
    return {
        beers,
        favourite,
    };
}

export default connect(mapStateToProps)(Beer);
