/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createThemeProvider, defaultGetTypographyDesc } from "onyxia-ui";
import { createMakeStyles } from "tss-react/makeStyles";


export const { ThemeProvider, useTheme } = createThemeProvider({
	"getTypographyDesc": params => ({
		...defaultGetTypographyDesc(params),
		"fontFamily": '"Open Sans", sans-serif'
	})
});

export const { makeStyles } = createMakeStyles({ useTheme });


















