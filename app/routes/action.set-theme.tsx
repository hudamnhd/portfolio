import { type Theme, setTheme } from "#app/utils/theme.server";
import { data, redirect } from "react-router";
import type { Route } from "../+types/root";

export async function action({ request }: Route.ActionArgs) {
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
}
