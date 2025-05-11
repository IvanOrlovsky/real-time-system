import {
	Masthead,
	MastheadMain,
	MastheadBrand,
	MastheadLogo,
	MastheadContent,
	Button,
	Flex,
	FlexItem,
} from "@patternfly/react-core";
import { useAuth } from "../../hooks";
import { Outlet, useNavigate } from "react-router";
import { PowerSupplyIcon, RefrigerationIcon } from "../icons";

export function Header() {
	const { logout, user } = useAuth();
	let navigate = useNavigate();

	return (
		<>
			<Masthead>
				<MastheadMain>
					<MastheadBrand>
						<MastheadLogo>
							{user?.isAdmin
								? "Админская панель"
								: "Панель сотрудника"}{" "}
							({user?.email})
						</MastheadLogo>
					</MastheadBrand>
				</MastheadMain>
				<MastheadContent>
					<Flex style={{ width: "100%" }}>
						{!user?.isAdmin && (
							<FlexItem>
								<Button
									component="a"
									href="/power-supply"
									variant="secondary"
									icon={
										<PowerSupplyIcon
											color="#FFF"
											height={24}
											width={24}
										/>
									}
								>
									Электроснабжение
								</Button>
								<Button
									component="a"
									href="/refridgeration"
									variant="secondary"
									icon={
										<RefrigerationIcon
											color="#FFF"
											height={24}
											width={24}
										/>
									}
								>
									Холодоснабжение
								</Button>
							</FlexItem>
						)}
						<FlexItem align={{ default: "alignRight" }}>
							<Button
								variant="danger"
								onClick={async () => {
									logout();

									await new Promise((resolve) =>
										setTimeout(resolve, 500)
									);
									navigate("/auth/login");
								}}
							>
								Выйти
							</Button>
						</FlexItem>
					</Flex>
				</MastheadContent>
			</Masthead>
			<Outlet />
		</>
	);
}
