/* eslint-disable @next/next/no-img-element */
import { MouseEvent, useState, useReducer } from 'react';
import { moveEventInfo } from '../../interface';
import classnames from 'classnames';
import styles from './carouse1.module.scss';

interface Carouse1 {
  img: string;
  time: string;
  desc: string;
  index: number;
  currentIndex: number | 0;
  onMouseUp?: Function | undefined;
  onMoveEventInfo?: Function | undefined;
}

export default function Carouse1(props: Carouse1) {
  // 公共区域
  const { img, time, desc, index, currentIndex, onMouseUp, onMoveEventInfo } = props;

  const [mouseState, setMouseState] = useState(false);

  interface actionInfo {
    type: 'down' | 'move' | 'up';
    clientx: number;
  }

  const initialState = { startClientX: 0, moveDistence: 0, endClientX: 0 };

  function moveReducer(state: moveEventInfo, action: actionInfo) {
    switch (action.type) {
      case 'down':
        return { startClientX: action.clientx, moveDistence: state.moveDistence, endClientX: state.endClientX };
      case 'move':
        return { startClientX: state.startClientX, moveDistence: action.clientx, endClientX: state.endClientX };
      case 'up':
        return { startClientX: state.startClientX, moveDistence: 0, endClientX: action.clientx };
      default:
        throw new Error();
    }
  }

  const [moveEvent, dispatchMove] = useReducer(moveReducer, initialState);

  const onmouserDown = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    setMouseState(true);
    dispatchMove({ type: 'down', clientx: e.clientX });
  };

  const onmouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (mouseState) {
      // onMoveEventInfo

      if (typeof onMoveEventInfo == 'function') {
        onMoveEventInfo(moveEvent);
      }
      dispatchMove({ type: 'move', clientx: e.clientX - moveEvent.startClientX });
      // console.log(moveEvent);
      // console.log('移动', e.clientX - moveEvent.startClientX);
    }
  };

  const onmouseup = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    setMouseState(false);
    if (typeof onMouseUp === 'function') {
      if(moveEvent.moveDistence >= 130) {
        onMouseUp(1);
      } else if (moveEvent.moveDistence < -130) {
        onMouseUp(-1);
      } else {
        onMouseUp(0);
      }
      
    }
    dispatchMove({ type: 'up', clientx: e.clientX });
    // console.log('拿起', e.clientX);
  };

  const slick_slide = classnames({ [styles.slick_slide]: true, [styles.slick_active]: currentIndex === index });

  return (
    <div
      className={slick_slide}
      data-index={index}
      onMouseDown={(e) => onmouserDown(e)}
      onMouseMove={(e) => onmouseMove(e)}
      onMouseUp={(e) => onmouseup(e)}
    >
      <div className={styles.stone_wrapper}>
        <img src={img} alt={time} />
        <div className={styles.stoneWords}>
          <p className={styles.time}>{time}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </div>
  );
}
