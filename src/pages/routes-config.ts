import { DefaultRoute } from "~src/pages/router";
import { RouteConfig } from "@lit-labs/router";

// Automatically handles importing
// and showing component named 'app-page--<tag>'
export const simpleRoutes: DefaultRoute[] = [
	{ path: "/", tag: "test" },
]

export const complexRoutes: RouteConfig[] = []
