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
                // favourite: [...state.favourite, action.beers].filter(function(item) {
                //     return item.name.includes(txt);
                // }),
            };
        case "REMOVE_FAVOURITE":
            return {
                ...state,
                favourite: [...state.favourite].filter(function(item) {
                    return !item.includes(action.beers);
                }),
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
