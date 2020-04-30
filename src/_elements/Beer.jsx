import React, { useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { MdGrade } from "react-icons/md";
import Card from "react-bootstrap/Card";
import { favouriteActions } from "./../_factory";
import { connect } from "react-redux";
import Modal from "react-modal";
import ModalView from "./ModalView";

class Beer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            passid: null,
        };

        this.handleFavourite = this.handleFavourite.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

        Modal.setAppElement("#app");
    }

    handleModalOpen(e, i) {
        // console.log(i);
        if (!e.target.parentNode.id) {
            this.setState({ ["modalIsOpen"]: true, ["passid"]: i });
        }
    }

    handleModalClose() {
        this.setState({ ["modalIsOpen"]: false, ["passid"]: null });
    }

    handleFavourite(e) {
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
        const { modalIsOpen } = this.state;
        console.log(this.state.passid);
        // console.log(this.props);
        const { favourite } = this.props;
        const beers = [...this.props.auctioned];
        //Dynamic beer list
        const beerList = beers.map((beer) => {
            return favourite.includes("beer" + beer.id)
                ? beer && (
                      <Card
                          onClick={(e) => this.handleModalOpen(e, beer.id)}
                          className="beerCard fvCard"
                          key={beer.id}
                          id={"" + beer.id}
                      >
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
                      <Card
                          onClick={(e) => this.handleModalOpen(e, beer.id)}
                          className="beerCard"
                          key={beer.id}
                          id={"" + beer.id}
                      >
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
                <CardDeck>
                    <div className="beerDeck">{beerList}</div>
                </CardDeck>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={this.handleModalClose}
                    style={{
                        overlay: {
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                        },
                    }}
                    className="myModal"
                >
                    <ModalView id={this.state.passid} />
                </Modal>
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
