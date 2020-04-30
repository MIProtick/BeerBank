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
            maxibu: Infinity,
            minibu: 0,
            maxabv: 100.0,
            minabv: 0.0,
            maxebc: Infinity,
            minebc: 0,
            loop: false,
        };

        this.handleEntry = this.handleEntry.bind(this);
    }

    //---------------Handling data entry-------------//
    handleEntry(e) {
        if (e.target.value !== "") {
            let data = Number(e.target.value);
            if (data) {
                switch (e.target.parentNode.id) {
                    case "advancedSearch1__mxibu":
                        this.setState({
                            ...this.state,
                            ["maxibu"]: data,
                            ["loop"]: true,
                        });
                        break;
                    case "advancedSearch1__mnibu":
                        this.setState({
                            ...this.state,
                            ["minibu"]: data,
                            ["loop"]: true,
                        });
                        break;
                    case "advancedSearch1__mxabv":
                        this.setState({
                            ...this.state,
                            ["maxabv"]: data,
                            ["loop"]: true,
                        });
                        break;
                    case "advancedSearch1__mnabv":
                        this.setState({
                            ...this.state,
                            ["minabv"]: data,
                            ["loop"]: true,
                        });
                        break;
                    case "advancedSearch2__mxebc":
                        this.setState({
                            ...this.state,
                            ["maxebc"]: data,
                            ["loop"]: true,
                        });
                        break;
                    case "advancedSearch2__mnebc":
                        this.setState({
                            ...this.state,
                            ["minebc"]: data,
                            ["loop"]: true,
                        });
                        break;
                }
            } else {
                alert("Something fishy with your input.");
            }
        } else {
            console.log(typeof e.target.value);
            switch (e.target.parentNode.id) {
                case "advancedSearch1__mxibu":
                    this.setState({
                        ...this.state,
                        maxibu: Infinity,
                        ["loop"]: true,
                    });
                    console.log("mxibu", this.state);
                    break;
                case "advancedSearch1__mnibu":
                    this.setState({
                        ...this.state,
                        ["minibu"]: 0,
                        ["loop"]: true,
                    });
                    console.log("mnibu");
                    break;
                case "advancedSearch1__mxabv":
                    this.setState({
                        ...this.state,
                        ["maxabv"]: 100.0,
                        ["loop"]: true,
                    });
                    break;
                case "advancedSearch1__mnabv":
                    this.setState({
                        ...this.state,
                        ["minabv"]: 0.0,
                        ["loop"]: true,
                    });
                    break;
                case "advancedSearch2__mxebc":
                    this.setState({
                        ...this.state,
                        ["maxebc"]: Infinity,
                        ["loop"]: true,
                    });
                    break;
                case "advancedSearch2__mnebc":
                    this.setState({
                        ...this.state,
                        ["minebc"]: 0,
                        ["loop"]: true,
                    });
                    break;
            }
        }
    }

    //----------------Update View according to this filter----------------//

    componentDidUpdate(prevProps, prevState) {
        console.log("onUpdate: ", this.state);
        if (
            this.state.maxibu == Infinity &&
            this.state.minibu == 0 &&
            this.state.maxabv == 100.0 &&
            this.state.minabv == 0.0 &&
            this.state.maxebc == Infinity &&
            this.state.minebc == 0 &&
            this.state.loop == true
        ) {
            this.setState({
                ...this.state,
                ["mybeers"]: [],
                ["loop"]: false,
            });
        } else if (
            (this.state.maxibu != Infinity ||
                this.state.minibu != 0 ||
                this.state.maxabv != 100.0 ||
                this.state.minabv != 0.0 ||
                this.state.maxebc != Infinity ||
                this.state.minebc != 0) &&
            this.state.loop == true
        ) {
            const mbeers = [...this.props.beers].filter((item) => {
                return (
                    item.abv >= this.state.minabv &&
                    item.abv <= this.state.maxabv &&
                    item.ibu >= this.state.minibu &&
                    item.ibu <= this.state.maxibu &&
                    item.ebc >= this.state.minebc &&
                    item.ebc <= this.state.maxebc
                );
            });
            this.setState({
                ...this.state,
                ["mybeers"]: [...mbeers],
                ["loop"]: false,
            });
        }
    }

    render() {
        //-------------Collecting Beers----------------//
        let passBeer = <div></div>;
        if (this.state.mybeers.length) {
            passBeer = <Beer auctioned={this.state.mybeers} />;
        } else {
            passBeer = <div></div>;
        }
        //--------------------------------------------//
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
                        <div id="advancedSearch1__mnibu">
                            <p>Min IBU</p>
                            <input
                                type="text"
                                name="mnIbu"
                                onChange={this.handleEntry}
                            />
                        </div>
                        <div id="advancedSearch1__mxabv">
                            <p style={{ textAlign: "center" }}>Max ABV</p>
                            <input
                                type="text"
                                name="mxAbv"
                                onChange={this.handleEntry}
                            />
                        </div>
                        <div id="advancedSearch1__minabv">
                            <p>Min ABV</p>
                            <input
                                type="text"
                                name="mnAbv"
                                onChange={this.handleEntry}
                            />
                        </div>
                    </div>

                    <div id="row1" id="advancedSearch2">
                        <div id="advancedSearch2__mxebc">
                            <p style={{ textAlign: "center" }}>Max EBC</p>
                            <input
                                type="text"
                                name="mxEbc"
                                onChange={this.handleEntry}
                            />
                        </div>
                        <div id="advancedSearch2__mnebc">
                            <p>Min EBC</p>
                            <input
                                type="text"
                                name="mnebc"
                                onChange={this.handleEntry}
                            />
                        </div>
                        <div id="advancedSearch2__brewedB">
                            <p style={{ textAlign: "center" }}>Brewed before</p>
                            <input type="text" name="brewedB" />
                        </div>
                        <div id="advancedSearch2__brewedA">
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
