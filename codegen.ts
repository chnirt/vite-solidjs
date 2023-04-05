import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: process.env.VITE_ROOT_URL,
  schema:
    process.env.VITE_BASE_URL ??
    "https://graphql.staging.jsb.groovetechnology.co/api/graphql",
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
