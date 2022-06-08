
/**
 * theme: 简单封装处理浏览器存储LocalStorage
 * author: leewei
 * time: 2022.06.07
 */

class HandleStorage {
  protected prefix = 'xiaoyu';

  private isSupport() {
    if (
      window.localStorage === undefined ||
      window.localStorage === null ||
      localStorage === undefined ||
      localStorage === null
    ) {
      return false;
    }
    return true;
  }

  setStorage<K, T>(key: string, value: T ):void {
    // 判断是否支持localStorage
    if (!this.isSupport()) {
      throw new Error('不支持localStorage');
    }
    
    const content = JSON.stringify(value);
    window.localStorage.setItem(`${this.prefix}_${key}`, content);
  }


  getStorage(key:string):string {
    if (!this.isSupport()) {
      throw new Error('不支持localStorage');
    }

    if (!window.localStorage.getItem(`${this.prefix}_${key}`)) {
      return '';
    }

    const content = window.localStorage.getItem(`${this.prefix}_${key}`) || '';
    return content;
  }

  // 删除传入的key
  removeKey() {}

  // 清空Stoage
  clearStorage() {}
}


export default HandleStorage;