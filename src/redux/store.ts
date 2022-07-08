/*
 * @Author: leewei
 * @Date: 2022-07-08 16:08:57
 * @LastEditors: leewei
 * @LastEditTime: 2022-07-08 22:12:30
 * @FilePath: \xiaoyu_tools\src\redux\store.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by leewei, All Rights Reserved. 
 */
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';

export const store = configureStore({
  reducer: {
    themeMode: themeReducer.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type ThemeState = ReturnType<typeof store.getState>;