import axios from "axios";
const api = axios.create({
  baseURL: "https://us-central1-future-apis.cloudfunctions.net/elo4/",
});

export default api;
