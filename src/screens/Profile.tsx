import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthenticateStore } from "../global/authenticateSlice";
import { graphql } from "../gql";
import { request } from "../gql/queryClient";

const useProfile = () => {
  const profileQuery = graphql(`
    query getMe {
      auth {
        getMe {
          id
          email
          confirmationCode
          confirmationCodeIat
          refreshTokenKey
          resetPasswordCode
          resetPasswordCodeIat
          password {
            isSet
          }
          googleId
          facebookId
          firstName
          lastName
          phone
          metaData
          recoveryCode
          recoverySentAt
          refreshToken
          refreshSentAt
          facebookCode
          facebookSentAt
          googleCode
          googleSentAt
          isSuperAdmin
          isVerified
          isBanned
          isDeleted
          isMFAEmail
          authType
          photo {
            id
            filesize
            width
            height
            extension
            url
          }
          lastSignInAt
          createdAt
          updatedAt
        }
      }
    }
  `);
  return useQuery<unknown, Error>(
    ["profile"],
    async () => {
      const data = await request(profileQuery);
      return data;
    },
    {
      retry: false,
    }
  );
};

const Profile = () => {
  const accessToken = useAuthenticateStore((state) => state.accessToken);
  const { isLoading, isError, data, error, isFetching, refetch } = useProfile();
  useEffect(() => {
    if (accessToken) {
      refetch();
    }
  }, [accessToken]);
  return (
    <div>
      Profile
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{JSON.stringify(data)}</h1>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
};

export default Profile;
