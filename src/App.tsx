import { ThemeProvider } from 'styled-components'
import { Layout } from './pages/Layout/index'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout />
      <GlobalStyle />
    </ThemeProvider>
  )
}
