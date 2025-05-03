import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@patternfly/react-core/dist/styles/base.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";

import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/auth/login" element={<LoginPage />} />
			<Route path="/auth/register" element={<RegisterPage />} />
		</Routes>
	</BrowserRouter>
);
