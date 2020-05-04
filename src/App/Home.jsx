import React from "react";
import { connect } from "react-redux";
import { Header } from "./../_elements";
import HomeContainer from "./../_elements/HomeContainer";

class Home extends React.Component {
    constructor(props) {
        super(props);

        document.title = "Home | The Beer Bank";

        this.state = {
            beers: [],
        };
    }

    render() {
        const { beers } = this.props;

        return (
            <div className="page">
                <Header />
                <HomeContainer beers={beers} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { beers } = state.beers;
    return {
        beers,
    };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
