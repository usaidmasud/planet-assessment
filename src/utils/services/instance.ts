// axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://swapi.dev/api/",
  timeout: 5000,
  // You can add more config options as needed
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // You can modify the request config here, e.g., add headers
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    // Handle request error
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    // Handle response error
    console.error("Response Interceptor Error:", error);
    return Promise.reject(error);
  },
);

export default instance;
