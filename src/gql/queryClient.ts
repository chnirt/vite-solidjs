import { QueryClient } from "@tanstack/react-query";
import {
  gql,
  GraphQLClient,
  RequestDocument,
  Variables,
} from "graphql-request";
import { RequestConfig } from "graphql-request/build/esm/types";
import get from "lodash/get";
import { toast } from "react-toastify";
import { useAuthenticateStore } from "../global/authenticateSlice";

// Create a client
export const queryClient = new QueryClient();

const tokenLocalStorage = localStorage.getItem("access-token");

const endpoint: string = "https://07cin.sse.codesandbox.io";
const requestConfig: RequestConfig = {
  // credentials: `include`,
  // mode: `cors`,
  headers: {
    ...(tokenLocalStorage
      ? { authorization: `Bearer ${tokenLocalStorage}` }
      : {}),
  },
};

export const graphQLClient = new GraphQLClient(endpoint, requestConfig);

export const request = async <TData>(
  query: RequestDocument,
  variables?: Variables | undefined,
  requestHeaders?: Record<string, string>
) => {
  try {
    // const requestHeaders: HeadersInit = {
    //   authorization: `Bearer MY_TOKEN_2`,
    //   "x-custom": `foo`,
    // };
    const data = await graphQLClient.request<TData>(
      query,
      variables,
      requestHeaders
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};

const handleRefreshToken = async () => {
  try {
    const refreshTokenMutation = gql`
      mutation Mutation($refreshToken: String!) {
        refreshToken(refreshToken: $refreshToken) {
          accessToken
          refreshToken
          tenantId
        }
      }
    `;
    const refreshTokenLocalStorage = localStorage.getItem("refresh-token");
    const variables = {
      refreshToken: refreshTokenLocalStorage,
    };
    interface TData {
      login: { accessToken: string; refreshToken: string };
    }
    const data = await graphQLClient.request<TData>(
      refreshTokenMutation,
      variables
    );
    const newAccessToken = get(data, ["refreshToken", "accessToken"]);
    const newRefreshToken = get(data, ["refreshToken", "refreshToken"]);
    useAuthenticateStore.setState({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
    localStorage.setItem("access-token", newAccessToken);
    localStorage.setItem("refresh-token", newRefreshToken);
    graphQLClient.setHeaders({
      authorization: `Bearer ${newAccessToken}`,
    });
  } catch (error) {
    useAuthenticateStore.setState({
      accessToken: null,
      refreshToken: null,
    });
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    throw error;
  }
};

const handleError = async <T>(error: T) => {
  const firstError = get(error, ["response", "errors", 0]);
  const code = get(firstError, ["extensions", "code"]);
  const message = get(firstError, ["message"]);
  switch (code) {
    case "UNAUTHENTICATED":
      await handleRefreshToken();
      throw error;
    case "BAD_USER_INPUT":
    default:
      toast(message, {
        type: toast.TYPE.ERROR,
      });
      throw error;
  }
};
