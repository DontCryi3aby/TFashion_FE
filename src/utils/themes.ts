import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xxs: true;
    }
}

// A custom theme for this app
export const theme = createTheme({
    palette: {
        primary: {
            main: '#121621',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    breakpoints: {
        values: {
            xxs: 0,
            xs: 450,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
