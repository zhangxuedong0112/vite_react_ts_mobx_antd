/**
 * 网络请求配置
 */
import globalConfig from "@/global.config";
import localStorageCache from "@/utils/localStorageCache";
import axios from "axios";

class ReqAxios{
  axios = axios;
  cacheReq = new Map();
  token:any;

  constructor(){
    this.init()
  }

  /* 初始化配置 */
  init(){
    /* 过期时间 */
    axios.defaults.timeout = 1000 * 60;
    
    /* 接口地址,相对目录就是当前域名 */
    if(globalConfig.isDev){
      axios.defaults.baseURL = "/api";
    }else{
      axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
    }
    
    /* 返回拦截 */
    axios.interceptors.response.use(
      (res: any) => {
          if (res) {
              return res;
          }
      },
      err => {
          return Promise.reject(err);
      },
    );

    /* 请求拦截，添加token等 */
    axios.interceptors.request.use(
      config => {
          // 获取token
          const localToken = localStorageCache.get('token');
          if(localToken)this.token = localToken;

          // 设置参数格式
          if (!config.headers['Content-Type']) {
              config.headers = {
                  'Content-Type': 'application/json',
              };
          }
          
          config.headers.token = this.token;

          // 鉴权参数设置
          if (config.method === 'get') {
          } else {
              config.data = config.data || {};
              //一些参数处理
          }
          return config;
      },
      err => {
          return Promise.reject(err);
      },
    );
  }

  /* ajax请求封装,参数参考 http://www.axios-js.com/zh-cn/docs/#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE */
  async ajax(props:Req.reqProps){
    //ie get 添加 ts防止走缓存
    if (props.method == 'get') {
      let key:any = "ActiveXObject";
      if (!!window[key] || key in window) {
          props.params = props.params || {};
          props.params = {
              ...props.params,
              ts: new Date().getTime(),
          };

      }
    }

    return axios(props);
  }

  /* 缓存策略 */
  async cache(props:Req.reqProps){
    let params = "";
    if (props.method == 'get') {
      params = JSON.stringify(props.params || {});
    }else{
      params = JSON.stringify(props.data || {});
    }
    let url = `${props.url}->${params}`;
    
    let res = this.cacheReq.get(url);
    if(res !== undefined){
      console.log(`命中本地缓存: %c${url}`, 'font-size:12px;color:green;');
      return Promise.resolve(res)
    }

    try {
      res = await this.ajax(props);
      this.cacheReq.set(url, res);  
      return Promise.resolve(res);    
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new ReqAxios();