import React, { Component } from "react";
import Beer from "./Beer";

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beer: {},
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({ ["beer"]: this.props.beer });
    }

    handleChange(e) {
        const searchVal = e.target.value;
        if (searchVal == null) {
            console.log(this.props.beer);
        } else {
            console.log(this.props.beer);
        }
    }

    render() {
        const beer = this.props.beer;
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
                    <Beer details={beer} />
                </div>
            </div>
        );
    }
}

export default HomeContainer;
