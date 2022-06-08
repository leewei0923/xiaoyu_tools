import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ThemeContext } from '../src/utils/context-manage';
import React from 'react';
import '@icon-park/react/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeContext.Provider value="light">
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
