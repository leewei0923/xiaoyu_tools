import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';
import { Sun, Moon } from '@icon-park/react';
import HandleStorage from '../src/utils/HandleStorage';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  /**
   * theme: 全局
   * author: leewei
   * time: 2022.06.07
   */
  const handleStorage = new HandleStorage();

  /**
   * theme: 更改主题样式
   * time: 2022.06.07
   * author: leewei
   * modify:
   */
  const [themeState, setThemeState] = useState('');
  const container = classnames({
    [styles.container]: true,
    [styles.dark]: themeState === 'dark'
  });

  // 点击 switchThemeBtn 事件
  const onChangeTheme = () => {
    if (themeState === 'dark') {
      setThemeState('light');
      handleStorage.setStorage('theme', 'light');
    } else {
      setThemeState('dark');
      handleStorage.setStorage('theme', 'dark');
    }
  };

  /**
   * theme: useEffect
   * auhor: leewei
   * time: 2022.06.07
   */
  useEffect(() => {
    setThemeState(handleStorage.getStorage('theme'));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={container}>
      <Head>
        <title>xiaoyu&apos;s tools</title>
        <meta name="description" content="xiaoyu's tools" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className={styles.header} onClick={() => onChangeTheme()}>
        <div className={styles.switchThemeBtn}>
          {themeState === 'dark' ? (
            <Sun className={styles.iconpark} theme="filled" size="20" fill="#fff" />
          ) : (
            <Moon className={styles.iconpark} theme="filled" size="20" fill="#fff" />
          )}
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.grdientColorText}>xiaoyu&apos;s tools!</span>
        </h1>

        <p className={styles.description}>
          Start Use
          <code className={styles.code}>gradient-color-palette</code>
        </p>

        <div className={styles.grid}>
          {/* gradient color plate */}
          <Link href="/gradient_color_palette">
            <a className={styles.card}>
              <h2>Gradient Color Palette →</h2>
              <p>best gradient color , you can using !</p>
            </a>
          </Link>

          {/* component demos */}
          <Link href="/component_demos">
            <a className={styles.card}>
              <h2>Component Demos →</h2>
              <p>Choosem which you like the componnet to apply to your site !</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by
          <span className={styles.logo}>
            <Image src="/logo.png" alt="xiaoyu Logo" width={40} height={40} />
          </span>
          <strong>Leewei</strong>
        </p>
      </footer>
    </div>
  );
};

export default Home;
