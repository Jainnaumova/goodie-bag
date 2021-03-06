import axios from "axios";

export const fetchAllCandies = () => {
  return axios.get("/api/candies").then(res => res.data);
};

export const fetchOneCandy = candyId => {
  return axios.get(`api/candies/${candyId}`).then(res => res.data);
};

export const changeQuantity = (id, quantity) => {
  return axios
    .put(`api/candies/${id}/quantity`, { quantity })
    .then(res => res.data);
};
