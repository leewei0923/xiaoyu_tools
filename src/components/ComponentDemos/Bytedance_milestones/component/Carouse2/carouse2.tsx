import { MouseEvent } from 'react';
import classnames from 'classnames';
import styles from './carouse2.module.scss';

interface Carouse2 {
  icon: string;
  index: number;
  currentIndex: number | 0;
  onChange?:Function;
}

export default function Carouse2(props: Carouse2) {
  // 公共区域
  const { icon, index, currentIndex, onChange } = props;

  // 按下图标事件
  const onClickCarouse2 = () => {
    if(typeof onChange === 'function') {
      onChange(index);
    }
  };

  const logo = classnames({
    [styles.logo]: true,
    [styles.slick_active]: currentIndex === index
  });
  // ---

  return (
    <div className={styles.slick_slide} data-index={index} onClick={(e) => onClickCarouse2()}>
      <div>
        <li>
          <div className={logo} style={{ backgroundImage: `url(${icon})` }}></div>
        </li>
      </div>
    </div>
  );
}
