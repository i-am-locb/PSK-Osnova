import * as axios from "axios";
// const url = process.env.PUBLIC_URL

export const dataAPI = {
  getData() {
    return axios.get(process.env.PUBLIC_URL + "/Data/data.json");
  },
};
