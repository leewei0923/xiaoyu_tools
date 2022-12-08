import React, { Fragment, useEffect, useRef, useState } from 'react';
import { IconDashboard } from '@arco-design/web-react/icon';
import { Message } from '@arco-design/web-react';
import styles from './swatches.module.scss';

interface SwatchesColors {
  name: string;
  hex: string;
  rgb: string;
  cmyl: string;
}

interface Swatches {
  name: string;
  angle: string;
  colors: Array<SwatchesColors>;
}

export default function Swatches(props: Swatches) {
  /**
   * theme: 全局公共
   * author: leewei
   * time: 2022.06.08
   *
   */
  const { name, angle, colors } = props;

  /**
   * theme: input color 颜色改变的触发的事件
   * @param e 改变事件参数
   * @param i 颜色的序号
   * time: 2022.06.08
   * author: leewei
   */
  const colorsRef = useRef(new Array<string>()); // 用于保存数组
  const [colorText, setColorText] = useState(''); // 颜色更改时候，页面更新
  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    colorsRef.current[i] = e.target.value;
    setColorText(e.target.value);
  };

  /**
   * theme: 初始化将颜色填入div块
   * time: 2022.06.08
   * author: leewei
   */
  const init = (): void => {
    for (const x of colors) {
      if (!colorsRef.current.includes(x.hex) && colorsRef.current.length < colors.length) {
        colorsRef.current.push(x.hex);
      }
    }
  };
  init();

  /**
   * theme: input range 改变事件
   * time: 2022.06.09
   * author: leewei
   */
  const [rangeValue, setRangeValue] = useState('');

  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRangeValue(e.target.value);
  };

  /**
   * theme: 点击复制粘贴
   * time: 2022.06.09
   * author: leewei
   */

  const onCopyCss = async () => {
    const backgroundImage = `background-image: linear-gradient(${rangeValue === '' ? angle : rangeValue}deg, ${
      colorsRef.current[0]
    },  ${colorsRef.current[1]})`;
    navigator.clipboard.writeText(backgroundImage).then(() => console.log('成功写入剪贴板'));
    Message.success('复制成功');
  };

  /**
   * useEffect
   */
  useEffect(() => {}, [colorText, rangeValue]);

  return (
    <div className={styles.container}>
      {/* 色板标题 */}
      <p className={styles.title}>{name}</p>

      {/* 展示色板块 */}
      <div className={styles.palette}>
        <div
          className={styles.circle}
          //TODO: 增加多个颜色选项，再增加一个单独的颜色
          style={{
            backgroundImage: `linear-gradient(${rangeValue === '' ? angle : rangeValue}deg, ${colorsRef.current})`
          }}
        >
          
          <p className={styles.showCssCode}>{`点击copy css可以直接复制\nbackground: linear-gradient(${
            rangeValue === '' ? angle : rangeValue
          }deg, ${colorsRef.current})`}</p>
        </div>
      </div>

      {/* 颜色放置区 */}
      <div className={styles.footerOption}>
        <IconDashboard />
        <div className={styles.input_angle_container}>
          <input
            type="range"
            id="input_angle"
            step={1}
            name="input_angle"
            className={styles.input_angle}
            onChange={(e) => onRangeChange(e)}
            min={-360}
            max={360}
            defaultValue={angle}
          />
          <p>{rangeValue === '' ? angle : rangeValue}°</p>
        </div>

        {colors.map((item, i) => {
          return (
            <Fragment key={'option' + item.name}>
              <div className={styles.circleBack} style={{ background: `${colorsRef.current[i]}` }}>
                <input
                  type="color"
                  id={item.name}
                  name={item.name}
                  defaultValue={item.hex}
                  style={{ background: `${colorsRef.current[i]}` }}
                  onChange={(e) => onColorChange(e, i)}
                  title={`${item.name} & ${colorsRef.current[i]}`}
                />
              </div>

              {/* <label htmlFor={item.name}>{item.hex}</label> */}
            </Fragment>
          );
        })}

        {/* 复制 */}

        <p className={styles.copyBtn} onClick={() => onCopyCss()}>
          COPY CSS
        </p>
      </div>
    </div>
  );
}
