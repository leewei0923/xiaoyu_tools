/*
 * @Author: leewei
 * @Date: 2022-07-08 16:08:44
 * @LastEditors: leewei
 * @LastEditTime: 2022-07-08 22:12:53
 * @FilePath: \xiaoyu_tools\src\redux\hooks.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by leewei, All Rights Reserved. 
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from './store';
import { ThemeState } from './store';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ThemeState> = useSelector;