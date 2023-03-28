import { useMutation } from "@tanstack/react-query";
import { get } from "lodash";
import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import { registerUser } from "../constants";
import { graphql } from "../gql";
import { AuthMutationsSignUpArgs } from "../gql/graphql";
import { request } from "../gql/queryClient";
import { paths } from "../routes/constant";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>(registerUser.email ?? "");
  const [pwd, setPwd] = useState<string>(registerUser.password ?? "");
  const [firstName, setFirstName] = useState<string>(
    registerUser.firstName ?? ""
  );
  const [lastName, setLastName] = useState<string>(registerUser.lastName ?? "");
  const [phone, setPhone] = useState<string>(registerUser.phone ?? "");

  const mutation = useMutation({
    mutationFn: async (registerUserInput: AuthMutationsSignUpArgs) => {
      const registerMutation = graphql(`
        mutation SignUp(
          $email: String!
          $password: String!
          $firstName: String!
          $lastName: String!
          $phone: String
        ) {
          auth {
            signUp(
              email: $email
              password: $password
              firstName: $firstName
              lastName: $lastName
              phone: $phone
            ) {
              isActivated
              isSignUpSuccess
              isEmailSent
            }
          }
        }
      `);
      const data = await request(registerMutation, registerUserInput);
      return data;
    },
  });

  const handleRegister = useCallback(() => {
    const registerUserInput = {
      email,
      password: pwd,
      firstName,
      lastName,
      phone,
    } as AuthMutationsSignUpArgs;
    mutation.mutate(registerUserInput, {
      onSuccess(data) {
        // const isActivated = get(data, ["auth", "signUp", "isActivated"]);
        const isSignUpSuccess = get(data, [
          "auth",
          "signUp",
          "isSignUpSuccess",
        ]);
        const isEmailSent = get(data, ["auth", "signUp", "isEmailSent"]);
        if (isSignUpSuccess && isEmailSent) {
          toast("Successfully! Email is sent", {
            type: toast.TYPE.SUCCESS,
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
  }, [email, pwd, firstName, lastName, phone]);

  const navigateLogin = useCallback(() => {
    navigate(paths.login);
  }, []);

  return (
    <Fragment>
      Register Page
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
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Button onClick={handleRegister}>Register</Button>
      <a onClick={navigateLogin}>Back to login</a>
    </Fragment>
  );
};

export default Register;
