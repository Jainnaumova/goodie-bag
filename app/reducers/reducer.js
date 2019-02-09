import {
  GOT_CANDIES_FROM_SERVER,
  gotCandiesFromServer
} from "../actions/candy.actions";

const initialState = {
  candies: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
