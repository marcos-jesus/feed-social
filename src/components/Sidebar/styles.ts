import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme['gray-800']};
`
export const ImageCover = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 1.5rem - 2px);
`
export const ProfileImage = styled.img`
  width: calc(3rem + 4px);
  height: calc(3rem + 4px);
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-800']};
  outline: 1px solid ${(props) => props.theme['green-500']};
`
export const ProfileName = styled.strong`
  margin-top: 1rem;
  color: ${(props) => props.theme['gray-100']};
  line-height: 1.6;
`
export const ProfileRole = styled.span`
  margin-top: 0.15rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-400']};
`

export const Footer = styled.footer`
  border-top: 1px solid ${(props) => props.theme['gray-600']};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
`

export const ButtonProfile = styled.a`
  background: transparent;
  color: ${(props) => props.theme['green-500']};
  border: 1px solid ${(props) => props.theme['green-500']};
  border-radius: 8px;
  padding: 0 1.5rem;
  height: 50px;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    font-weight: 600;
  }
`
