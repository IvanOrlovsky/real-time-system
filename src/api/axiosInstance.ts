import axios from "axios";

export const apiAxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});
