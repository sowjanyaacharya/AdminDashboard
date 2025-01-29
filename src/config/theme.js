import { createTheme } from '@mui/material'
import { green, indigo, grey, blueGrey } from '@mui/material/colors'

let theme = createTheme({
    palette: {
        //these are the different variations of colors
        primary: {
            main: blueGrey[500],
            normal: blueGrey['A700'],
        },
        secondary: {
            main: blueGrey[50]
        },
        neutral: {
            light: grey[50],
            medium: grey[200],
            normal: grey[700],
            main: blueGrey[900]
        },
        green: {
            main: green[800]
        }
    }
})
//here we used the above theme and passed here
theme = createTheme(theme, {
    typography: {
        link: {
            fontsize: '0.8rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '0.9rem'
            },
            fontWeight: 500,
            color: 'blue',
            display: 'block',
            cursor: 'pointer'
        },
        cardTitle: {
            fontsize: '1.2rem',
            display: 'block',
            fontWeight: 500
        },
        h6: {
            fontsize: '1rem'

        },
        h7: {
            fontsize: '0.8rem'
        },
        h8: {
            fontsize: '0.7rem'
        }
    }
});

export default theme
