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

export interface CreateIncidentParams {
	title: string;
	timestamp: string;
	file: File;
}

export const dataService = {
	getChartData: ({ parameter, position }: GetChartRequestProps) =>
		dataAxiosInstance.get<GetChartResponseType>(API_PATHS.DATA.GET_CHART, {
			params: { parameter, position },
		}),
	createIncident: (params: CreateIncidentParams) => {
		const formData = new FormData();
		formData.append("file", params.file);

		return dataAxiosInstance.post(
			API_PATHS.DATA.CREATE_INCIDENT,
			formData,
			{
				params: {
					title: params.title,
					timestamp: params.timestamp,
				},
			}
		);
	},
};
