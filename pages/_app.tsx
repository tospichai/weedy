import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { NextRouter, useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import th from "../lang/th.json";
import en from "../lang/en.json";

const messages = {
  th,
  en,
};

function MyApp({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter()
  const locale: 'th' | 'en' = router.locale as 'th' | 'en'
  return (
    <Layout>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    </Layout>
  );
}

export default MyApp;
