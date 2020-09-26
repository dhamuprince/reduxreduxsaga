import axios from "axios";

export const fetchUsers = () => {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },

    url: "http://localhost:8080/users"
  });
};
