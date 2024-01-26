const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette:{
        mode:'dark',
    },
    typography:{
        fontFamily:['Playpen Sans', 'cursive'].join(',')
    },
})