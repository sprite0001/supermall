import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //拦截器 请求拦截
  instance.interceptors.request.use(config => {
    //console.log(config);
    return config;
  }, error => {
    //console.log(error);
  })
  //拦截器 响应拦截
  instance.interceptors.response.use(res => {
    //console.log(res);
    return res.data
  }, error => {
    //console.log(error);
  })

  return instance(config)
}
