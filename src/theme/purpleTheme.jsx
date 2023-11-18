import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#fffff'
        },
        secondary: {
            main: '#00000'
        },
        error: {
            main: red.A400,
        },
    },
})

