import {
  useState,
  useContext,
  createContext,
  useLayoutEffect,
  PropsWithChildren,
} from "react";

type ContextProps = {
  isAuth: boolean;
  login: (username: string) => boolean;
  logout: () => void;
};

type ProviderProps = {};

const authContext = createContext<ContextProps>({
  isAuth: false,
  login: () => false,
  logout: () => {},
});

function AuthValue() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const login = (username: string): boolean => {
    localStorage.setItem("access-token", username);
    localStorage.setItem("username", username);
    setIsAuth(true);
    return true;
  };

  const logout = (): void => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("username");
    setIsAuth(false);
  };

  useLayoutEffect(() => {
    setIsAuth(!!localStorage.getItem("access-token"));
  }, []);

  return {
    isAuth,
    login,
    logout,
  } as const;
}

export function AuthProvider({ children }: PropsWithChildren<ProviderProps>) {
  return (
    <authContext.Provider value={AuthValue()}>{children}</authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
