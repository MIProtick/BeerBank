import React, { Component } from "react";
import Beer from "./Beer";
import { Link } from "react-router-dom";

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            beerloop: 1,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClearText = this.handleClearText.bind(this);
        this.handleScrollInfinite = this.handleScrollInfinite.bind(this);
    }

    handleScrollInfinite(e) {
        if (
            window.innerHeight + window.pageYOffset >=
            document.body.scrollHeight * 0.99
        ) {
            let val = this.state.beerloop + 1;
            this.setState({
                ...this.state,
                beerloop: val,
            });
        }
    }

    handleClearText(e) {
        this.setState({ ...this.state, text: "" });
    }

    handleChange(e) {
        const searchVal = e.target.value;
        if (searchVal == null) {
            this.setState({ ["text"]: searchVal });
        } else {
            this.setState({ ["text"]: searchVal });
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScrollInfinite);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScrollInfinite);
    }

    render() {
        const anim = {
            animationName: "fadein",
            animationDuration: "1s",
        };
        //-----------Managing Beer Search-----------------//
        let beers = [];
        let searchFor = "";
        if (this.state.text == "") {
            // beers = [...this.props.beers];
            for (let i = 1; i <= this.state.beerloop; i++) {
                beers = [...beers, ...this.props.beers];
            }
            searchFor = (
                <div className="containerTitle">
                    <h4 style={anim}>All Beers</h4>
                </div>
            );
        } else if (this.state.text != "") {
            let txt = this.state.text;
            beers = [...this.props.beers].filter(function(item) {
                return item.name.includes(txt);
            });
            searchFor = (
                <div className="containerTitle">
                    <h5 style={anim}>
                        Showing result For "<span style={anim}>{txt}</span>"
                    </h5>
                    <p style={anim}>Total item {beers.length}</p>
                </div>
            );
        }
        //-------------------------------------------------//
        return (
            <div>
                <div className="homeContainer center">
                    <h3>The Beer Bank</h3>
                    <h6>YOUR FAVOURITE BEER PROVIDER</h6>
                    <input
                        placeholder="Search for beer name"
                        type="text"
                        id="homeSearch"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <p>
                        <span
                            style={
                                this.state.text == ""
                                    ? { display: "none" }
                                    : {
                                          marginRight: "20px",
                                          cursor: "pointer",
                                      }
                            }
                            onClick={this.handleClearText}
                        >
                            Clear Search
                        </span>
                        <Link to="/advance" style={{ color: "white" }}>
                            Advanced Search
                        </Link>
                    </p>
                </div>
                {searchFor}
                <div>
                    <Beer auctioned={beers} />
                </div>
            </div>
        );
    }
}

export default HomeContainer;
