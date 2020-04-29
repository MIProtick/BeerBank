import React, { Component } from "react";
import Beer from "./Beer";

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const searchVal = e.target.value;
        if (searchVal == null) {
            this.setState({ ["text"]: searchVal });
        } else {
            this.setState({ ["text"]: searchVal });
        }
    }

    render() {
        //Managing Beer Search
        let beers = [];
        if (this.state.text == "") {
            beers = [...this.props.beers];
        } else if (this.state.text != "") {
            let txt = this.state.text;
            if (beers) {
                beers = [...this.props.beers].filter(function(item) {
                    return item.name.includes(txt);
                });
            }
        }
        //-------------//
        return (
            <div>
                <div className="homeContainer center">
                    <h3>The Beer Bank</h3>
                    <h6>YOUR FAVOURITE BEER PROVIDER</h6>
                    <form>
                        <input
                            placeholder="Search for beer name"
                            type="text"
                            id="homeSearch"
                            onChange={this.handleChange}
                        />
                    </form>
                    <p>Advanced Search</p>
                </div>
                <div>
                    <Beer auctioned={beers} />
                </div>
            </div>
        );
    }
}

export default HomeContainer;
