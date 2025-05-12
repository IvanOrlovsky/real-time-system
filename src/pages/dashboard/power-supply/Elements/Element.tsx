import { Card, CardTitle, CardBody, Flex } from "@patternfly/react-core";

export interface PowerSupplyDashBoardElementProps {
	title: string;
	children: React.ReactNode;
}
export const Element = ({
	title,
	children,
}: PowerSupplyDashBoardElementProps) => (
	<Card ouiaId="BasicCard">
		<CardTitle>{title}</CardTitle>
		<CardBody>
			<Flex
				direction={{ default: "row" }}
				flexWrap={{ default: "wrap" }}
				gap={{ default: "gapMd" }}
				justifyContent={{ default: "justifyContentSpaceAround" }}
			>
				{children}
			</Flex>
		</CardBody>
	</Card>
);
