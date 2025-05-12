import { Element } from "./Element";

export function PDU() {
	return (
		<Element title="PDU">
			<iframe
				src="http://localhost:3000/d-solo/bejs6ey50t7nkc/pdu?orgId=1&from=1745684686307&to=1745706286307&timezone=browser&panelId=1&__feature.dashboardSceneSolo"
				width="450"
				height="200"
			></iframe>

			<iframe
				src="http://localhost:3000/d-solo/bejs6ey50t7nkc/pdu?orgId=1&from=1745684686307&to=1745706286307&timezone=browser&panelId=3&__feature.dashboardSceneSolo"
				width="450"
				height="200"
			></iframe>
		</Element>
	);
}
