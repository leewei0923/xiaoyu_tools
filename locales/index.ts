/*
 * @Author: leewei
 * @Date: 2022-07-12 15:46:18
 * @LastEditors: leewei
 * @LastEditTime: 2022-07-12 16:30:13
 * @FilePath: \xiaoyu_tools\locales\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by leewei, All Rights Reserved. 
 */
import { zh_CN } from "./zh_CN";
import { en_US } from "./en_US";

function loadLocale(lang: string) {
  let locale = null;
  let message = null;
  switch (lang) {
    case "en-US":
      locale = "en-US";
      message = en_US;
      break;
    case "zh-CN":
      locale = "zh-CN";
      message = zh_CN;
      break;
    default:
      locale = "en-US";
      message = en_US;
      break;
  }
  return { locale, message };
}
export { loadLocale };
