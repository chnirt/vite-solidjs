import { useMutation } from "@tanstack/react-query";
import { get } from "lodash";
import {
  // Fragment,
  useCallback,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Button from "../components/Button";
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

  const handleRegisterGithub = useCallback(() => {}, []);

  const handleRegisterTwitter = useCallback(() => {}, []);

  const navigateLogin = useCallback(() => {
    navigate(paths.login);
  }, []);

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src="../assets/img/create-account-office.jpeg"
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src="../assets/img/create-account-office-dark.jpeg"
              alt="Office"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Email</span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Jane Doe"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Password
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="***************"
                  type="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Confirm password
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="***************"
                  type="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </label>
              <div className="flex mt-6 text-sm">
                <label className="flex items-center dark:text-gray-400">
                  <input
                    type="checkbox"
                    className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  />
                  <span className="ml-2">
                    I agree to the{` `}
                    <span className="underline">privacy policy</span>
                  </span>
                </label>
              </div>
              {/* You should use a button here, as the anchor is only used for the example  */}
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                // href="./login.html"
                onClick={handleRegister}
              >
                Create account
              </button>
              <hr className="my-8" />
              <button
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                onClick={handleRegisterGithub}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Github
              </button>
              <button
                className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                onClick={handleRegisterTwitter}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
                Twitter
              </button>
              <p className="mt-4">
                <a
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  // href="./login.html"
                  onClick={navigateLogin}
                >
                  Already have an account? Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <Fragment>
  //     Register Page
  //     <br />
  //     <input
  //       type="email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <input
  //       type="password"
  //       value={pwd}
  //       onChange={(e) => setPwd(e.target.value)}
  //     />
  //     <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
  //     <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
  //     <input value={phone} onChange={(e) => setPhone(e.target.value)} />
  //     <Button onClick={handleRegister}>Register</Button>
  //     <a onClick={navigateLogin}>Back to login</a>
  //   </Fragment>
  // );
};

export default Register;
