/*
 * localStorage|sessionStorage 缓存操作
 */
/**
 * 用户缓存: 登录成功后缓存用户信息
 * @type {{set: ((p1?:*)), get: (()), target: (()), reload: (())}}
 */
const cacheUser = {
  /**
   * 缓存当前登录用户
   * @param user
   */
  set: user => {
    let cache = cacheUser.get();
    sessionStorage.setItem('user:user', JSON.stringify(user));
    sessionStorage.setItem('user:target', user.target);
    sessionStorage.setItem('user:orgid', user.orgId);
    sessionStorage.setItem('user:reload', user.id === cache.id)
  },
  /**
   * 获取当前登录用户缓存
   * @returns {{}}
   */
  get: () => {
    const jsonText = sessionStorage.getItem('user:user');
    return (jsonText) ? JSON.parse(jsonText) : {};
  },
  /**
   * 获取当前登录用户权限通道
   * @returns {string}
   */
  target: () => {
    const target = sessionStorage.getItem('user:target');
    return (target) ? target : '';
  },
  /**
   * 获取当前登录用户所属（机构ID | 网点ID）
   * @returns {string}
   */
  orgid: () => {
    return sessionStorage.getItem('user:orgid');
  },
  /**
   * 判断当前登录用户是否需要刷新页面
   * 当发现缓存中的用户不是当前登录用户，需要将页面定位到首页，重新渲染组件
   * @returns {boolean} true：需要刷新，false：不需要刷新
   */
  reload: () => {
    const reload = sessionStorage.getItem('user:reload');
    if(null === reload || undefined === reload) return true;
    return Boolean(reload);
  },
  /**
   * 清除用户缓存，用户主动退出时触发
   */
  clear:() =>{
    sessionStorage.removeItem('user:user');
    sessionStorage.removeItem('user:target');
    sessionStorage.removeItem('user:orgid');
    sessionStorage.removeItem('user:reload');
  },
  /**
   * 缓存用户提交产品匹配的参数
   */
  match:{
    /**
     * 设置匹配产品参数缓存
     * @param params 匹配产品参数
     */
    set: params => {
      localStorage.setItem('user:match:params', JSON.stringify(params));
    },
    /**
     * 获取匹配产品参数缓存
     * @returns {{}}
     */
    get: () => {
      const jsonText = localStorage.getItem('user:match:params');
      return (jsonText) ? JSON.parse(jsonText) : undefined;
    },

    clear: () =>{
      localStorage.removeItem('user:match:params');
    }
  },

};
const cache = {
  user:cacheUser
};
export {
  cache as default,
  cacheUser as user
};
