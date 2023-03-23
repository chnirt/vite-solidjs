import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useAuthenticateStore } from "../global/authenticateSlice";
import { graphql } from "../gql";
import { request } from "../gql/queryClient";

const useProfile = () => {
  const profileQuery = graphql(`
    query Profile {
      profile {
        _id
        email
        password
        firstName
        lastName
        sex
        twoFactorEnabled
        twoFactorSecret
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

const Dashboard = () => {
  const accessToken = useAuthenticateStore((state) => state.accessToken);
  const { isLoading, isError, data, error, isFetching, refetch } = useProfile();
  const { removeTokens } = useAuthenticateStore();
  const handleLogout = useCallback(() => {
    removeTokens();
  }, []);
  useEffect(() => {
    if (accessToken) {
      refetch();
    }
  }, [accessToken]);
  return (
    <div>
      <Navbar />
      Dashboard
      <br />
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
      <Button onClick={handleLogout}>Logout</Button>
      <NavLink to="/todos">+todos</NavLink>
      <NavLink to="/style-guide">+style-guide</NavLink>
      <Outlet />
    </div>
  );
};

export default Dashboard;
