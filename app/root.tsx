import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "react-router";
import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { type Theme, getTheme } from "./utils/theme.server";

export const meta: Route.MetaFunction = ({ data }) => {
	return [
		{ title: data ? "Huda Site" : "Error | Huda Site" },
		{ name: "description", content: `Portfolio site` },
	];
};

// Return the theme from the session storage using the loader
export async function loader({ request }: Route.LoaderArgs) {
	return {
		requestInfo: {
			path: new URL(request.url).pathname,
			userPrefs: {
				theme: getTheme(request) as Theme,
			},
		},
	};
}

export default function AppWithProviders() {
	return <App />;
}
export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{ rel: "stylesheet", href: stylesheet },
];

function App() {
	const data = useLoaderData();
	const theme = data?.requestInfo?.userPrefs?.theme || "light";

	return (
		<html lang="en" data-theme={theme ?? ""} className={`${theme}`}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
