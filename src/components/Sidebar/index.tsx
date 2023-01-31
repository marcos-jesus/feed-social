import { PencilLine } from 'phosphor-react'
import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'
import {
  SidebarContainer,
  ImageCover,
  Profile,
  ProfileImage,
  ProfileName,
  ProfileRole,
  Footer,
  ButtonProfile,
} from './styles'
export function Sidebar() {

  const {data} = useContext(ProfileContext)

  console.log(data)
  return (
    <div>
    <SidebarContainer>
      <ImageCover
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <Profile>
        <ProfileImage
          src=""
          alt=""
        />
        <ProfileName>Marcos Jesus</ProfileName>
        <ProfileRole>Frontend Engineer</ProfileRole>
      </Profile>

      <Footer>
        <ButtonProfile href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </ButtonProfile>
      </Footer>
    </SidebarContainer>
 
    </div>
  )
}
