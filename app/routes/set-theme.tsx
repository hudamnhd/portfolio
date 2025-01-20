import { type Theme, setTheme } from "#app/utils/theme.server";
import { Button } from "#app/components/ui/button";
import { useFetcher, useRouteLoaderData, data, redirect } from "react-router";
import type { Route } from "./+types/set-theme";

export const action = async ({ request }: Route.ActionArgs) => {
	const formData = await request.formData();

	const theme = String(formData.get("theme")) as Theme;
	const redirectTo = formData.get("redirectTo");

	const responseInit = {
		headers: { "set-cookie": setTheme(theme) },
	};

	if (redirectTo) {
		return redirect(String(redirectTo), responseInit);
	} else {
		return data({ success: true }, responseInit);
	}
};

export function ThemeSwitch() {
	const fetcher = useFetcher<typeof action>();

	const loaderRootData = useRouteLoaderData("root");
	const theme: Theme = loaderRootData?.requestInfo?.userPrefs?.theme || "light";
	// const path = loaderRootData?.requestInfo?.path;

	const nextMode = theme === "light" ? "dark" : "light";
	const modeLabel = {
		light: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-sun"
			>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</svg>
		),
		dark: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-moon"
			>
				<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
			</svg>
		),
	};

	return (
		<>
			<fetcher.Form method="POST" action="/set-theme">
				{/*<input type="hidden" name="redirectTo" value={path} />*/}
				<input type="hidden" name="theme" value={nextMode} />
				<div className="flex gap-2">
					<Button
						type="submit"
						title="Change theme"
						variant="ghost"
						size="icon"
					>
						{modeLabel[theme]}
					</Button>
				</div>
			</fetcher.Form>
		</>
	);
}
