import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import PhotoContainer from '@components/logo_maker/photoContainer/PhotoContainer';
import PhotoControl from '@components/logo_maker/photoControl/PhotoControl';
import {
  logoMakerOptionsContext as LogoMakerContext,
  initalOptions,
  LogoMakerReducer
} from '~/src/components/logo_maker/context';
import { useReducer, useState } from 'react';
import { useTheme } from '~/src/hooks/useTheme';
import classnames from 'classnames';
import OtherOptions from '~/src/components/logo_maker/otherOptions/OtherOptions';
import styles from '../styles/pages/logoMaker.module.scss';

const LogoMake: NextPage = () => {
  const [logoState, dispatchLogo] = useReducer(LogoMakerReducer, initalOptions);
  // 切换页面主题
  const theme = useTheme();

  // 用于刷新页面
  const [refresh, setRefresh] = useState(0);

  function toRefresh() {
    setRefresh(Math.random());
  }
  const container = classnames({
    [styles.container]: true,
    [styles.dark]: theme == 'dark'
  });

  return (
    <div className={container}>
      <Head>
        <title>MI STYLE LOGO MAKER</title>
        <meta name="description" content="MI STYLE LOGO MAKER" />
        <link rel="icon" href="/xiaoyu_tools/logo.png" />
      </Head>

      <Header siteName="MI STYLE LOGO MAKER" />


      <LogoMakerContext.Provider value={{ logoState, dispatchLogo }}>
        <main className={styles.logoMaker}>
          <div className={styles.photoContainer}>
            <PhotoContainer refresh={refresh} />
            <PhotoControl onRefresh={toRefresh} />
          </div>
          <OtherOptions onRefresh={toRefresh} />
        </main>
      </LogoMakerContext.Provider>


      <Footer />
    </div>
  );
};
export default LogoMake;
