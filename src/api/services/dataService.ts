import { dataAxiosInstance } from "../axiosInstance";
import { API_PATHS } from "../endpointPaths";

type GetChartRequestProps = {
	parameter:
		| "hot"
		| "cold"
		| "conditioner"
		| "chiller"
		| "PDU"
		| "SCHR"
		| "IBP"
		| "DGU"
		| "GRSCH";
	position: number;
};

export type GetChartResponseType = {
	times: string[];
	data: Record<string, { uof: string; values: string[] }>;
};

export const dataService = {
	getChartData: ({ parameter, position }: GetChartRequestProps) =>
		dataAxiosInstance.get<GetChartResponseType>(API_PATHS.DATA.GET_CHART, {
			params: { parameter, position },
		}),
};
