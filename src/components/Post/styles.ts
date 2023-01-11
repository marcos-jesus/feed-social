import styled from 'styled-components'

export const PostContainer = styled.article`
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  padding: 2.5rem;

  & + & {
    margin-top: 2rem;
  }
`

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > time {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-400']};
  }
`

export const PostInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const PostImage = styled.img`
  width: calc(3rem + 4px);
  height: calc(3rem + 4px);
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-600']};
  outline: 1px solid ${(props) => props.theme['green-500']};
`

export const PostAuthor = styled.div`
  & > strong {
    display: block;
    color: ${(props) => props.theme['gray-100']};
    line-height: 1.6;
  }

  & > span {
    display: block;
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    line-height: 1.6;
  }
`

export const PostContent = styled.div`
  line-height: 1.6;
  color: ${(props) => props.theme['gray-300']};
  margin-top: 1.5rem;

  & > p {
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-300']};
  }
`
