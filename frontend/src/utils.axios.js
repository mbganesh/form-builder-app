import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:3030/",
  headers: {
    "Content-Type": "application/json",
  },
});

// export default axios
