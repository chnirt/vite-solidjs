import { useCallback, useState } from "react";
import Button from "../../components/Button";
import { useMutation } from "@tanstack/react-query";
import { graphql } from "../../gql";
import { graphQLClient, request } from "../../gql/queryClient";
import { ChangePasswordMutationVariables } from "../../gql/graphql";
import { get } from "lodash";
import { useAuthenticateStore } from "../../global/authenticateSlice";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [currentPwd, setCurrentPwd] = useState("xxx");
  const [newPwd, setNewPwd] = useState("xxx");
  const { setTokens } = useAuthenticateStore();

  const mutation = useMutation({
    mutationFn: async (registerUserInput: ChangePasswordMutationVariables) => {
      const changePasswordMutation = graphql(`
        mutation ChangePassword(
          $currentPassword: String!
          $newPassword: String!
        ) {
          auth {
            changePassword(
              currentPassword: $currentPassword
              newPassword: $newPassword
            ) {
              accessToken
              refreshToken
              isSentMFACode
            }
          }
        }
      `);
      const data = await request(changePasswordMutation, registerUserInput);
      return data;
    },
  });

  const handleChangePassword = useCallback(() => {
    const variables = {
      currentPassword: currentPwd,
      newPassword: newPwd,
    };
    mutation.mutate(variables, {
      onSuccess(data) {
        const accessToken = get(data, [
          "auth",
          "changePassword",
          "accessToken",
        ]);
        const refreshToken = get(data, [
          "auth",
          "changePassword",
          "refreshToken",
        ]);
        if (accessToken && refreshToken) {
          graphQLClient.setHeaders({
            authorization: `Bearer ${accessToken}`,
          });
          setTokens({
            accessToken,
            refreshToken,
          });
          toast("Successfully! Change password", {
            type: toast.TYPE.SUCCESS,
          });
          setCurrentPwd("");
          setNewPwd("");
        }
      },
    });
  }, [currentPwd, newPwd]);

  return (
    <div>
      ChangePassword
      <input
        type="password"
        value={currentPwd}
        onChange={(e) => setCurrentPwd(e.target.value)}
      />
      <input
        type="password"
        value={newPwd}
        onChange={(e) => setNewPwd(e.target.value)}
      />
      <Button onClick={handleChangePassword}>Change Password</Button>
    </div>
  );
};

export default ChangePassword;
