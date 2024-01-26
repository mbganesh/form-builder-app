import { axios } from "utils.axios";

export const userLogin = (data) => {
  axios.post("/login" , {...data});
}
