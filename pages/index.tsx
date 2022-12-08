import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';
import { IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';
import HandleStorage from '../src/utils/HandleStorage';
import { useAppSelector, useAppDispatch } from '@src/redux/hooks';
import { onChangeMode, selectTheme } from '@src/redux/theme/themeSlice';
import { FormattedMessage } from 'react-intl'; // 项目国际化
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  /**
   * theme: 全局
   * author: leewei
   * time: 2022.06.07
   */
  const handleStorage = new HandleStorage();
  const themeMode = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  /**
   * theme: 更改主题样式
   * time: 2022.06.07
   * author: leewei
   * modify:
   */
  const [themeState, setThemeState] = useState('light');

  const container = classnames({
    [styles.container]: true,
    [styles.dark]: themeState === 'dark'
  });

  // 点击 switchThemeBtn 事件
  const onChangeTheme = () => {
    if (themeState === 'dark') {
      setThemeState('light');
      handleStorage.setStorage('theme', 'light');
      dispatch(onChangeMode('light'));
    } else {
      setThemeState('dark');
      handleStorage.setStorage('theme', 'dark');
      dispatch(onChangeMode('dark'));
    }
  };

  /**
   * @description: 初始化加载，保持主题的状态
   * @return {*}
   */

  // TODO: 会出现闪屏
  const initRender = (): void => {
    const theme = handleStorage.getStorage('theme');

    if (theme !== 'light') {
      setThemeState('dark');
      handleStorage.setStorage('theme', 'dark');
      dispatch(onChangeMode('dark'));
    }
  };

  /**
   * theme: useEffect
   * auhor: leewei
   * time: 2022.06.07
   */
  useEffect(() => {
    initRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={container}>
      <Head>
        <title>xiaoyu&apos;s tools</title>
        <meta name="description" content="xiaoyu's tools" />
        <link rel="icon" href="/xiaoyu_tools/logo.png" />
      </Head>

      <header className={styles.header} onClick={() => onChangeTheme()}>
        <div className={styles.switchThemeBtn}>
          {themeState === 'dark' ? (
            <IconMoonFill style={{ fontSize: '25px', color: 'white' }} />
          ) : (
            <IconSunFill style={{ fontSize: '25px', color: 'black' }} />
          )}
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <FormattedMessage id="welcome" />{' '}
          <span className={styles.grdientColorText}>
            <FormattedMessage id="xiaoyu_tools" />
          </span>
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
          <Link href="/logoMaker">
            <a className={styles.card}>
              <h2>MI Style Logo Maker→</h2>
              <p>simple template to make your logo !</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by
          <span className={styles.logo}>
            <Image src="/xiaoyu_tools/logo.png" alt="xiaoyu Logo" width={40} height={40} />
          </span>
          <strong>Leewei</strong>
        </p>
      </footer>
    </div>
  );
};

export default Home;
