import type { ReactNode, VFC } from "react";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth } from "@clerk/nextjs";

const hasuraGraphqlApi = process.env.NEXT_PUBLIC_API_URL;

type Props = {
  children: ReactNode;
};

export const ApolloProviderWrapper: VFC<Props> = ({ children }) => {
  const { getToken } = useAuth();
  const authMiddleware = setContext(async (req, { headers }) => {
    const token = await getToken({ template: "hasura" });

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const httpLink = new HttpLink({
    uri: hasuraGraphqlApi,
  });

  const apolloClient = new ApolloClient({
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            project: {
              merge: true,
            },
          },
        },
      },
    }),
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
