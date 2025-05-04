import { apiAxiosInstance } from "../axiosInstance";
import { API_PATHS } from "../endpointPaths";

type RegisterRequestType = {
	email: string;
	password: string;
	token: string;
};

type LoginRequestType = Omit<RegisterRequestType, "token">;

type AuthResponse = {
	status: "Ok";
};

export const authService = {
	registerAdmin: (data: RegisterRequestType) =>
		apiAxiosInstance.post<AuthResponse>(API_PATHS.AUTH.REGISTER, data),
	login: (data: LoginRequestType) =>
		apiAxiosInstance.post<AuthResponse>(API_PATHS.AUTH.LOGIN, data),
};
