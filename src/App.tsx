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

function App() {
	const { user, isLoading } = useAuth();

	if (isLoading) return <LoadingPage text="Подождите совсем чуть-чуть" />;

	return (
		<>
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route
						element={
							<ProtectedRoute
								redirectTo="/auth/login"
								isAuthed={!!user}
							/>
						}
					>
						<Route element={<Header />}>
							<Route path="/" element={<HomePage />} />
							<Route
								element={
									<ProtectedRoute
										redirectTo="/"
										isAuthed={!user?.isAdmin}
									/>
								}
							>
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

					<Route
						element={
							<ProtectedRoute redirectTo="/" isAuthed={!user} />
						}
					>
						<Route path="/auth/login" element={<LoginPage />} />
						<Route
							path="/auth/register"
							element={<RegisterPage />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
