import { ReactNode, createContext, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<any>({});

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
