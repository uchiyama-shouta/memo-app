import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

import { ApolloProviderWrapper } from "lib/ApolloProviderWrapper";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider>
      <SignedIn>
        <ApolloProviderWrapper>
          <Component {...pageProps} />
        </ApolloProviderWrapper>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};
export default MyApp;
