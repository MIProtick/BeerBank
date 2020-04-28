export const favouriteActions = {
    addFavourite,
    removeFavourite,
};

function addFavourite(beers) {
    return { type: "ADD_FAVOURITE", beers };
}

function removeFavourite(beers) {
    return { type: "REMOVE_FAVOURITE", beers };
}
