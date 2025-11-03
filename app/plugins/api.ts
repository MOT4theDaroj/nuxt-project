import axios from "axios";

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: "http://10.34.3.122:30000", // API base
    timeout: 5000,
  });

  // Example interceptor
  api.interceptors.request.use((config) => {
    const token = useCookie("token").value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return {
    provide: {
      api,
    },
  };
});