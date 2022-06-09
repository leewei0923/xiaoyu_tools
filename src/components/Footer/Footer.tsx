import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

const linkData = [
  {
    id: '1',
    name: 'Home',
    url: '/'
  },
  {
    id: '2',
    name: 'Github',
    url: 'https://github.com/leewei0923'
  },
  
];

export default function Footer() {
  return (
    <div className={styles.container}>
      {/* 其他选项 */}
      <div className={styles.link}>
        <div className={styles.otherLinks}>
          {linkData.map((item) => {
            return (
              <Link key={item.id + item.name} href={item.url}>
                <a className={styles.linkName}>{item.name}</a>
              </Link>
            );
          })}
        </div>

        <div className={styles.logo}>
          <Image src="/logo.png" alt="xiaoyu Logo" width={40} height={40} />
        <span className={styles.logoName}>Xiaoyu's Tools</span>
        </div>
        
      </div>
      {/* 版权所有 */}
      <p className={styles.statement}>©2022, content by Leewei. All Rights Reserved. The Website by leewei.</p>
      {/* 备案域名 */}

      <p className={styles.beian}>
        <Link href="https://beian.miit.gov.cn">
          <a className={styles.a}>皖ICP备20004665号-2</a>
        </Link>
      </p>
    </div>
  );
}
