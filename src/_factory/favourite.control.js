import { favouriteActions } from "./favourite.action";

export const pushFavourite = (pushValue) => (dispatch) => {
    dispatch(favouriteActions.addFavourite(pushValue));
};

export const popFavourite = (popValue) => (dispatch) => {
    dispatch(favouriteActions.removeFavourite(popValue));
};
