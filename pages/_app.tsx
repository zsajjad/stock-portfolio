/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import App from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';

// import { GoogleFont } from 'react-typography';

import { getLocale, getMessages } from 'i18n';
import 'global-styles';

import IntlProvider from 'theme/IntlProvider';
import typography from 'theme/Typography';

const loadSideEffects = () => {};

class MyApp extends App<{
  locale: string;
  messages: any;
  router: Router;
}> {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const locale = (await getLocale(ctx)) || 'en';
    const messages = await getMessages(locale);

    return { pageProps, locale, messages };
  }

  static async getInitialProps(context) {
    const fullProps = await App.getInitialProps(context);
    return fullProps;
  }

  componentDidMount() {
    loadSideEffects();
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;
    return (
      <>
        <Head>
          <title>Stock Trading - Supabase</title>
          <style data-typography>{typography.toString()}</style>
          {/* <GoogleFont typography={typography} /> */}
        </Head>
        <IntlProvider locale={locale || 'en'} messages={messages}>
          <Component {...pageProps} />
        </IntlProvider>
      </>
    );
  }
}

export default MyApp;
