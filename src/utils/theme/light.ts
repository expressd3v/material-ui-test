import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            light: '#ffffff',
            main: '#000000',
            dark: '#000000'
        },
        secondary: {
            light: '#eeeeee',
            main: '#A6A6A6',
            dark: '#111111',
            contrastText: '#111111',
        },
        success: {
            main: "rgba(67, 212, 221, 1)",
            light: '#eeeeee',
        }
    },
};

export default lightThemeOptions;