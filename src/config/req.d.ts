declare namespace Req{
  interface reqProps{
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
    params?: any;
    data?: any;
    [key: string]: any;
  }
}