import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthenticateStore } from "../global/authenticateSlice";
import { graphql } from "../gql";
import { request } from "../gql/queryClient";

const useProfile = () => {
  const profileQuery = graphql(`
    # the script will automatically call login and set shared header (token)
    query getMe {
      auth {
        getMe {
          email
          id
          confirmationCode
          confirmationCodeIat
          refreshTokenKey
          resetPasswordCode
          resetPasswordCodeIat
          googleId
          facebookId
          firstName
          lastName
          phone
          metaData
          recoveryCode
          recoverySentAt
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
          lastSignInAt
          createdAt
          updatedAt
          password {
            isSet
          }
          photo {
            id
            filesize
            width
            height
            extension
            url
          }
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
    <div className="flex">
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
