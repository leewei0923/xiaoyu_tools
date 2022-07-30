import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { photoControlOptions } from './photoControlOptions';
import { logoMakerOptionsContext, StatePropsType } from '../context';
import styles from './photoControl.module.scss';

interface PhotoControlPropsType {
  onRefresh: Function;
}
export default function PhotoControl(props: PhotoControlPropsType) {
  // props

  const { onRefresh } = props;

  // context 对象
  const logoMakerOptions = useContext(logoMakerOptionsContext);
  const { logoState, dispatchLogo } = logoMakerOptions;

  // 点击切换 切换加载的操作对象
  const [optionsIndex, setOptionsIndex] = useState(false); // true = 1, false = 0
  const onChangeSwitch = () => {
    setOptionsIndex(!optionsIndex);
  };
  // 滑动progress 事件
  const [refresh, setRefresh] = useState(0);
  const onRangeChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type: string,
    name: string,
    controlObj: boolean
  ) => {
    let controlObject = controlObj === false ? 'backgroundOption' : 'fontOption';
    const logoOptions: StatePropsType = logoState;
    if (type === 'range' ) {
      logoOptions[controlObject][name] = e.target.value+ 'px';;
    } else {
      logoOptions[controlObject][name] = e.target.value 
    }

    dispatchLogo({ type: controlObject, value: logoOptions });
    setRefresh(Math.random());
    onRefresh();
  };

  return (
    <div className={styles.container}>
      <section className={styles.topOptions}>
        <p>{optionsIndex !== true ? '背景设置' : '字体设置'}</p>
        <button onClick={() => onChangeSwitch()}>切换</button>
      </section>

      <section className={styles.optionList}>
        {photoControlOptions[optionsIndex === true ? 1 : 0].map((item) => {
          const { type, value, name } = item;
          let max = '';
          let min = '';
          if (type === 'range' && item.max !== undefined && item.max !== undefined) {
            max = item.max;
            min = item.min;
          }
          let element = <div></div>;
          switch (type) {
            case 'range':
              element = (
                <input
                  type={type}
                  className={styles.option}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => onRangeChange(e, type, name, optionsIndex)}
                  defaultValue={logoState[optionsIndex === false ? 'backgroundOption' : 'fontOption'][name].replace('px', '')}
                  data-value={logoState[optionsIndex === false ? 'backgroundOption' : 'fontOption'][name]}
                  max={max}
                  min={min}
                />
              );
              break;
            case 'select':
              if (value instanceof Array) {
                element = (
                  <select
                    className={styles.option}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => onRangeChange(e, type, name, optionsIndex)}
                    defaultValue={logoState[optionsIndex === false ? 'backgroundOption' : 'fontOption'][name]}
                  >
                    {value.map((val) => {
                      return <option key={val}>{val}</option>;
                    })}
                  </select>
                );
              }
              break;
            case 'color':
              element = (
                <input
                  type={type}
                  className={styles.option}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => onRangeChange(e, type, name, optionsIndex)}
                  defaultValue={logoState[optionsIndex === false ? 'backgroundOption' : 'fontOption'][name]}
                  data-value={logoState[optionsIndex === false ? 'backgroundOption' : 'fontOption'][name]}
                />
              );
              break;
            case 'text':
              element = (
                <input
                  type={type}
                  className={styles.option}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => onRangeChange(e, type, name, optionsIndex)}
                  defaultValue={logoState[optionsIndex === false ? 'backgroundOption' : 'fontOption'][name]}
                  data-value={logoState[optionsIndex === false ? 'backgroundOption' : 'fontOption'][name]}
                />
              );
              break;
            default:
              element = <div>错误</div>;
          }

          return (
            <div className={styles.options} key={name}>
              <div className={styles.name}>{name}:</div>
              {element}
            </div>
          );
        })}
      </section>
    </div>
  );
}
