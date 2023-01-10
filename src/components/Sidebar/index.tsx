import { PencilLine } from 'phosphor-react'
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
  return (
    <SidebarContainer>
      <ImageCover
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <Profile>
        <ProfileImage
          src="https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/315349459_856250345385726_6983100356969291689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTuCPQKRw_KXYqO3EIZA86AvrOU28KZkYC-s5TbwpmRt0iUrCwjq9PjXiMmdPrvG8_XGgt81N9fLIVkhN_vT7l&_nc_ohc=ivsmMb3PVd8AX-l1KXr&_nc_ht=scontent.fcgh10-1.fna&oh=00_AfAJFHWG6vMZjtXubgXX9mVO5egKFCB7IJ8NAltvtwEVFw&oe=63C3C6C4"
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
  )
}
