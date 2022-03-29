import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

import { ApolloProviderWrapper } from "lib/ApolloProviderWrapper";
import { Layout } from "components/layout/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider>
      <SignedIn>
        <ApolloProviderWrapper>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MantineProvider>
        </ApolloProviderWrapper>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};
export default MyApp;
