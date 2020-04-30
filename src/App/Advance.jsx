import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Router, Route, Switch, NavLink } from "react-router-dom";
import { Beer, Header } from "./../_elements";
import { favouriteActions } from "./../_factory";

class Advance extends React.Component {
    constructor(props) {
        super(props);

        document.title = "Advance | The Beer Bank";

        this.state = {
            mybeers: [],
        };

        this.handleEntry = this.handleEntry.bind(this);
    }

    handleEntry(e) {
        const showData = [...this.props.beers].filter;
        if (e.target.value) {
            let data = parseInt(e.target.value);
            if (data) {
                switch (e.target.parentNode.id) {
                    case "advancedSearch1__mxibu":
                        let showData = [...this.props.beers].filter(function(
                            item
                        ) {
                            return item.ibu <= data;
                        });
                        this.setState({ ["mybeers"]: [...showData] });
                        break;
                    case "advancedSearch1__mnibu":
                        showData = [...this.props.beers].filter(function(item) {
                            return item.ibu >= data;
                        });
                        this.setState({ ["mybeers"]: [...showData] });
                        break;
                    case "advancedSearch1__mxabv":
                        showData = [...this.props.beers].filter(function(item) {
                            return item.abv <= data;
                        });
                        this.setState({ ["mybeers"]: [...showData] });
                        break;
                    case "advancedSearch1__mnabv":
                        showData = [...this.props.beers].filter(function(item) {
                            return item.abv >= data;
                        });
                        this.setState({ ["mybeers"]: [...showData] });
                        break;
                    case "advancedSearch2__mxebc":
                        showData = [...this.props.beers].filter(function(item) {
                            return item.ebc <= data;
                        });
                        this.setState({ ["mybeers"]: [...showData] });
                        break;
                    case "advancedSearch2__mnebc":
                        showData = [...this.props.beers].filter(function(item) {
                            return item.ebc >= data;
                        });
                        this.setState({ ["mybeers"]: [...showData] });
                        break;
                }
            } else {
                console.log(data);
                alert("Enter Correct data");
            }
        } else {
            this.setState({ ["mybeers"]: [] });
        }
    }

    render() {
        if (this.state.mybeers.length) {
            console.log(this.state.mybeers);
        } else {
            console.log("empty state");
        }

        //-----------------------------//
        let passBeer = <div></div>;
        if (this.state.mybeers.length) {
            passBeer = <Beer auctioned={this.state.mybeers} />;
        } else {
            passBeer = <div></div>;
        }
        //----------------------------//
        return (
            <div className="page">
                <Header />

                <div className="container">
                    <div className="row AdvancedTitle">
                        <h3>Advanched Search</h3>
                    </div>
                    <div className="row1" id="advancedSearch1">
                        <div id="advancedSearch1__mxibu">
                            <p style={{ textAlign: "center" }}>Max IBU</p>
                            <input
                                type="text"
                                name="mxIbu"
                                onChange={this.handleEntry}
                            />
                        </div>
                        <div className="advancedSearch1__mnibu">
                            <p>Min IBU</p>
                            <input
                                type="text"
                                name="mnIbu"
                                onChange={this.handleEntry}
                            />
                        </div>
                        <div className="advancedSearch1__mxabv">
                            <p style={{ textAlign: "center" }}>Max ABV</p>
                            <input
                                type="text"
                                name="mxAbv"
                                onChange={this.handleEntry}
                            />
                        </div>
                        <div className="advancedSearch1__minabv">
                            <p>Min ABV</p>
                            <input
                                type="text"
                                name="mnAbv"
                                onChange={this.handleEntry}
                            />
                        </div>
                    </div>

                    <div className="row1" id="advancedSearch2">
                        <div id="advancedSearch2__mxebc">
                            <p style={{ textAlign: "center" }}>Max EBC</p>
                            <input
                                type="text"
                                name="mxEbc"
                                onChange={this.handleEntry}
                            />
                        </div>
                        <div className="advancedSearch2__mnebc">
                            <p>Min EBC</p>
                            <input
                                type="text"
                                name="mnebc"
                                onChange={this.handleEntry}
                            />
                        </div>
                        <div className="advancedSearch2__brewedB">
                            <p style={{ textAlign: "center" }}>Brewed before</p>
                            <input type="text" name="brewedB" />
                        </div>
                        <div className="advancedSearch2__brewedA">
                            <p>Brewed After</p>
                            <input type="text" name="brewedA" />
                        </div>
                    </div>
                </div>
                {passBeer}
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

const connectedAdvance = connect(mapStateToProps)(Advance);
export { connectedAdvance as Advance };
