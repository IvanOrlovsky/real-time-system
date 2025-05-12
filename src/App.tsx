import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router";
import {
	HomePage,
	LoginPage,
	PowerSupplyPage,
	RefridgerationPage,
	RegisterPage,
} from "./pages";

import { Header, ProtectedRoute } from "./components";
import { useAuth } from "./hooks";
import { LoadingPage } from "./pages/loading/LoadingPage";
import { IncedentLayout } from "./components/IncedentLayout/IncedentLayout";

function App() {
	const { isLoading } = useAuth();

	if (isLoading) return <LoadingPage text="Подождите совсем чуть-чуть" />;

	return (
		<>
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route element={<ProtectedRoute />}>
						<Route element={<Header />}>
							<Route path="/" element={<HomePage />} />
							<Route element={<IncedentLayout />}>
								<Route
									path="/power-supply"
									element={<PowerSupplyPage />}
								/>
								<Route
									path="/refridgeration"
									element={<RefridgerationPage />}
								/>
							</Route>
						</Route>
					</Route>

					<Route path="/auth/login" element={<LoginPage />} />
					<Route path="/auth/register" element={<RegisterPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
