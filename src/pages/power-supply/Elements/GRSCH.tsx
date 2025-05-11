import { Divider, FlexItem } from "@patternfly/react-core";
import { PowerSupplyElementsProps, Element } from "./Element";
import { usePowerSupplyContext } from "../../../hooks";
import _ from "lodash";

export function GRSCH({ poz, index }: PowerSupplyElementsProps) {
    const { info } = usePowerSupplyContext();

    const currentInfo = info.GRSCH[index];

    return (
        <Element {...poz}>
            <FlexItem>
                U:{" "}
                <span style={{ fontWeight: "bolder" }}>
                    {_.round(Number(currentInfo?.voltage), 3) ?? "..."}
                </span>
            </FlexItem>
            <FlexItem>
                P:{" "}
                <span style={{ fontWeight: "bolder" }}>
                    {_.round(Number(currentInfo?.activePower), 3) ?? "..."}
                </span>
            </FlexItem>
            <FlexItem>
                K:{" "}
                <span style={{ fontWeight: "bolder" }}>
                    {_.round(Number(currentInfo?.coefficient), 3) ?? "..."}
                </span>
            </FlexItem>
        </Element>
    );
}
