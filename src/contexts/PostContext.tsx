import { ReactNode, createContext, useState, useEffect } from 'react'
import { repositoryApi } from '../lib/axios'

interface Repositories {
  id: number
  node_id: number
  name: string
  avatar_url: string
  type: string
  owner: []
}
interface PostContextType {
  repositories: Repositories | null
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostProvider({ children }: PostProviderProps) {
  const [repositories, setRepositories] = useState<Repositories[]>([])

  useEffect(() => {
    repositoryApi.get('/marcos-jesus/repos').then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <PostContext.Provider value={repositories}>{children}</PostContext.Provider>
  )
}
