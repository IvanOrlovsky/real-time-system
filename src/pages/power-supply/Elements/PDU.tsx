import { Divider, FlexItem } from "@patternfly/react-core";
import { PowerSupplyElementsProps, Element } from "./Element";
import { usePowerSupplyContext } from "../../../hooks";
import _ from "lodash";

export function PDU({ poz, index }: PowerSupplyElementsProps) {
    const { info } = usePowerSupplyContext();

    const currentInfo = info.PDU[index];

    return (
        <Element {...poz}>
            <FlexItem>
                U:{" "}
                <span style={{ fontWeight: "bolder" }}>
                    {_.round(Number(currentInfo?.voltage), 1) ?? "..."}
                </span>
            </FlexItem>
            <FlexItem>
                I:{" "}
                <span style={{ fontWeight: "bolder" }}>
                    {_.round(Number(currentInfo?.current), 2) ?? "..."}
                </span>
            </FlexItem>
        </Element>
    );
}
