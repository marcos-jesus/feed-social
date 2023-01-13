import { createContext, ReactNode } from 'react'
import { useFetch } from '../hooks/axios'

interface Repositories {
  id: number
  node_id: string
  full_name: string
  description: string
  type: string
  visibility: string
  created_at: string
}

interface PostContextType {
  data: Repositories[]
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostProvider({ children }: PostProviderProps) {
  const { data } = useFetch<Repositories[]>(
    'https://api.github.com/users/marcos-jesus/repos',
  )

  return (
    <PostContext.Provider value={{ data }}>{children}</PostContext.Provider>
  )
}
