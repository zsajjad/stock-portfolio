import { useState, useEffect, createContext, useContext } from 'react';
import {
  createIntl,
  createIntlCache,
  RawIntlProvider,
  IntlConfig,
} from 'react-intl';
import cookie from 'js-cookie';
import { getMessages } from 'i18n';

type localeType = IntlConfig['locale'];
type messagesType = IntlConfig['messages'];

interface ContextProps {
  setLocale: (locale: localeType) => void;
  locale: localeType;
  messages: messagesType;
}

const LocaleContext = createContext<any>({});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useLocale = () => useContext<ContextProps>(LocaleContext);

const cache = createIntlCache();

const IntlProvider: React.FC<Pick<ContextProps, 'locale' | 'messages'>> = ({
  children,
  locale,
  messages,
}) => {
  const [intl, setIntl] = useState(createIntl({ locale, messages }, cache));

  const setLocale = async (nextLocale: localeType) => {
    // only triggered by used in this case go and fetch new locale data
    const nextMessages = await getMessages(nextLocale);
    setIntl(createIntl({ locale: nextLocale, messages: nextMessages }, cache));
    cookie.set('locale', nextLocale, { expires: 365 });
  };

  useEffect(() => {
    setIntl(createIntl({ locale, messages }, cache));
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ setLocale }}>
      <RawIntlProvider value={intl}>{children}</RawIntlProvider>
    </LocaleContext.Provider>
  );
};
export default IntlProvider;
