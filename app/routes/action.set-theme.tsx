import { createThemeAction } from "remix-themes";
import { themeSessionResolver } from "#app/utils/sessions.server";

export const action = createThemeAction(themeSessionResolver);
