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
            maxabv: Infinity,
            minabv: 0.0,
            maxebc: Infinity,
            minebc: 0,
            brewedB: Date.parse(
                "" +
                    new Date().getMonth() +
                    "/" +
                    new Date().getDate() +
                    "/" +
                    new Date().getFullYear()
            ),
            brewedA: 0,
            loop: false,
        };

        this.handleEntry = this.handleEntry.bind(this);
        this.handBrewed = this.handBrewed.bind(this);
        this.comparedate = this.comparedate.bind(this);
    }

    //----------------Handle Brewed------------------//

    comparedate(data, comparingData) {
        var itemBrewed = Date.parse(data.slice(0, 3) + "01/" + data.slice(3));
        return itemBrewed < comparingData;
    }

    handBrewed(e) {
        if (e.target.value.length > 2) {
            if (e.target.value[2] != "/") {
                alert(
                    "There's been an error in your input.It should be '/ ', not " +
                        e.target.value[2] +
                        "."
                );
            } else if (e.target.value.length < 7) {
                if (e.target.id == "brewedB") {
                    var defaultDate = Date.parse(
                        "" +
                            new Date().getMonth() +
                            "/" +
                            new Date().getDate() +
                            "/" +
                            new Date().getFullYear()
                    );
                } else if (e.target.id == "brewedA") {
                    var defaultDate = 0;
                }

                if (this.state.brewedB != defaultDate) {
                    this.setState({
                        ...this.state,
                        [e.target.id]: defaultDate,
                        ["loop"]: true,
                    });
                }
            } else if (e.target.value.length == 7) {
                let data = e.target.value;
                this.setState({
                    ...this.state,
                    [e.target.id]: Date.parse(
                        data.slice(0, 3) + "01/" + data.slice(3)
                    ),
                    ["loop"]: true,
                });
            } else if (e.target.value.length > 7) {
                alert(
                    "There's been an error in your input.It should be like- MM/YYYY !!"
                );
            }
        }
    }

    //---------------Handling data entry-------------//
    handleEntry(e) {
        let data = Number(0 + e.target.value);
        if (data !== NaN) {
            if (data === 0) {
                if (e.target.id.startsWith("max")) {
                    this.setState({
                        ...this.state,
                        [e.target.id]: Infinity,
                        ["loop"]: true,
                    });
                } else {
                    this.setState({
                        ...this.state,
                        [e.target.id]: 0,
                        ["loop"]: true,
                    });
                }
            } else {
                this.setState({
                    ...this.state,
                    [e.target.id]: data,
                    ["loop"]: true,
                });
            }
        } else {
            alert("Something fishy with your input.");
        }
    }

    //----------------Update View according to this filter----------------//

    componentDidUpdate(prevProps, prevState) {
        // console.log("onUpdate: ", this.state);
        if (
            this.state.maxibu == Infinity &&
            this.state.minibu == 0 &&
            this.state.maxabv == Infinity &&
            this.state.minabv == 0.0 &&
            this.state.maxebc == Infinity &&
            this.state.minebc == 0 &&
            this.state.brewedB ==
                Date.parse(
                    "" +
                        new Date().getMonth() +
                        "/" +
                        new Date().getDate() +
                        "/" +
                        new Date().getFullYear()
                ) &&
            this.state.brewedA == 0 &&
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
                this.state.maxabv != Infinity ||
                this.state.minabv != 0.0 ||
                this.state.maxebc != Infinity ||
                this.state.minebc != 0 ||
                this.state.brewedB !=
                    Date.parse(
                        "" +
                            new Date().getMonth() +
                            "/" +
                            new Date().getDate() +
                            "/" +
                            new Date().getFullYear()
                    ) ||
                this.state.brewedA != 0) &&
            this.state.loop == true
        ) {
            const mbeers = [...this.props.beers].filter((item) => {
                return (
                    item.abv >= this.state.minabv &&
                    item.abv <= this.state.maxabv &&
                    item.ibu >= this.state.minibu &&
                    item.ibu <= this.state.maxibu &&
                    item.ebc >= this.state.minebc &&
                    item.ebc <= this.state.maxebc &&
                    this.comparedate(item.first_brewed, this.state.brewedB) &&
                    !this.comparedate(item.first_brewed, this.state.brewedA)
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
        let passBeer = this.state.mybeers.length ? (
            <Beer auctioned={this.state.mybeers} />
        ) : (
            <div></div>
        );

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
                                id="maxibu"
                                onChange={this.handleEntry}
                                placeholder="0"
                            />
                        </div>
                        <div id="advancedSearch1__mnibu">
                            <p>Min IBU</p>
                            <input
                                type="text"
                                id="minibu"
                                onChange={this.handleEntry}
                                placeholder="0"
                            />
                        </div>
                        <div id="advancedSearch1__mxabv">
                            <p style={{ textAlign: "center" }}>Max ABV</p>
                            <input
                                type="text"
                                id="maxabv"
                                onChange={this.handleEntry}
                                placeholder="0.0"
                            />
                        </div>
                        <div id="advancedSearch1__mnabv">
                            <p>Min ABV</p>
                            <input
                                type="text"
                                id="minabv"
                                onChange={this.handleEntry}
                                placeholder="0.0"
                            />
                        </div>
                    </div>

                    <div id="row1" id="advancedSearch2">
                        <div id="advancedSearch2__mxebc">
                            <p style={{ textAlign: "center" }}>Max EBC</p>
                            <input
                                type="text"
                                id="maxebc"
                                onChange={this.handleEntry}
                                placeholder="0"
                            />
                        </div>
                        <div id="advancedSearch2__mnebc">
                            <p>Min EBC</p>
                            <input
                                type="text"
                                id="minebc"
                                onChange={this.handleEntry}
                                placeholder="0"
                            />
                        </div>
                        <div id="advancedSearch2__brewedB">
                            <p style={{ textAlign: "center" }}>Brewed before</p>
                            <input
                                type="text"
                                id="brewedB"
                                onChange={this.handBrewed}
                                placeholder="MM/YYYY"
                            />
                        </div>
                        <div id="advancedSearch2__brewedA">
                            <p>Brewed After</p>
                            <input
                                type="text"
                                id="brewedA"
                                onChange={this.handBrewed}
                                placeholder="MM/YYYY"
                            />
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
