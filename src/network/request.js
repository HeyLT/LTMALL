import axios from "axios";

export function request(config) {
  const interre = axios.create({
    //服务器接口
    baseURL: "",
    timeout: 5000
  });

  // 请求拦截
  interre.interceptors.request.use(
    config => {
      //1，对config中的信息做一些修改
      //2. 发送网络请求时显示请求图标
      //3.token信息检查
      return config;
    },
    err => {
      return err;
    }
  );

  //响应拦截
  interre.interceptors.response.use(
    res => {
      //接收到响应后进行一些操作，例如在服务器返回登录状态失效，需要重新登录的时候，跳转到登录页等。
      return res.data;
    },
    err => {
      console.log(err);
    }
  );


  return interre(config);
}
