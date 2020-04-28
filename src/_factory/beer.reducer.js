const beers = (state = {}, action) => {
    switch (action.type) {
        case "GET_SINGLE_BEERS":
            return {
                ...state,
                beers: action.beers,
                favourite: [],
            };
        default:
            return {
                ...state,
                beers: [],
                favourite: [],
            };
    }
};

export default beers;
