import * as axios from "axios";

export const dataAPI = {
  getData() {
    return axios.get("/Data/data.json");
  },
};
