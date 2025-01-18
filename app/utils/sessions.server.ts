// sessions.server.tsx

import { createThemeSessionResolver } from "remix-themes";
import { createCookieSessionStorage } from "react-router";

const isProduction = process.env.NODE_ENV === "production";
const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: "__remix-themes",
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secrets: ["s3cr3t"],
		// secure: true,
		...(isProduction ? { domain: "mhda.netlify.app", secure: true } : {}), // 👈 Website URL.
	},
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
