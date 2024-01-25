const { createTheme } = require("@mui/material");

 const darkTheme = createTheme({
    palette:{
        mode:'dark'
    },
    typography:{
        fontFamily:['Playpen Sans', 'cursive'].join(',')
    },
})

export default darkTheme