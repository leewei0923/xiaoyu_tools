/*
 * @Author: leewei
 * @Date: 2022-07-08 17:05:18
 * @LastEditors: leewei
 * @LastEditTime: 2022-07-08 22:12:35
 * @FilePath: \xiaoyu_tools\src\redux\theme\themeSlice.ts
 * @Description: 主题切片
 *
 * Copyright (c) 2022 by leewei, All Rights Reserved.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from '../store';

export type ThemeModeType = 'light' | 'dark';

const initialThemeState: ThemeModeType = 'light';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    onChangeMode: (_state: ThemeModeType, action: PayloadAction<ThemeModeType>) => {
      action.payload || 'light';
    }
  }
});

export const { onChangeMode } = themeSlice.actions;

export const selectTheme = (state:ThemeState ) => {  return state.themeMode};

export default themeSlice;
