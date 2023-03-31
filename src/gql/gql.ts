/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n        mutation ChangePassword(\n          $currentPassword: String!\n          $newPassword: String!\n        ) {\n          auth {\n            changePassword(\n              currentPassword: $currentPassword\n              newPassword: $newPassword\n            ) {\n              accessToken\n              refreshToken\n              isSentMFACode\n            }\n          }\n        }\n      ": types.ChangePasswordDocument,
    "\n        mutation Login($email: String!, $password: String!) {\n          auth {\n            login(email: $email, password: $password) {\n              accessToken\n              refreshToken\n              isSentMFACode\n            }\n          }\n        }\n      ": types.LoginDocument,
    "\n    # the script will automatically call login and set shared header (token)\n    query getMe {\n      auth {\n        getMe {\n          email\n          id\n          confirmationCode\n          confirmationCodeIat\n          refreshTokenKey\n          resetPasswordCode\n          resetPasswordCodeIat\n          googleId\n          facebookId\n          firstName\n          lastName\n          phone\n          metaData\n          recoveryCode\n          recoverySentAt\n          facebookCode\n          facebookSentAt\n          googleCode\n          googleSentAt\n          isSuperAdmin\n          isVerified\n          isBanned\n          isDeleted\n          isMFAEmail\n          authType\n          lastSignInAt\n          createdAt\n          updatedAt\n          password {\n            isSet\n          }\n          photo {\n            id\n            filesize\n            width\n            height\n            extension\n            url\n          }\n        }\n      }\n    }\n  ": types.GetMeDocument,
    "\n        mutation SignUp(\n          $email: String!\n          $password: String!\n          $firstName: String!\n          $lastName: String!\n          $phone: String\n        ) {\n          auth {\n            signUp(\n              email: $email\n              password: $password\n              firstName: $firstName\n              lastName: $lastName\n              phone: $phone\n            ) {\n              isActivated\n              isSignUpSuccess\n              isEmailSent\n            }\n          }\n        }\n      ": types.SignUpDocument,
    "\n        mutation ResendVerifyEmail($email: String!) {\n          auth {\n            resendVerifyEmail(email: $email) {\n              sent\n            }\n          }\n        }\n      ": types.ResendVerifyEmailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation ChangePassword(\n          $currentPassword: String!\n          $newPassword: String!\n        ) {\n          auth {\n            changePassword(\n              currentPassword: $currentPassword\n              newPassword: $newPassword\n            ) {\n              accessToken\n              refreshToken\n              isSentMFACode\n            }\n          }\n        }\n      "): (typeof documents)["\n        mutation ChangePassword(\n          $currentPassword: String!\n          $newPassword: String!\n        ) {\n          auth {\n            changePassword(\n              currentPassword: $currentPassword\n              newPassword: $newPassword\n            ) {\n              accessToken\n              refreshToken\n              isSentMFACode\n            }\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation Login($email: String!, $password: String!) {\n          auth {\n            login(email: $email, password: $password) {\n              accessToken\n              refreshToken\n              isSentMFACode\n            }\n          }\n        }\n      "): (typeof documents)["\n        mutation Login($email: String!, $password: String!) {\n          auth {\n            login(email: $email, password: $password) {\n              accessToken\n              refreshToken\n              isSentMFACode\n            }\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    # the script will automatically call login and set shared header (token)\n    query getMe {\n      auth {\n        getMe {\n          email\n          id\n          confirmationCode\n          confirmationCodeIat\n          refreshTokenKey\n          resetPasswordCode\n          resetPasswordCodeIat\n          googleId\n          facebookId\n          firstName\n          lastName\n          phone\n          metaData\n          recoveryCode\n          recoverySentAt\n          facebookCode\n          facebookSentAt\n          googleCode\n          googleSentAt\n          isSuperAdmin\n          isVerified\n          isBanned\n          isDeleted\n          isMFAEmail\n          authType\n          lastSignInAt\n          createdAt\n          updatedAt\n          password {\n            isSet\n          }\n          photo {\n            id\n            filesize\n            width\n            height\n            extension\n            url\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    # the script will automatically call login and set shared header (token)\n    query getMe {\n      auth {\n        getMe {\n          email\n          id\n          confirmationCode\n          confirmationCodeIat\n          refreshTokenKey\n          resetPasswordCode\n          resetPasswordCodeIat\n          googleId\n          facebookId\n          firstName\n          lastName\n          phone\n          metaData\n          recoveryCode\n          recoverySentAt\n          facebookCode\n          facebookSentAt\n          googleCode\n          googleSentAt\n          isSuperAdmin\n          isVerified\n          isBanned\n          isDeleted\n          isMFAEmail\n          authType\n          lastSignInAt\n          createdAt\n          updatedAt\n          password {\n            isSet\n          }\n          photo {\n            id\n            filesize\n            width\n            height\n            extension\n            url\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation SignUp(\n          $email: String!\n          $password: String!\n          $firstName: String!\n          $lastName: String!\n          $phone: String\n        ) {\n          auth {\n            signUp(\n              email: $email\n              password: $password\n              firstName: $firstName\n              lastName: $lastName\n              phone: $phone\n            ) {\n              isActivated\n              isSignUpSuccess\n              isEmailSent\n            }\n          }\n        }\n      "): (typeof documents)["\n        mutation SignUp(\n          $email: String!\n          $password: String!\n          $firstName: String!\n          $lastName: String!\n          $phone: String\n        ) {\n          auth {\n            signUp(\n              email: $email\n              password: $password\n              firstName: $firstName\n              lastName: $lastName\n              phone: $phone\n            ) {\n              isActivated\n              isSignUpSuccess\n              isEmailSent\n            }\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation ResendVerifyEmail($email: String!) {\n          auth {\n            resendVerifyEmail(email: $email) {\n              sent\n            }\n          }\n        }\n      "): (typeof documents)["\n        mutation ResendVerifyEmail($email: String!) {\n          auth {\n            resendVerifyEmail(email: $email) {\n              sent\n            }\n          }\n        }\n      "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;