import axios from "axios";

export type BaseOkResponce = {
	status: "Ok";
};

export const apiAxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	withCredentials: true,
});

export const reportAxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_REPORT_API,
	withCredentials: true,
});
