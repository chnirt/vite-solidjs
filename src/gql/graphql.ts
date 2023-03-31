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
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthMutations = {
  __typename?: 'AuthMutations';
  changePassword?: Maybe<AuthenticatedUserSuccess>;
  login?: Maybe<AuthenticatedUserSuccess>;
  refreshNewToken?: Maybe<AuthenticatedUserSuccess>;
  requestResetPassword?: Maybe<Scalars['Boolean']>;
  resendMFACode?: Maybe<Scalars['Boolean']>;
  resendVerifyEmail?: Maybe<ResendVerifyAccountEmailResponse>;
  resetPassword?: Maybe<User>;
  signUp?: Maybe<SignUpResponse>;
  verifyAccount?: Maybe<VerifyAccountResponse>;
  verifyFacebookAuthCode?: Maybe<AuthenticatedUserSuccess>;
  verifyFacebookAuthCodeAdmin?: Maybe<UserAuthenticationWithPasswordResult>;
  verifyGoogleAuthCode?: Maybe<AuthenticatedUserSuccess>;
  verifyGoogleAuthCodeAdmin?: Maybe<UserAuthenticationWithPasswordResult>;
  verifyMFACode?: Maybe<AuthenticatedUserSuccess>;
};


export type AuthMutationsChangePasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type AuthMutationsLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type AuthMutationsRefreshNewTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']>;
};


export type AuthMutationsRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type AuthMutationsResendMfaCodeArgs = {
  email: Scalars['String'];
};


export type AuthMutationsResendVerifyEmailArgs = {
  email: Scalars['String'];
};


export type AuthMutationsResetPasswordArgs = {
  newPassword: Scalars['String'];
  resetPasswordCode: Scalars['String'];
};


export type AuthMutationsSignUpArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};


export type AuthMutationsVerifyAccountArgs = {
  code: Scalars['String'];
};


export type AuthMutationsVerifyFacebookAuthCodeArgs = {
  facebookLoginToken: Scalars['String'];
};


export type AuthMutationsVerifyFacebookAuthCodeAdminArgs = {
  facebookLoginToken: Scalars['String'];
};


export type AuthMutationsVerifyGoogleAuthCodeArgs = {
  googleLoginToken: Scalars['String'];
};


export type AuthMutationsVerifyGoogleAuthCodeAdminArgs = {
  googleLoginToken: Scalars['String'];
};


export type AuthMutationsVerifyMfaCodeArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type AuthQueries = {
  __typename?: 'AuthQueries';
  getMe?: Maybe<User>;
};

export type AuthenticatedItem = User;

export type AuthenticatedUserSuccess = {
  __typename?: 'AuthenticatedUserSuccess';
  accessToken?: Maybe<Scalars['String']>;
  isSentMFACode?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  isSingleton: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mfa = {
  __typename?: 'MFA';
  createdAt?: Maybe<Scalars['DateTime']>;
  factorType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  issuedAt?: Maybe<Scalars['DateTime']>;
  secret?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
};

export type MfaCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  factorType?: InputMaybe<Scalars['String']>;
  issuedAt?: InputMaybe<Scalars['DateTime']>;
  secret?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  verifiedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MfaOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  factorType?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  issuedAt?: InputMaybe<OrderDirection>;
  secret?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  verifiedAt?: InputMaybe<OrderDirection>;
};

export type MfaUpdateArgs = {
  data: MfaUpdateInput;
  where: MfaWhereUniqueInput;
};

export type MfaUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  factorType?: InputMaybe<Scalars['String']>;
  issuedAt?: InputMaybe<Scalars['DateTime']>;
  secret?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  verifiedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MfaWhereInput = {
  AND?: InputMaybe<Array<MfaWhereInput>>;
  NOT?: InputMaybe<Array<MfaWhereInput>>;
  OR?: InputMaybe<Array<MfaWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  factorType?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  issuedAt?: InputMaybe<DateTimeNullableFilter>;
  secret?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  verifiedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type MfaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth?: Maybe<AuthMutations>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createMFA?: Maybe<Mfa>;
  createMFAS?: Maybe<Array<Maybe<Mfa>>>;
  createPermission?: Maybe<Permission>;
  createPermissions?: Maybe<Array<Maybe<Permission>>>;
  createRole?: Maybe<Role>;
  createRoles?: Maybe<Array<Maybe<Role>>>;
  createSystemConfig?: Maybe<SystemConfig>;
  createSystemConfigs?: Maybe<Array<Maybe<SystemConfig>>>;
  createUser?: Maybe<User>;
  createUserToken?: Maybe<UserToken>;
  createUserTokens?: Maybe<Array<Maybe<UserToken>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteMFA?: Maybe<Mfa>;
  deleteMFAS?: Maybe<Array<Maybe<Mfa>>>;
  deletePermission?: Maybe<Permission>;
  deletePermissions?: Maybe<Array<Maybe<Permission>>>;
  deleteRole?: Maybe<Role>;
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  deleteSystemConfig?: Maybe<SystemConfig>;
  deleteSystemConfigs?: Maybe<Array<Maybe<SystemConfig>>>;
  deleteUser?: Maybe<User>;
  deleteUserToken?: Maybe<UserToken>;
  deleteUserTokens?: Maybe<Array<Maybe<UserToken>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  superAdmin?: Maybe<SuperAdminMutations>;
  updateMFA?: Maybe<Mfa>;
  updateMFAS?: Maybe<Array<Maybe<Mfa>>>;
  updatePermission?: Maybe<Permission>;
  updatePermissions?: Maybe<Array<Maybe<Permission>>>;
  updateRole?: Maybe<Role>;
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  updateSystemConfig?: Maybe<SystemConfig>;
  updateSystemConfigs?: Maybe<Array<Maybe<SystemConfig>>>;
  updateUser?: Maybe<User>;
  updateUserToken?: Maybe<UserToken>;
  updateUserTokens?: Maybe<Array<Maybe<UserToken>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateMfaArgs = {
  data: MfaCreateInput;
};


export type MutationCreateMfasArgs = {
  data: Array<MfaCreateInput>;
};


export type MutationCreatePermissionArgs = {
  data: PermissionCreateInput;
};


export type MutationCreatePermissionsArgs = {
  data: Array<PermissionCreateInput>;
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateRolesArgs = {
  data: Array<RoleCreateInput>;
};


export type MutationCreateSystemConfigArgs = {
  data: SystemConfigCreateInput;
};


export type MutationCreateSystemConfigsArgs = {
  data: Array<SystemConfigCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserTokenArgs = {
  data: UserTokenCreateInput;
};


export type MutationCreateUserTokensArgs = {
  data: Array<UserTokenCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteMfaArgs = {
  where: MfaWhereUniqueInput;
};


export type MutationDeleteMfasArgs = {
  where: Array<MfaWhereUniqueInput>;
};


export type MutationDeletePermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type MutationDeletePermissionsArgs = {
  where: Array<PermissionWhereUniqueInput>;
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type MutationDeleteRolesArgs = {
  where: Array<RoleWhereUniqueInput>;
};


export type MutationDeleteSystemConfigArgs = {
  where?: SystemConfigWhereUniqueInput;
};


export type MutationDeleteSystemConfigsArgs = {
  where: Array<SystemConfigWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserTokenArgs = {
  where: UserTokenWhereUniqueInput;
};


export type MutationDeleteUserTokensArgs = {
  where: Array<UserTokenWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateMfaArgs = {
  data: MfaUpdateInput;
  where: MfaWhereUniqueInput;
};


export type MutationUpdateMfasArgs = {
  data: Array<MfaUpdateArgs>;
};


export type MutationUpdatePermissionArgs = {
  data: PermissionUpdateInput;
  where: PermissionWhereUniqueInput;
};


export type MutationUpdatePermissionsArgs = {
  data: Array<PermissionUpdateArgs>;
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpdateRolesArgs = {
  data: Array<RoleUpdateArgs>;
};


export type MutationUpdateSystemConfigArgs = {
  data: SystemConfigUpdateInput;
  where?: SystemConfigWhereUniqueInput;
};


export type MutationUpdateSystemConfigsArgs = {
  data: Array<SystemConfigUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserTokenArgs = {
  data: UserTokenUpdateInput;
  where: UserTokenWhereUniqueInput;
};


export type MutationUpdateUserTokensArgs = {
  data: Array<UserTokenUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Permission = {
  __typename?: 'Permission';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PermissionRolesArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  orderBy?: Array<RoleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RoleWhereInput;
};


export type PermissionRolesCountArgs = {
  where?: RoleWhereInput;
};

export type PermissionCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PermissionManyRelationFilter = {
  every?: InputMaybe<PermissionWhereInput>;
  none?: InputMaybe<PermissionWhereInput>;
  some?: InputMaybe<PermissionWhereInput>;
};

export type PermissionOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PermissionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  create?: InputMaybe<Array<PermissionCreateInput>>;
};

export type PermissionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  create?: InputMaybe<Array<PermissionCreateInput>>;
  disconnect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<PermissionWhereUniqueInput>>;
};

export type PermissionUpdateArgs = {
  data: PermissionUpdateInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  roles?: InputMaybe<RoleManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PermissionWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  auth?: Maybe<AuthQueries>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  mFA?: Maybe<Mfa>;
  mFAS?: Maybe<Array<Mfa>>;
  mFASCount?: Maybe<Scalars['Int']>;
  permission?: Maybe<Permission>;
  permissions?: Maybe<Array<Permission>>;
  permissionsCount?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars['Int']>;
  systemConfig?: Maybe<SystemConfig>;
  systemConfigs?: Maybe<Array<SystemConfig>>;
  systemConfigsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userToken?: Maybe<UserToken>;
  userTokens?: Maybe<Array<UserToken>>;
  userTokensCount?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryMFaArgs = {
  where: MfaWhereUniqueInput;
};


export type QueryMFasArgs = {
  cursor?: InputMaybe<MfaWhereUniqueInput>;
  orderBy?: Array<MfaOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MfaWhereInput;
};


export type QueryMFasCountArgs = {
  where?: MfaWhereInput;
};


export type QueryPermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type QueryPermissionsArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  orderBy?: Array<PermissionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PermissionWhereInput;
};


export type QueryPermissionsCountArgs = {
  where?: PermissionWhereInput;
};


export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type QueryRolesArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  orderBy?: Array<RoleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RoleWhereInput;
};


export type QueryRolesCountArgs = {
  where?: RoleWhereInput;
};


export type QuerySystemConfigArgs = {
  where?: SystemConfigWhereUniqueInput;
};


export type QuerySystemConfigsArgs = {
  cursor?: InputMaybe<SystemConfigWhereUniqueInput>;
  orderBy?: Array<SystemConfigOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SystemConfigWhereInput;
};


export type QuerySystemConfigsCountArgs = {
  where?: SystemConfigWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserTokenArgs = {
  where: UserTokenWhereUniqueInput;
};


export type QueryUserTokensArgs = {
  cursor?: InputMaybe<UserTokenWhereUniqueInput>;
  orderBy?: Array<UserTokenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserTokenWhereInput;
};


export type QueryUserTokensCountArgs = {
  where?: UserTokenWhereInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  invitedTeamId?: Maybe<Scalars['String']>;
  isActivated?: Maybe<Scalars['Boolean']>;
  isRegisterSuccess?: Maybe<Scalars['Boolean']>;
};

export type ResendVerifyAccountEmailResponse = {
  __typename?: 'ResendVerifyAccountEmailResponse';
  sent?: Maybe<Scalars['Boolean']>;
};

export type Role = {
  __typename?: 'Role';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Permission>>;
  permissionsCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type RolePermissionsArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  orderBy?: Array<PermissionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PermissionWhereInput;
};


export type RolePermissionsCountArgs = {
  where?: PermissionWhereInput;
};

export type RoleCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<PermissionRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RoleManyRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type RoleRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  create?: InputMaybe<Array<RoleCreateInput>>;
};

export type RoleRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  create?: InputMaybe<Array<RoleCreateInput>>;
  disconnect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  set?: InputMaybe<Array<RoleWhereUniqueInput>>;
};

export type RoleUpdateArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<PermissionRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<PermissionManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type RoleWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  isActivated?: Maybe<Scalars['Boolean']>;
  isEmailSent?: Maybe<Scalars['Boolean']>;
  isSignUpSuccess?: Maybe<Scalars['Boolean']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  status?: Maybe<Scalars['Boolean']>;
};

export type SuperAdminMutations = {
  __typename?: 'SuperAdminMutations';
  login?: Maybe<Scalars['Boolean']>;
};

export type SystemConfig = {
  __typename?: 'SystemConfig';
  contactSupportUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  policyUrl?: Maybe<Scalars['String']>;
  termOfUseUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  webAppPreferences?: Maybe<Scalars['JSON']>;
};

export type SystemConfigCreateInput = {
  contactSupportUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  policyUrl?: InputMaybe<Scalars['String']>;
  termOfUseUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webAppPreferences?: InputMaybe<Scalars['JSON']>;
};

export type SystemConfigOrderByInput = {
  contactSupportUrl?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  policyUrl?: InputMaybe<OrderDirection>;
  termOfUseUrl?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type SystemConfigUpdateArgs = {
  data: SystemConfigUpdateInput;
  where?: SystemConfigWhereUniqueInput;
};

export type SystemConfigUpdateInput = {
  contactSupportUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  policyUrl?: InputMaybe<Scalars['String']>;
  termOfUseUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webAppPreferences?: InputMaybe<Scalars['JSON']>;
};

export type SystemConfigWhereInput = {
  AND?: InputMaybe<Array<SystemConfigWhereInput>>;
  NOT?: InputMaybe<Array<SystemConfigWhereInput>>;
  OR?: InputMaybe<Array<SystemConfigWhereInput>>;
  contactSupportUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  policyUrl?: InputMaybe<StringFilter>;
  termOfUseUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type SystemConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  authType?: Maybe<UserAuthTypeType>;
  confirmationCode?: Maybe<Scalars['String']>;
  confirmationCodeIat?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  facebookCode?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  facebookSentAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  googleCode?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  googleSentAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isBanned?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isMFAEmail?: Maybe<Scalars['Boolean']>;
  isSuperAdmin?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  lastSignInAt?: Maybe<Scalars['DateTime']>;
  metaData?: Maybe<Scalars['JSON']>;
  password?: Maybe<PasswordState>;
  phone?: Maybe<Scalars['String']>;
  photo?: Maybe<ImageFieldOutput>;
  recoveryCode?: Maybe<Scalars['String']>;
  recoverySentAt?: Maybe<Scalars['DateTime']>;
  refreshTokenKey?: Maybe<Scalars['String']>;
  resetPasswordCode?: Maybe<Scalars['String']>;
  resetPasswordCodeIat?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum UserAuthTypeType {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  Userpass = 'USERPASS'
}

export type UserAuthTypeTypeNullableFilter = {
  equals?: InputMaybe<UserAuthTypeType>;
  in?: InputMaybe<Array<UserAuthTypeType>>;
  not?: InputMaybe<UserAuthTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserAuthTypeType>>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  authType?: InputMaybe<UserAuthTypeType>;
  confirmationCode?: InputMaybe<Scalars['String']>;
  confirmationCodeIat?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  facebookCode?: InputMaybe<Scalars['String']>;
  facebookId?: InputMaybe<Scalars['String']>;
  facebookSentAt?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  googleCode?: InputMaybe<Scalars['String']>;
  googleId?: InputMaybe<Scalars['String']>;
  googleSentAt?: InputMaybe<Scalars['DateTime']>;
  isBanned?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isMFAEmail?: InputMaybe<Scalars['Boolean']>;
  isSuperAdmin?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastSignInAt?: InputMaybe<Scalars['DateTime']>;
  metaData?: InputMaybe<Scalars['JSON']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<ImageFieldInput>;
  recoveryCode?: InputMaybe<Scalars['String']>;
  recoverySentAt?: InputMaybe<Scalars['DateTime']>;
  refreshTokenKey?: InputMaybe<Scalars['String']>;
  resetPasswordCode?: InputMaybe<Scalars['String']>;
  resetPasswordCodeIat?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  authType?: InputMaybe<OrderDirection>;
  confirmationCode?: InputMaybe<OrderDirection>;
  confirmationCodeIat?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  facebookCode?: InputMaybe<OrderDirection>;
  facebookId?: InputMaybe<OrderDirection>;
  facebookSentAt?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  googleCode?: InputMaybe<OrderDirection>;
  googleId?: InputMaybe<OrderDirection>;
  googleSentAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isBanned?: InputMaybe<OrderDirection>;
  isDeleted?: InputMaybe<OrderDirection>;
  isMFAEmail?: InputMaybe<OrderDirection>;
  isSuperAdmin?: InputMaybe<OrderDirection>;
  isVerified?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  lastSignInAt?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  recoveryCode?: InputMaybe<OrderDirection>;
  recoverySentAt?: InputMaybe<OrderDirection>;
  refreshTokenKey?: InputMaybe<OrderDirection>;
  resetPasswordCode?: InputMaybe<OrderDirection>;
  resetPasswordCodeIat?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserToken = {
  __typename?: 'UserToken';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isRevoked?: Maybe<Scalars['Boolean']>;
  lastLoginAt?: Maybe<Scalars['DateTime']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type UserTokenCreateInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isRevoked?: InputMaybe<Scalars['Boolean']>;
  lastLoginAt?: InputMaybe<Scalars['DateTime']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserTokenOrderByInput = {
  accessToken?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isRevoked?: InputMaybe<OrderDirection>;
  lastLoginAt?: InputMaybe<OrderDirection>;
  refreshToken?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type UserTokenUpdateArgs = {
  data: UserTokenUpdateInput;
  where: UserTokenWhereUniqueInput;
};

export type UserTokenUpdateInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isRevoked?: InputMaybe<Scalars['Boolean']>;
  lastLoginAt?: InputMaybe<Scalars['DateTime']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserTokenWhereInput = {
  AND?: InputMaybe<Array<UserTokenWhereInput>>;
  NOT?: InputMaybe<Array<UserTokenWhereInput>>;
  OR?: InputMaybe<Array<UserTokenWhereInput>>;
  accessToken?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isRevoked?: InputMaybe<BooleanFilter>;
  lastLoginAt?: InputMaybe<DateTimeNullableFilter>;
  refreshToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  authType?: InputMaybe<UserAuthTypeType>;
  confirmationCode?: InputMaybe<Scalars['String']>;
  confirmationCodeIat?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  facebookCode?: InputMaybe<Scalars['String']>;
  facebookId?: InputMaybe<Scalars['String']>;
  facebookSentAt?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  googleCode?: InputMaybe<Scalars['String']>;
  googleId?: InputMaybe<Scalars['String']>;
  googleSentAt?: InputMaybe<Scalars['DateTime']>;
  isBanned?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isMFAEmail?: InputMaybe<Scalars['Boolean']>;
  isSuperAdmin?: InputMaybe<Scalars['Boolean']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastSignInAt?: InputMaybe<Scalars['DateTime']>;
  metaData?: InputMaybe<Scalars['JSON']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<ImageFieldInput>;
  recoveryCode?: InputMaybe<Scalars['String']>;
  recoverySentAt?: InputMaybe<Scalars['DateTime']>;
  refreshTokenKey?: InputMaybe<Scalars['String']>;
  resetPasswordCode?: InputMaybe<Scalars['String']>;
  resetPasswordCodeIat?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  authType?: InputMaybe<UserAuthTypeTypeNullableFilter>;
  confirmationCode?: InputMaybe<StringNullableFilter>;
  confirmationCodeIat?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  facebookCode?: InputMaybe<StringFilter>;
  facebookId?: InputMaybe<StringFilter>;
  facebookSentAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  googleCode?: InputMaybe<StringFilter>;
  googleId?: InputMaybe<StringFilter>;
  googleSentAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isBanned?: InputMaybe<BooleanFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  isMFAEmail?: InputMaybe<BooleanFilter>;
  isSuperAdmin?: InputMaybe<BooleanFilter>;
  isVerified?: InputMaybe<BooleanFilter>;
  lastName?: InputMaybe<StringFilter>;
  lastSignInAt?: InputMaybe<DateTimeNullableFilter>;
  phone?: InputMaybe<StringFilter>;
  recoveryCode?: InputMaybe<StringFilter>;
  recoverySentAt?: InputMaybe<DateTimeNullableFilter>;
  refreshTokenKey?: InputMaybe<StringFilter>;
  resetPasswordCode?: InputMaybe<StringNullableFilter>;
  resetPasswordCodeIat?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type VerifyAccountResponse = {
  __typename?: 'VerifyAccountResponse';
  verified?: Maybe<Scalars['Boolean']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', auth?: { __typename?: 'AuthMutations', login?: { __typename?: 'AuthenticatedUserSuccess', accessToken?: string | null, refreshToken?: string | null, isSentMFACode?: boolean | null } | null } | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', auth?: { __typename?: 'AuthQueries', getMe?: { __typename?: 'User', email?: string | null, id: string, confirmationCode?: string | null, confirmationCodeIat?: any | null, refreshTokenKey?: string | null, resetPasswordCode?: string | null, resetPasswordCodeIat?: any | null, googleId?: string | null, facebookId?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, metaData?: any | null, recoveryCode?: string | null, recoverySentAt?: any | null, facebookCode?: string | null, facebookSentAt?: any | null, googleCode?: string | null, googleSentAt?: any | null, isSuperAdmin?: boolean | null, isVerified?: boolean | null, isBanned?: boolean | null, isDeleted?: boolean | null, isMFAEmail?: boolean | null, authType?: UserAuthTypeType | null, lastSignInAt?: any | null, createdAt?: any | null, updatedAt?: any | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null, photo?: { __typename?: 'ImageFieldOutput', id: string, filesize: number, width: number, height: number, extension: ImageExtension, url: string } | null } | null } | null };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', auth?: { __typename?: 'AuthMutations', signUp?: { __typename?: 'SignUpResponse', isActivated?: boolean | null, isSignUpSuccess?: boolean | null, isEmailSent?: boolean | null } | null } | null };

export type ResendVerifyEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResendVerifyEmailMutation = { __typename?: 'Mutation', auth?: { __typename?: 'AuthMutations', resendVerifyEmail?: { __typename?: 'ResendVerifyAccountEmailResponse', sent?: boolean | null } | null } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"isSentMFACode"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"confirmationCode"}},{"kind":"Field","name":{"kind":"Name","value":"confirmationCodeIat"}},{"kind":"Field","name":{"kind":"Name","value":"refreshTokenKey"}},{"kind":"Field","name":{"kind":"Name","value":"resetPasswordCode"}},{"kind":"Field","name":{"kind":"Name","value":"resetPasswordCodeIat"}},{"kind":"Field","name":{"kind":"Name","value":"googleId"}},{"kind":"Field","name":{"kind":"Name","value":"facebookId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"metaData"}},{"kind":"Field","name":{"kind":"Name","value":"recoveryCode"}},{"kind":"Field","name":{"kind":"Name","value":"recoverySentAt"}},{"kind":"Field","name":{"kind":"Name","value":"facebookCode"}},{"kind":"Field","name":{"kind":"Name","value":"facebookSentAt"}},{"kind":"Field","name":{"kind":"Name","value":"googleCode"}},{"kind":"Field","name":{"kind":"Name","value":"googleSentAt"}},{"kind":"Field","name":{"kind":"Name","value":"isSuperAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isBanned"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"isMFAEmail"}},{"kind":"Field","name":{"kind":"Name","value":"authType"}},{"kind":"Field","name":{"kind":"Name","value":"lastSignInAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"password"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSet"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isActivated"}},{"kind":"Field","name":{"kind":"Name","value":"isSignUpSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailSent"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const ResendVerifyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResendVerifyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendVerifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sent"}}]}}]}}]}}]} as unknown as DocumentNode<ResendVerifyEmailMutation, ResendVerifyEmailMutationVariables>;