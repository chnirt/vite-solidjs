/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  sex: Sex;
};

export type Disable2FaResponse = {
  __typename?: 'Disable2FAResponse';
  twoFactorEnabled: Scalars['Boolean'];
  twoFactorSecret?: Maybe<Scalars['String']>;
};

export type Enable2FaResponse = {
  __typename?: 'Enable2FAResponse';
  qrCodeUrl: Scalars['String'];
  twoFactorSecret: Scalars['String'];
};

export type Login2FaResponse = {
  __typename?: 'Login2FAResponse';
  twoFactorEnabled: Scalars['Boolean'];
};

export type LoginBasicResponse = {
  __typename?: 'LoginBasicResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  tenantId: Scalars['String'];
};

export type LoginResponse = Login2FaResponse | LoginBasicResponse;

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  disable2FA: Disable2FaResponse;
  enable2FA: Enable2FaResponse;
  generate2FAToken: Scalars['String'];
  login?: Maybe<LoginResponse>;
  loginV1?: Maybe<LoginBasicResponse>;
  refreshToken?: Maybe<LoginBasicResponse>;
  register?: Maybe<User>;
  verify2FA: Verify2FaResponse;
};


export type MutationDisable2FaArgs = {
  token: Scalars['String'];
};


export type MutationGenerate2FaTokenArgs = {
  secret: Scalars['String'];
};


export type MutationLoginArgs = {
  loginUserInput?: InputMaybe<LoginUserInput>;
};


export type MutationLoginV1Args = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  createUserInput?: InputMaybe<CreateUserInput>;
};


export type MutationVerify2FaArgs = {
  token: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Hello with name */
  hello?: Maybe<Scalars['String']>;
  profile: User;
  search?: Maybe<Array<SearchResult>>;
  server?: Maybe<ServerReponse>;
  user: User;
  users?: Maybe<UserConnection>;
  usersV2?: Maybe<UserResponse>;
};


export type QueryHelloArgs = {
  name: Scalars['String'];
};


export type QuerySearchArgs = {
  contains: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersV2Args = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sex?: InputMaybe<Sex>;
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type SearchResult = Todo | User;

export type ServerReponse = {
  __typename?: 'ServerReponse';
  database: Scalars['String'];
  name: Scalars['String'];
  version: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  sex: Sex;
  twoFactorEnabled?: Maybe<Scalars['Boolean']>;
  twoFactorSecret?: Maybe<Scalars['String']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type UsersResult2 = {
  __typename?: 'UsersResult2';
  data?: Maybe<Array<User>>;
  hasMore: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextCursor?: Maybe<Scalars['ID']>;
};

export type Verify2FaResponse = {
  __typename?: 'Verify2FAResponse';
  twoFactorEnabled: Scalars['Boolean'];
};

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'User', _id: string, email: string, password: string, firstName: string, lastName: string, sex: Sex, twoFactorEnabled?: boolean | null, twoFactorSecret?: string | null } };

export type MutationMutationVariables = Exact<{
  loginUserInput?: InputMaybe<LoginUserInput>;
}>;


export type MutationMutation = { __typename?: 'Mutation', login?: { __typename?: 'Login2FAResponse' } | { __typename?: 'LoginBasicResponse', accessToken: string, refreshToken: string, tenantId: string } | null };

export type QueryQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type QueryQuery = { __typename?: 'Query', hello?: string | null };


export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorSecret"}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginUserInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoginBasicResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}}]}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hello"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;