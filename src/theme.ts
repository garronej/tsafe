/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createThemeProvider, defaultGetTypographyDesc } from "onyxia-ui";

export const { ThemeProvider, useTheme } = createThemeProvider({
	"getTypographyDesc": params => ({
		...defaultGetTypographyDesc(params),
		"fontFamily": '"Open Sans", sans-serif'
	})
}); 


















