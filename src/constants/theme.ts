import teal from '@material-ui/core/colors/teal'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
})

export const darkTheme = createMuiTheme({ ...theme })
export const lightTheme = createMuiTheme({ ...theme })
