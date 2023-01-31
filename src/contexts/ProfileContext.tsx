import { createContext, ReactNode } from "react";
import { useFetch } from "../hooks/axios";

interface Profile {
    id: number,
    avatar_url: string,
    name: string
}

interface ProfileContextType {
    data: Profile[]
}

interface ProfileProviderProps {
    children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType )

export function ProfileProvider({children}: ProfileProviderProps) {
    const { data } = useFetch<Profile[]>('marcos-jesus')
    
    return (
      <ProfileContext.Provider value={{data}}>
        {children}
      </ProfileContext.Provider>
    )
  }