/* eslint-disable @next/next/no-img-element */
import { backgroundData } from './data';
import styles from './bytedance_milestones.module.scss';
import Carouse1 from './component/Carouse1/carouse1';
import Carouse2 from './component/Carouse2/carouse2';
import { moveEventInfo } from './interface';
import { useState } from 'react';

export default function Milestones() {
  const [carouse1OffsetX, setCarouse1OffsetX] = useState<number>(0);
  const [animateFlag, setAnimateFlag] = useState(false); // 移动时候，过渡动画失效，鼠标抬起，过渡动画开启

  const onMoveEventInfo = (e: moveEventInfo) => {
    setCarouse1OffsetX(e.moveDistence);
    setAnimateFlag(false);
  };
  // 底部icon1.5倍放大
  const [scaleCarouse2Index, setScaleCarouse2Index] = useState(0);
  const onChanegIcon = (e: number) => {
    setCarouse1OffsetX(0);
    setScaleCarouse2Index(e);
  };

  // 鼠标放开事件
  
  const onMouseUp = (e: number) => {
    setAnimateFlag(true);
    if (scaleCarouse2Index + e <= 0) {
      setScaleCarouse2Index(0);
    } else if (scaleCarouse2Index + e >= backgroundData.length - 1) {
      setScaleCarouse2Index(backgroundData.length - 1);
    } else {
      if (e === 0) {
        setScaleCarouse2Index(scaleCarouse2Index);
      } else {
        setScaleCarouse2Index(scaleCarouse2Index + e);
      }
    }
    // 无论怎么切换，移动的距离都是0，当放开鼠标后
    setCarouse1OffsetX(0);
  };

  return (
    <section className={styles.container}>
      {/* 标题 */}
      <p className={styles.title}>Milestones</p>

      <div className={styles.history}>
        {/* content */}
        <div className={styles.carouse1}>
          <div className={styles.slick_list}>
            <div
              className={styles.slick_track}
              style={{
                width: `${backgroundData.length * 637.75}px`,
                transform: `translate3d(${scaleCarouse2Index * -637.75 + carouse1OffsetX}px, 0px, 0px)`,

                transition: `${animateFlag ? 'transform 500ms ease 0s' : 'transform 0ms ease 0s'}`
              }}
            >
              {/* item1 */}
              {backgroundData.map((item, index) => {
                return (
                  <Carouse1
                    key={item.id + item.name}
                    img={item.img}
                    desc={item.desc}
                    time={item.time}
                    index={index}
                    currentIndex={scaleCarouse2Index}
                    onMouseUp={(e: number) => onMouseUp(e)}
                    onMoveEventInfo={(e: moveEventInfo) => onMoveEventInfo(e)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* icon */}
        <div className={styles.carouse2}>
          <div className={styles.slick_list}>
            <div className={styles.slick_track} style={{ width: `${backgroundData.length * 95}px` }}>
              {backgroundData.map((item, index) => {
                return (
                  <Carouse2
                    icon={backgroundData[index].icon}
                    key={item.id + item.name}
                    index={index}
                    currentIndex={scaleCarouse2Index}
                    onChange={onChanegIcon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
