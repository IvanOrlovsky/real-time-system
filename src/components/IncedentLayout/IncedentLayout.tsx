import { useEffect, useState } from "react";
import { useWebSocket } from "../../hooks";
import {
	Alert,
	AlertActionCloseButton,
	AlertGroup,
	AlertProps,
} from "@patternfly/react-core";
import { Outlet } from "react-router";

export function IncedentLayout() {
	const { messages } = useWebSocket(process.env.REACT_APP_WS_ALERT_URL!);

	const [alerts, setAlerts] = useState<Partial<AlertProps>[]>([]);

	useEffect(() => {
		console.log(JSON.stringify(messages));
		if (messages.length > 0) {
			const newMessage = messages.pop();

			setAlerts((prev) => [
				...prev,
				{ title: newMessage?.title, key: new Date().getTime() },
			]);
		}
	}, [messages]);

	const removeAlert = (key: React.Key) => {
		setAlerts((prevAlerts) => [
			...prevAlerts.filter((alert) => alert.key !== key),
		]);
	};

	return (
		<>
			<AlertGroup hasAnimations isToast isLiveRegion>
				{alerts.map(({ key, title }) => (
					<Alert
						variant="danger"
						title={title}
						actionClose={
							<AlertActionCloseButton
								title={title as string}
								onClose={() => removeAlert(key!)}
							/>
						}
						key={key}
					/>
				))}
			</AlertGroup>
			<Outlet />
		</>
	);
}
