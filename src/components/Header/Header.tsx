import Link from 'next/link';
import React, { useContext } from 'react';
import { gradientLinks } from '../../static_data/links';
import { useAppSelector, useAppDispatch } from '@src/redux/hooks';
import { onChangeMode, selectTheme } from '@src/redux/theme/themeSlice';
import HandleStorage from '~/src/utils/HandleStorage';
import styles from './header.module.scss';

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

  const onChangeThemeMode = () => {
    dispatch(onChangeMode(themeState === 'light' ? 'dark' : 'light'));
    handleStorage.setStorage('theme', themeState === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={styles.container}>
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
        {themeState === 'light' ? <i className="bx bxs-moon"></i> : <i className="bx bxs-sun"></i>}
      </div>
    </div>
  );
};

export default Header;
