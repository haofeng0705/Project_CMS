import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface HFInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: any) => any //先试用 any 代替 axiosrequestconfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface HFRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HFInterceptors<T>
}
