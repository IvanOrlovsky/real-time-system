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

export function Header() {
	const { logout, user } = useAuth();
	let navigate = useNavigate();

	return (
		<>
			<Masthead>
				<MastheadMain>
					<MastheadBrand>
						<MastheadLogo>
							Админская панель ({user?.email})
						</MastheadLogo>
					</MastheadBrand>
				</MastheadMain>
				<MastheadContent>
					<Flex
						justifyContent={{ default: "justifyContentFlexEnd" }}
						style={{ width: "100%" }}
					>
						<FlexItem>
							<Button
								variant="danger"
								onClick={() => {
									logout();
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
