import { ReactNode, createContext, useContext, useState } from "react";

export type AuthValue = [string | null, React.Dispatch<React.SetStateAction<string | null>>];

const AuthContext = createContext<AuthValue>([null, () => null]);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useState<string | null>(localStorage.getItem("token"));

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const [token, setToken] = useContext(AuthContext);

  const persist = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const remove = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return { token, persist, remove };
};
