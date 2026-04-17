import axios from 'axios';

/**
 * Use a server-only baseURL on the server, and a public one in the browser.
 * This prevents leaking server-only URLs to the client.
 */
const baseURL = process.env.BASE_API_URL || 'https://app.gdacademy.et/api/v2'
    

export const api = axios.create({
  baseURL,
  withCredentials: false, // include cookies if your API uses them
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
