/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import App from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { GoogleFont } from 'react-typography';
import { Auth } from '@supabase/ui';

import { getLocale, getMessages } from 'i18n';

import 'global-styles';
import IntlProvider from 'theme/IntlProvider';
import typography from 'theme/Typography';

import { supabase } from 'services/supabase';

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
          <GoogleFont typography={typography} />
          <style data-typography>{typography.toString()}</style>
        </Head>
        <IntlProvider locale={locale || 'en'} messages={messages}>
          <Auth.UserContextProvider supabaseClient={supabase}>
            <Component {...pageProps} />
          </Auth.UserContextProvider>
        </IntlProvider>
      </>
    );
  }
}

export default MyApp;
