import Link from 'next/link';
import React, { useContext } from 'react';
import { gradientLinks } from '../../static_data/links';
import { ThemeContext } from '../../utils/context-manage';
import styles from './header.module.scss';

interface HeaderProp {
  siteName:string
}

const Header = (props:HeaderProp) => {
  const themeState = useContext(ThemeContext);

  const {siteName} = props;

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
      <div className={styles.switchThemeBtn}>
        {themeState === 'dark' ? <i className="bx bxs-sun"></i> : <i className="bx bxs-moon"></i>}
      </div>
    </div>
  );
};

export default Header;
