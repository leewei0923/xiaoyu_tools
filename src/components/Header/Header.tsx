import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { gradientLinks } from '../../static_data/links';
import { useAppSelector, useAppDispatch } from '@src/redux/hooks';
import { onChangeMode, selectTheme } from '@src/redux/theme/themeSlice';
import HandleStorage from '~/src/utils/HandleStorage';
import classnames from 'classnames';
import styles from './header.module.scss';
import { IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';

interface HeaderProp {
  siteName: string;
}

const Header = (props: HeaderProp) => {
  /**
   *
   * desc: 全局公共部分
   */
  const { siteName } = props;
  const themeState = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const handleStorage = new HandleStorage();

  /**
   * @description: 改变主题的模式 'light' : 'dark'
   * @param {*} void
   * @return {*}
   */
  const onChangeThemeMode = (): void => {
    dispatch(onChangeMode(themeState === 'light' ? 'dark' : 'light'));
    handleStorage.setStorage('theme', themeState === 'light' ? 'dark' : 'light');
  };

  const initRender = (): void => {
    const theme = handleStorage.getStorage('theme');

    if (theme !== 'light') {
      handleStorage.setStorage('theme', 'dark');
      dispatch(onChangeMode('dark'));
    }
  };

  useEffect(() => {
    initRender();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const container = classnames({
    [styles.container]: true,
    [styles.dark]: themeState !== 'light'
  });

  return (
    <div className={container}>
      {/* logo */}
      <div className={styles.logo}>
        <i className="bx bx-palette"></i>
        <p>{siteName}</p>
      </div>
      {/* link */}
      <div className={styles.linkBox}>
        {gradientLinks.map((item) => (
          <Link href={item.url} key={item.id + item.text}>
            <a>
              <span>{item.text}</span>
            </a>
          </Link>
        ))}
      </div>

      {/* 切换 夜间或者日间模式按钮 */}
      <div className={styles.switchThemeBtn} onClick={() => onChangeThemeMode()}>
        {themeState === 'light' ? (
          <IconSunFill style={{ fontSize: '25px', color: 'black' }} />
        ) : (
          <IconMoonFill style={{ fontSize: '25px', color: 'white' }} />
        )}
      </div>
    </div>
  );
};

export default Header;
