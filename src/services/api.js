import axios from 'axios';

const api = axios.create(
  {
    baseURL: "https://tagchatter.herokuapp.com"
  }
)

export default api;