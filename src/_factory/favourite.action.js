export const favouriteActions = {
    addFavourite,
    removeFavourite,
    clearFavourite,
};

function addFavourite(beers) {
    return { type: "ADD_FAVOURITE", beers };
}

function removeFavourite(beers) {
    return { type: "REMOVE_FAVOURITE", beers };
}

function clearFavourite(beers) {
    return { type: "CLEAR_FAVOURITE", beers };
}
