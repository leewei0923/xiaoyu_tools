import { colors } from './colordata';
import { useContext } from 'react';
import { logoMakerOptionsContext, StatePropsType } from '../context';
import styles from './otherOptions.module.scss';

interface OtherOptionsPropsType {
  onRefresh: Function;
}

export default function OtherOptions(props: OtherOptionsPropsType) {
  // props
  const { onRefresh } = props;

  // context
  const logoMakerOptions = useContext(logoMakerOptionsContext);
  const { logoState, dispatchLogo } = logoMakerOptions;

  const onChangeColor = (color: string) => {
    const logoOptions: StatePropsType = logoState;

    logoOptions.backgroundOption.backgroundColor = color;

    dispatchLogo({ type: 'backgroundOption', value: logoOptions });
    onRefresh();
    console.log(color);
  };

  return (
    <div className={styles.container}>
      <section className={styles.chooseStyle}>
        <h3>选择你的要的风格</h3>
        <div className={styles.colorList}>
          {colors.map((item, index) => {
            return (
              <div key={item.title} className={styles.colorItem}>
                <input
                  type="radio"
                  name="logobg"
                  value={item.value}
                  title={item.title}
                  defaultChecked={index === 0}
                  id={`${item.title + (index < 10 ? '0' + index : index + 1)}`}
                  onChange={(e) => onChangeColor(item.value)}
                />
                <label htmlFor={`${item.title + (index < 10 ? '0' + index : index + 1)}`}>{item.title}</label>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
