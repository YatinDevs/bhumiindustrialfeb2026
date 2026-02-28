import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://server.bhumiindustrial.com/api',
  fileURL: 'https://server.bhumiindustrial.com/uploads',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});


export default axiosInstance;