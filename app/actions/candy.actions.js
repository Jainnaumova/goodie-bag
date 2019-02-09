import { fetchAllCandies } from "../api/candies.api";
// Action Types
export const GOT_CANDIES_FROM_SERVER = "GOT_CANDIES_FROM_SERVER";

// Action creators
export const gotCandiesFromServer = candies => ({
  type: GOT_CANDIES_FROM_SERVER,
  candies
});

// Thunk creator

export const getAllCandies = () => async dispatch => {
  const candies = await fetchAllCandies();
  dispatch(gotCandiesFromServer(candies));
};
