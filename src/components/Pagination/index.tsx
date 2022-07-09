import { Left, Right } from '@icon-park/react';
import React, { useEffect, useReducer } from 'react';
import styles from './pageination.module.scss';

interface Pagination {
  current?: number; // 当前页数
  defaultCurrent?: number; // 默认的当前页数
  defaultPageSize?: number; // 默认的每页条数
  hideOnSinglePage?: boolean; // 只有一页时是否隐藏分页器
  pageSize?: number; // 每页条数
  total?: number; // 数据总数
  onChange?: Function;
}

export default function Index(props: Pagination) {
  /**
   * theme: 全局公共区
   * time: 06.09
   * author: leewei
   */
  const {
    current,
    defaultCurrent = 1,
    defaultPageSize = 10,
    hideOnSinglePage = false,
    pageSize,
    total = 0,
    onChange
  } = props;
  const totalPage = Math.floor(total / (pageSize || defaultPageSize)) + 1; // 当前页面总数
  const pageinationBox = new Array<number>(totalPage).fill(0);

  /**
   * theme: 按钮操作
   * time: 2022.06.09
   * author: leewei
   */

  interface pageinationAction {
    type: 'increment' | 'decrement' | 'current';
    currentCount?: number;
  }

  interface pageinationState {
    page: number;
  }

  const initialState = { page: 1 };

  function pageinationReducer(state: pageinationState, action: pageinationAction): pageinationState {
    switch (action.type) {
      case 'increment':
        return { page: state.page + 1 };
      case 'decrement':
        return { page: state.page - 1 };
      case 'current':
        return { page: action.currentCount || 1 + 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(pageinationReducer, initialState);

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(state.page, pageSize || defaultPageSize);
    }
  }, [defaultPageSize, onChange, pageSize, state.page]);

  return (
    <>
      {hideOnSinglePage && totalPage === 1 ? (
        <div className={styles.container}></div>
      ) : (
        <div className={styles.container}>
          {state.page === 1 ? (
            <Left
              theme="outline"
              // fill="#333"
              className={styles.unleft}
            />
          ) : (
            <Left
              theme="outline"
              // fill="#333"
              className={styles.left}
              onClick={() => dispatch({ type: 'decrement' })}
            />
          )}

          {pageinationBox.map((item, i) => {
            return (
              <p
                style={{ color: `${state.page === i + 1 ? '#4D8BF4' : '#494949'}` }}
                key={item + i + 'pagination'}
                className={styles.option}
                onClick={() => dispatch({ type: 'current', currentCount: i + 1 })}
              >
                {i + 1}
              </p>
            );
          })}

          {state.page === totalPage ? (
            <Right
              theme="outline"
              // fill="#333"
              className={styles.unright}
            />
          ) : (
            <Right
              theme="outline"
              // fill="#333"
              className={styles.right}
              onClick={() => dispatch({ type: 'increment' })}
            />
          )}
        </div>
      )}
    </>
  );
}
