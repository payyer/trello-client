import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '68px',
    boardBar: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: '#ff5252'
        // }
      }
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#000'
        // }
      }
    }
  }
})

export default theme