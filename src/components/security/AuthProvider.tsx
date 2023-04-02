import { ReactNode, createContext, useState } from "react";

export type AuthData = { token: string };
const useAuth = () => {
  const [auth, setAuth] = useState<AuthData | null>(null);
  const login = () => setAuth({ token: "TOKEN" });
  const logout = () => setAuth(null);

  return { auth, login, logout };
};

export type AuthContextValueType = ReturnType<typeof useAuth>;
export const AuthContext = createContext<AuthContextValueType>({ auth: null, login: () => {}, logout: () => {} });

export type AuthProviderProps = { children: ReactNode };
const AuthProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
