import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import styles from '../styles/pages/logoMaker.module.scss';

const LogoMake: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MI STYLE LOGO MAKER</title>
        <meta name="description" content="MI STYLE LOGO MAKER" />
        <link rel="icon" href="/xiaoyu_tools/logo.png" />
      </Head>

      <Header siteName="MI STYLE LOGO MAKER" />

      <main className={styles.logoMaker}>logo maker</main>

      <Footer />
    </div>
  );
};
export default LogoMake;
