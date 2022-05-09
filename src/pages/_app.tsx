import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import { Header, VerticalNavigation } from "components/layout";
import GlobalProvider from "lib/providers/GlobalProvider";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600"
          rel="stylesheet"
        />
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
      </Head>
      <GlobalProvider>
        <Header />
        <VerticalNavigation />
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
};

export default appWithTranslation(App);
