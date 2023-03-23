import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { graphql } from "../gql";
import { request } from "../gql/queryClient";

const useHello = (name: string) => {
  const helloQuery = graphql(`
    query Query($name: String!) {
      hello(name: $name)
    }
  `);
  return useQuery<unknown, Error>(
    ["hello", name],
    async () => {
      const data = await request(helloQuery, { name });
      return data;
    },
    {
      enabled: !!name,
    }
  );
};

const Todos = () => {
  const [name, setName] = useState("");
  const { isLoading, isError, data, error, isFetching } = useHello(name);
  return (
    <div>
      Todos
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        <span>Error: {error?.message}</span>
      ) : (
        <>
          <h1>{JSON.stringify(data)}</h1>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
};

export default Todos;
