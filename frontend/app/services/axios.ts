import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.LOCAL_BACKEND}`,
  withCredentials: true,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
