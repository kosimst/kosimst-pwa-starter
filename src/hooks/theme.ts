import useMediaQuery from '@material-ui/core/useMediaQuery'
import { darkTheme, lightTheme } from '../constants/theme'

const useTheme = () => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  return prefersDark ? darkTheme : lightTheme
}

export default useTheme
