import { MuiThemeProvider } from '@material-ui/core/styles'
import useTheme from '../src/hooks/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (Story) => {
    const theme = useTheme()

    return (
      <MuiThemeProvider theme={theme}>
        <Story />
      </MuiThemeProvider>
    )
  },
]
