import axios from "axios";
import { ENVIRONEMENTS } from "../env/environement";

//login
export function checkLogin(username, password) {
  return axios
    .post(ENVIRONEMENTS.apiUrls + "/users/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response.data.response);
      return {
        isLogedIn: true,
        user: response.data.response,
      };
    })
    .catch((error) => {
      console.log(error);

      return {
        isLogedIn: false,
        user: null,
      };
    });
}
