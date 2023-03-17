import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { useCallback } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { request } from "../gql/queryClient";
import { useAuth } from "../hooks/useAuth";

const useProfile = () => {
  const profileQuery = gql`
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
  `;
  type Profile = {
    profile: {
      _id: string;
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      sex: boolean;
      twoFactorEnabled: boolean;
      twoFactorSecret: boolean;
    };
  };
  return useQuery<Profile, Error>(
    ["profile"],
    async (): Promise<Profile> => {
      const data = (await request(profileQuery)) as Profile;
      return data;
    },
    {
      retry: false,
    }
  );
};

const Dashboard = () => {
  const { isLoading, isError, data, error, isFetching } = useProfile();
  const { logout } = useAuth();
  const handleLogout = useCallback(() => {
    logout();
  }, []);
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
