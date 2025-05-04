import React from "react";

import { Navigate, Outlet } from "react-router";

type ProtectedRouteProps = {
	isAuthed: boolean;
	redirectTo: string;
};

export function ProtectedRoute(props: ProtectedRouteProps) {
	if (!props.isAuthed) {
		return <Navigate to={props.redirectTo} />;
	}

	return <Outlet />;
}
