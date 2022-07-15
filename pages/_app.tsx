import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@src/redux/store';
import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { loadLocale } from '../locales/index';
import '@arco-design/web-react/dist/css/arco.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState('zh-CN');
  const { locale, message } = loadLocale(lang);
  useEffect(() => {
    if (lang !== window.navigator.language) {
      setLang(window.navigator.language);
    }
  }, [lang]);

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={message}>
        <Component {...pageProps} />
      </IntlProvider>
    </Provider>
  );
}

export default MyApp;
