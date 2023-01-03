import axios from "axios";
import { useDispatch } from "react-redux";
import { refreshToken } from "../util/refreshToken";
// const dispatch = useDispatch();

export default axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

//Axios interceptors to handle token refresh
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token'));
    config.headers["Authorization"] = `Bearer ${token}`;
    
    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const newAccessToken = await refreshToken().catch((error) => {
        localStorage.removeItem('user');
        window.location.replace("/login");
      });
      prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return axiosPrivate(prevRequest)
    }
    return Promise.reject(error);
  }
);
