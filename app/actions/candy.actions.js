import { fetchAllCandies, fetchOneCandy } from "../api/candies.api";

// Action Types
export const GOT_CANDIES_FROM_SERVER = "GOT_CANDIES_FROM_SERVER";
export const GOT_ONE_CANDY_FROM_SERVER = "GOT_ONE_CANDY_FROM_SERVER";

// Action creators
export const gotCandiesFromServer = candies => ({
  type: GOT_CANDIES_FROM_SERVER,
  candies
});

export const gotOneCandyFromServer = candy => ({
  type: GOT_ONE_CANDY_FROM_SERVER,
  candy
});

// Thunk creator

export const getAllCandies = () => async dispatch => {
  const candies = await fetchAllCandies();
  dispatch(gotCandiesFromServer(candies));
};

export const getOneCandy = id => async dispatch => {
  const candy = await fetchOneCandy(id);
  dispatch(gotOneCandyFromServer(candy));
};
