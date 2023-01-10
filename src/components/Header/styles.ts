import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-800']};
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
`

export const HeaderImage = styled.img`
  height: 2rem;
`
