import { useState } from "react";

const useToken = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

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

export default useToken;
