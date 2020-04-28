import { combineReducers } from "redux";
import beers from "./beer.reducer";

const rootReducer = combineReducers({
    beers,
});

export default rootReducer;
