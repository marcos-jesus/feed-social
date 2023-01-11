import { Header } from '../../components/Header/index'
import { Post } from '../../components/Post'
import { Sidebar } from '../../components/Sidebar/index'
import { LayoutContainer, ContainerWrapper } from './styles'

import { useContext } from 'react'

import { PostContext } from '../../contexts/PostContext'

export function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <ContainerWrapper>
        <Sidebar />
        <main>
          {post.map((data) => {
            return (
              <>
                <Post key={data.node_id} name={data} />
              </>
            )
          })}
        </main>
      </ContainerWrapper>
    </LayoutContainer>
  )
}
