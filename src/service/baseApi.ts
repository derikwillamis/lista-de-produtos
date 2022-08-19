import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export default class BaseClient {
  private http: AxiosInstance

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
      responseType: 'json',
    })
  }

  public get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.http.get<T>(url, options).then(this.getData)
  }

  public getResponse<T>(url: string): Promise<AxiosResponse<T>> {
    return this.http.get<T>(url)
  }
  /* eslint-disable */
  private getData<T>(response: AxiosResponse<T>): T {
    return response.data
  }
}
