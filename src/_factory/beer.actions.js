export const beerActions = {
  getBeers,
};

function getBeers(beers) {
  return { type: "GET_SINGLE_BEERS", beers };
}
