import { createContext, FC, Dispatch, SetStateAction, useContext, useState, ReactNode} from 'react';

interface Props {
    children : ReactNode;
}

export interface AuthContextType {
    userId: string;
    setUserId: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: FC<Props> = ({ children }) => {
  const [userId, setUserId] = useState("")

  const value = {
      userId,
      setUserId
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
