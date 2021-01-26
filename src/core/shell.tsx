import { FC } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { ConfigWrapper } from '../hooks/config'
import { UserWrapper } from '../hooks/user'
import App from './app'
import useTheme from '../hooks/theme'

const Shell: FC = ({ children }) => {
  const theme = useTheme()

  return (
    <UserWrapper>
      <ConfigWrapper>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ConfigWrapper>
    </UserWrapper>
  )
}

export default Shell
