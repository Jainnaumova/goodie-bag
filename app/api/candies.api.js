import axios from "axios";

export const fetchAllCandies = () => {
  return axios.get("/api/candies").then(res => res.data);
};

// async const fetchAllCandies = ()=> {
//   const res = await axios.get('/api/candies');
//   return res.data;
// }
