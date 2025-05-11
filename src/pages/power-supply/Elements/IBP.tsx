import { Divider, FlexItem } from "@patternfly/react-core";
import { PowerSupplyElementsProps, Element } from "./Element";
import { usePowerSupplyContext } from "../../../hooks";
import _ from "lodash";

export function IBP({ poz, index }: PowerSupplyElementsProps) {
    const { info } = usePowerSupplyContext();

    const currentInfo = info.IBP[index];

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
            <FlexItem>
                Заряд:{" "}
                <span style={{ fontWeight: "bolder" }}>
                    {_.round(Number(currentInfo?.charge), 3) ?? "..."}
                </span>
            </FlexItem>
            <FlexItem>
                Нагрузка:{" "}
                <span style={{ fontWeight: "bolder" }}>
                    {_.round(Number(currentInfo?.load), 2) ?? "..."}
                </span>
            </FlexItem>
        </Element>
    );
}
