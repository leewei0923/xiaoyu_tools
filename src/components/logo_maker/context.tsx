import React, { Dispatch, SetStateAction } from 'react';

interface backgroundOptionType {
  width: string;
  height: string;
  borderRadius: string;
  backgroundColor: string;
  backgroundImage: string;
  [key: string]: string;
}

interface fontOptionType {
  marginTop: string;
  marginLeft: string;
  fontWeight: string;
  fontSize: string;
  fontFamily: string;
  color: string;
  [key: string]: string;
}
export interface StatePropsType {
  backgroundOption: backgroundOptionType;
  fontOption: fontOptionType;
  [key: string]: backgroundOptionType | fontOptionType;
}

interface ActionProps {
  type: string;
  value: StatePropsType;
  [key: string]: string | StatePropsType;
}

export const initalOptions = {
  backgroundOption: {
    width: '300px',
    height: '300px',
    borderRadius: '80px',
    backgroundColor: '#FF6700',
    backgroundImage: 'none'
  },
  fontOption: {
    marginTop: '20px',
    marginLeft: '40px',
    fontWeight: '500',
    fontSize: '180px',
    fontFamily: 'Dengxian',
    color: '#ffffff',
    letterSpacing: '0px',
  }
};

/**
 * TODO: context + reducer 实现更改数据
 * @param state
 * @param action
 * @returns
 */
export function LogoMakerReducer(state: StatePropsType, action: ActionProps): StatePropsType {
  switch (action.type) {
    case 'backgroundOption':
      return action.value;
    case 'fontOption':
      return action.value;
    default:
      throw new Error();
  }
}
const logoState: StatePropsType = initalOptions;

export const logoMakerOptionsContext = React.createContext({ logoState, dispatchLogo: ({}: any) => {} });
