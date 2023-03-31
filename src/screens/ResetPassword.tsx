import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../routes/constant";
import Button from "../components/Button";
import { graphql } from "../gql";
import { request } from "../gql/queryClient";
import { useMutation } from "@tanstack/react-query";
import { get } from "lodash";
import { user } from "../constants";
import { toast } from "react-toastify";
import { ResendVerifyEmailMutationVariables } from "../gql/graphql";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(user.email ?? "");

  const mutation = useMutation({
    mutationFn: async (variables: ResendVerifyEmailMutationVariables) => {
      const resendVerifyEmailMutation = graphql(`
        mutation ResendVerifyEmail($email: String!) {
          auth {
            resendVerifyEmail(email: $email) {
              sent
            }
          }
        }
      `);
      const data = await request(resendVerifyEmailMutation, variables);
      return data;
    },
  });

  const handleResetPassword = useCallback(() => {
    const variables = { email };
    mutation.mutate(variables, {
      onSuccess(data) {
        const sent = get(data, ["auth", "resendVerifyEmail", "sent"]);
        if (sent) {
          toast("Successfully! Email is sent", {
            type: toast.TYPE.SUCCESS,
          });
        }
      },
    });
  }, [email]);

  const navigateLogin = useCallback(() => {
    navigate(paths.login);
  }, []);

  return (
    <div>
      ResetPassword
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleResetPassword}>Reset Password</Button>
      <a onClick={navigateLogin}>Back to login</a>
    </div>
  );
};

export default ResetPassword;
