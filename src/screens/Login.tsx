import { useMutation } from "@tanstack/react-query";
import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import get from "lodash/get";
import Button from "../components/Button";
import { user } from "../constants";
import { graphQLClient, request } from "../gql/queryClient";
import { paths } from "../routes/constant";
import { useAuthenticateStore } from "../global/authenticateSlice";
import { graphql } from "../gql";
import { LoginUserInput } from "../gql/graphql";

const Login = () => {
  const { setLoading, setTokens } = useAuthenticateStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState(user.email ?? null);
  const [pwd, setPwd] = useState(user.pwd ?? null);

  const mutation = useMutation({
    mutationFn: async (loginUserInput: LoginUserInput) => {
      const loginMutation = graphql(`
        mutation Mutation($loginUserInput: LoginUserInput) {
          login(loginUserInput: $loginUserInput) {
            ... on LoginBasicResponse {
              accessToken
              refreshToken
              tenantId
            }
          }
        }
      `);
      const variables = {
        loginUserInput,
      };
      const data = await request(loginMutation, variables);
      return data;
    },
  });

  const handleLogin = useCallback(() => {
    setLoading(true);
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
          setTokens({
            accessToken,
            refreshToken,
          });
          setLoading(false);
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
      <br />
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
