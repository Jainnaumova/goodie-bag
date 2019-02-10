import {
  GOT_CANDIES_FROM_SERVER,
  gotCandiesFromServer,
  GOT_ONE_CANDY_FROM_SERVER,
  gotOneCandyFromServer
} from "../actions/candy.actions";

const initialState = {
  candies: [],
  candy: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return { ...state, candies: action.candies };
    case GOT_ONE_CANDY_FROM_SERVER:
      return { ...state, candy: action.candy };
    default:
      return state;
  }
};

export default rootReducer;
