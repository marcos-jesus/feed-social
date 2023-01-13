import { ThemeProvider } from 'styled-components'
import { PostProvider } from './contexts/PostContext'
import { Layout } from './pages/Layout/index'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostProvider>
        <Layout />
      </PostProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
