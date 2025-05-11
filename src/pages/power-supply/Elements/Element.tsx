import { Flex } from "@patternfly/react-core";

export type ElementsProps = {
	x: number;
	y: number;
	w?: number;
	h?: number;
	fontSize?: number;
	children: React.ReactNode;
};

export type PowerSupplyElementsProps = {
	poz: Omit<ElementsProps, "children">;
	index: number;
};

export function Element({ children, x, y, w, h, fontSize }: ElementsProps) {
	return (
		<Flex
			style={{
				position: "absolute",
				left: `${x}px`,
				top: `${y}px`,
				width: w ? `${w}px` : "",
				height: h ? `${h}px` : "",
				// backgroundColor: "#000",
				fontSize: fontSize ? `${fontSize}px` : "10px",
				color: "rgb(97, 209, 37)",
				padding: "2px",
				borderRadius: "8px",
				// border: "1px solid #3D6229",
			}}
			direction={{ default: "column" }}
			gap={{ default: "gapXs" }}
			justifyContent={{ default: "justifyContentFlexStart" }}
		>
			{children}
		</Flex>
	);
}
