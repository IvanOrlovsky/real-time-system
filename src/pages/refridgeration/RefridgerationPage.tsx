import { Divider, Flex } from "@patternfly/react-core";
import { Link } from "react-router";
import { PowerSupplyIcon, RefrigerationIcon } from "../../components";
import { RefridgeratorContextProvider } from "../../hooks/useRefridgeratorContext";
import { Chiller } from "./Elements/Chiller";

export function RefridgerationPage() {
	return (
		<>
			<Flex
				direction={{ default: "row" }}
				style={{
					width: "100vw",
					marginTop: "30px",
					marginBottom: "30px",
					padding: "0 20px",
					boxSizing: "border-box",
				}}
			>
				<Link
					to="/power-supply"
					style={{
						flexGrow: 1,
						textAlign: "center",
						backgroundColor: "#3D6229",
						color: "#E0F4FF",
						padding: "15px 10px",
						textDecoration: "none",
						borderRadius: "8px 0 0 8px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "8px",
						transition: "background-color 0.3s ease",
						boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
					}}
				>
					<PowerSupplyIcon
						color="#E0F4FF"
						style={{ width: "24px", height: "24px" }}
					/>
					<span>Электроснабжение</span>
				</Link>

				<Divider
					orientation={{
						default: "vertical",
					}}
				/>

				<Link
					to="/refridgeration"
					style={{
						flexGrow: 1,
						textAlign: "center",
						backgroundColor: "#1C2D47",
						color: "#D9F0FF",
						padding: "15px 10px",
						textDecoration: "none",
						borderRadius: "0 8px 8px 0",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "8px",
						transition: "background-color 0.3s ease",
						boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
					}}
				>
					<RefrigerationIcon
						color="#D9F0FF"
						style={{ width: "24px", height: "24px" }}
					/>
					<span>Холодоснабжение</span>
				</Link>
			</Flex>
			<div
				style={{
					position: "relative",
					width: "1500px",
					height: "1000px",
				}}
			>
				<img
					src="/refridgeration-img.png"
					alt="Схема холодоснабжения"
				/>
				<RefridgeratorContextProvider>
					<Chiller
						index={0}
						poz={{ x: 1, y: 350, w: 100, h: 80, fontSize: 15 }}
					/>
				</RefridgeratorContextProvider>
			</div>
		</>
	);
}
