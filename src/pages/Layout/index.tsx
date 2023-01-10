import { Header } from '../../components/Header/index'
import { Sidebar } from '../../components/Sidebar/index'
import { LayoutContainer, ContainerWrapper } from './styles'
export function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <ContainerWrapper>
        <Sidebar />
      </ContainerWrapper>
    </LayoutContainer>
  )
}
