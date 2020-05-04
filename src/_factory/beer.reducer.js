const beers = (state = {}, action) => {
    switch (action.type) {
        case "GET_SINGLE_BEERS":
            return {
                ...state,
                beers: action.beers,
                favourite: [],
            };
        case "ADD_FAVOURITE":
            return {
                ...state,
                favourite: [...state.favourite, action.beers],
            };
        case "REMOVE_FAVOURITE":
            return {
                ...state,
                favourite: [...state.favourite].filter(function(item) {
                    return !item.includes(action.beers);
                }),
            };
        case "CLEAR_FAVOURITE":
            return {
                ...state,
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
