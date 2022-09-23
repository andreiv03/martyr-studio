import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Context, ContextProvider } from "../context";

import "../styles/globals.scss";
const LoadingScreen = dynamic(() => import("../components/loading-screen"));
const Header = dynamic(() => import("../components/header"));
const Menu = dynamic(() => import("../components/menu"));

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextProvider>
      <Context.Consumer>
        {({ isFirstVisit: [isFirstVisit], isMenuOpen: [isMenuOpen] }) => (
          <HelmetProvider>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <title>Martyr Studio — Premium marketing and branding services</title>
            </Head>

            <Helmet>
              <body className={(isFirstVisit || isMenuOpen) ? "overflow_hidden" : ""} />
            </Helmet>

            {isFirstVisit && <LoadingScreen />}
            <Header />
            <Menu />
            <Component {...pageProps} />
          </HelmetProvider>
        )}
      </Context.Consumer>
    </ContextProvider>
  );
}

export default App;