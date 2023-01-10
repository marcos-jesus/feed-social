import { HeaderContainer, HeaderImage } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderImage src={logo} alt="" />
    </HeaderContainer>
  )
}
