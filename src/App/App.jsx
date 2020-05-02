import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { beerActions, beerService } from "./../_factory";
import { history } from "../_factory";
import { Home } from "./Home";
import { Favourite } from "./Favourite";
import { Advance } from "./Advance";

class App extends React.Component {
    constructor(props) {
        super(props);
        document.title = "The Beer Bank";
    }

    //Data's bee mounted only ones
    componentWillMount() {
        const { dispatch } = this.props;

        beerService.getBeers().then((beers) => {
            dispatch(beerActions.getBeers(beers));
        });
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route
                            exact={true}
                            path="/favourite"
                            component={Favourite}
                        />
                        <Route
                            exact={true}
                            path="/advance"
                            component={Advance}
                        />
                        <Route exact={true} component={Home} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state,
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
