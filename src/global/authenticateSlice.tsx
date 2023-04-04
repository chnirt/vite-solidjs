import { create, StateCreator } from "zustand";
// import { devtools } from "zustand/middleware";
import { computed } from "zustand-middleware-computed-state";
import { graphQLClient } from "../gql/queryClient";

interface Token {
  accessToken: string;
  refreshToken: string;
}

interface AuthenticateState {
  isLoading: boolean;
  isLoaded: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  setLoading: (isLoading: boolean) => void;
  setTokens: (token: Token) => void;
  removeTokens: () => void;
  checkTokens: () => void;
}

interface ComputedAuthenticateStore {
  isSignedIn: boolean;
}

export const createAuthenticateStore: StateCreator<
  AuthenticateState,
  [],
  [],
  AuthenticateState
> = (set) => ({
  isLoading: true,
  isLoaded: false,
  accessToken: null,
  refreshToken: null,
  setLoading: (isLoading: boolean) =>
    set((state: AuthenticateState) => ({ ...state, isLoading })),
  setTokens: ({ accessToken, refreshToken }: Token): void => {
    set((state: AuthenticateState) => ({
      ...state,
      accessToken,
      refreshToken,
    }));
    localStorage.setItem("access-token", accessToken);
    localStorage.setItem("refresh-token", refreshToken);
  },
  removeTokens: () => {
    set((state) => ({ ...state, accessToken: null, refreshToken: null }));
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
  },
  checkTokens: () => {
    const accessToken = localStorage.getItem("access-token");
    const refreshToken = localStorage.getItem("refresh-token");
    set((state: AuthenticateState) => ({
      ...state,
      ...(accessToken && refreshToken
        ? {
            accessToken,
            refreshToken,
          }
        : {}),
      isLoaded: true,
    }));
  },
});

const computedAuthenticateStore = (
  state: AuthenticateState
): ComputedAuthenticateStore => {
  let isSignedIn = Boolean(state.accessToken) && Boolean(state.refreshToken);
  state.accessToken &&
    graphQLClient.setHeaders({
      authorization: `Bearer ${state.accessToken}`,
    });

  return {
    isSignedIn,
  };
};

export const useAuthenticateStore = create<
  AuthenticateState & ComputedAuthenticateStore
>(computed<any, any>(createAuthenticateStore, computedAuthenticateStore));
