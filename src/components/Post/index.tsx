import { useEffect, useState } from 'react'
import { userApi } from '../../lib/axios'
import {
  PostContainer,
  PostHeader,
  PostInformation,
  PostImage,
  PostAuthor,
  PostContent,
} from './styles'
export function Post() {
  interface UserProps {
    id: number
    name: string
    avatar_url: string
    type: string
  }

  const [user, setUser] = useState<UserProps[]>([])

  useEffect(() => {
    userApi.get('/marcos-jesus').then((response) => {
      setUser([response.data])
    })
  }, [])

  return (
    <PostContainer>
      {user.map((use, index) => {
        return (
          <>
            <PostHeader>
              <PostInformation key={index}>
                <PostImage src={use.avatar_url} />
                <PostAuthor key={use.id}>
                  <strong>{use.name}</strong>
                  <span>Frontend Engineer</span>
                </PostAuthor>
              </PostInformation>

              <time
                title="10 de Janeiro às 21:31h"
                dateTime="2023-01-10 21:31:00"
              >
                Publicado há 1h
              </time>
            </PostHeader>
          </>
        )
      })}

      <PostContent>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
          voluptatibus debitis cum exercitationem nostrum! Sequi magnam sint
          doloribus. Optio veritatis fuga esse commodi, natus vitae provident!
          Sunt obcaecati nihil quisquam.
        </p>
      </PostContent>
    </PostContainer>
  )
}
