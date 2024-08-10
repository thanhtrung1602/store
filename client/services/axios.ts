import axios from "axios";
const instance = axios.create({
  baseURL: `${process.env.backend_local}`,
  withCredentials: true,
});

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
