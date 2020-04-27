import { beerService } from "./beer.service";

// const { dispatch } = this.props;

// const initState = beerService.getBeers();

const beer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SINGLE_BEERS":
      return action.beers[0];
    default:
      return {
        ...state,
        beers: [],
      };
  }
};

export default beer;
