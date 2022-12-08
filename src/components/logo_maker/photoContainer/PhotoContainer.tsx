import { useContext, useEffect } from 'react';
import { logoMakerOptionsContext } from '../context';
import styles from './photoConatiner.module.scss';

interface PhotoContainerPropsType {
  refresh: number;
}
export default function PhotoContainer(props: PhotoContainerPropsType) {
  // props

  const { refresh } = props;
  // context 对象
  const logoMakerOptions = useContext(logoMakerOptionsContext);
  const {
    logoState: { backgroundOption, fontOption },
    dispatchLogo
  } = logoMakerOptions;
  useEffect(() => {}, [refresh]);

  return (
    <div className={styles.container}>
      <div className={styles.logo} style={{...backgroundOption}} id="logoMaker">
        <p contentEditable style={{...fontOption}} suppressContentEditableWarning={true}>YU</p>
      </div>
    </div>
  );
}
