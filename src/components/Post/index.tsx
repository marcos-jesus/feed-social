import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { PublishedAt, publishedAtTitle } from '../../utils/publishedFormatted'
import {
  PostContainer,
  PostHeader,
  PostInformation,
  PostImage,
  PostAuthor,
  PostContent,
  PostRepoTitle,
} from './styles'
export function Post() {
  const { data: repositories, isFetching, error } = useContext(PostContext)

  return (
    <>
      {repositories.map((repo: any) => {
        return (
          <>
            {error && <p> Error</p>}
            <PostContainer key={repo.node_id}>
              {isFetching && <h1> Carregando...</h1>}
              <PostHeader>
                <PostInformation>
                  <PostImage src={repo.owner.avatar_url} />
                  <PostAuthor>
                    <strong>{repo.owner.login}</strong>
                    <span>Frontend Engineer</span>
                  </PostAuthor>
                </PostInformation>

                <span>
                  <time
                    title={publishedAtTitle(new Date(repo.pushed_at))}
                    dateTime={repo.pushed_at}
                  >
                    Atualizado {PublishedAt(new Date(repo.pushed_at))}
                  </time>
                </span>
              </PostHeader>

              <PostContent>
                <span>
                  Repositório: <br />
                </span>
                <PostRepoTitle href={repo.html_url} target="_blank">
                  {repo.full_name}
                </PostRepoTitle>
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
