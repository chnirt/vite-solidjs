import { useMutation } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import get from "lodash/get";
import Button from "../components/Button";
import { user } from "../constants";
import { graphQLClient, request } from "../gql/queryClient";
import { useAuth } from "../hooks/useAuth";
import { paths } from "../routes/constant";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState(user.email ?? null);
  const [pwd, setPwd] = useState(user.pwd ?? null);

  interface UserInput {
    email: string;
    password: string;
  }
  const mutation = useMutation({
    mutationFn: async (loginUserInput: UserInput) => {
      const loginMutation = gql`
        mutation Mutation($loginUserInput: LoginUserInput) {
          login(loginUserInput: $loginUserInput) {
            ... on LoginBasicResponse {
              accessToken
              refreshToken
              tenantId
            }
          }
        }
      `;
      const variables = {
        loginUserInput,
      };
      interface TData {
        login: { accessToken: string; refreshToken: string };
      }
      const data = await request<TData>(loginMutation, variables);
      return data;
    },
  });

  const handleLogin = useCallback(() => {
    const loginUserInput = {
      email,
      password: pwd,
    };
    mutation.mutate(loginUserInput, {
      onSuccess(data) {
        const accessToken = get(data, ["login", "accessToken"]);
        const refreshToken = get(data, ["login", "refreshToken"]);
        if (accessToken && refreshToken) {
          graphQLClient.setHeaders({
            authorization: `Bearer ${accessToken}`,
          });
          login({
            accessToken,
            refreshToken,
          });
        }
      },
      // onError(error) {
      //   const errorMessage = get(error, ["response", "errors", 0, "message"]);
      //   if (errorMessage) {
      //     toast(errorMessage, {
      //       type: toast.TYPE.ERROR,
      //     });
      //   }
      // },
    });
  }, [email, pwd]);

  const navigateRegister = useCallback(() => {
    navigate(paths.register);
  }, []);
  return (
    <Fragment>
      Login Page
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      <a onClick={navigateRegister}>New user? Create account</a>
    </Fragment>
  );
};

export default Login;
