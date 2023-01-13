import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { PublishedAt } from '../../utils/publishedFormatted'
import {
  PostContainer,
  PostHeader,
  PostInformation,
  PostImage,
  PostAuthor,
  PostContent,
} from './styles'
export function Post() {
  const { data: repositories } = useContext(PostContext)

  return (
    <>
      {repositories.map((repo: any) => {
        return (
          <>
            <PostContainer key={repo.node_id}>
              <PostHeader>
                <PostInformation>
                  <PostImage src={repo.owner.avatar_url} />
                  <PostAuthor>
                    <strong>{repo.owner.login}</strong>
                    <span>Frontend Engineer</span>
                  </PostAuthor>
                </PostInformation>

                <time title={repo.created_at} dateTime={repo.created_at}>
                  {PublishedAt(repo.created_at)}
                </time>
              </PostHeader>

              <PostContent>
                <span>
                  Repositório: <br />
                </span>
                <h3>{repo.full_name}</h3>
                {repo.description != null && (
                  <p>
                    Descrição: <br /> {repo.description}
                  </p>
                )}

                {repo.description == null && (
                  <p>
                    Descrição: <br /> Não contém descrição!
                  </p>
                )}
              </PostContent>
            </PostContainer>
          </>
        )
      })}
    </>
  )
}
