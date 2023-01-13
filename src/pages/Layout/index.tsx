import { Header } from '../../components/Header/index'
import { Post } from '../../components/Post'
import { Sidebar } from '../../components/Sidebar/index'
import { LayoutContainer, ContainerWrapper } from './styles'

export function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <ContainerWrapper>
        <Sidebar />
        <main>
          <Post />
        </main>
      </ContainerWrapper>
    </LayoutContainer>
  )
}
