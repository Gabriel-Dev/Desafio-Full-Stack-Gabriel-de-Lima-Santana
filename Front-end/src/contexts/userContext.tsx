import { ReactNode, createContext} from "react"

interface UserProviderProps {
  children: ReactNode
}

interface UserContextValues {
  
}

export const UserContext = createContext<UserContextValues>({} as UserContextValues);

export const UserProvider = ({ children }: UserProviderProps) => {
 
  return (
    <UserContext.Provider value={{ }}>
      {children}
    </UserContext.Provider>
  )
}