import { message } from "antd";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import CONFIG from "../../config";
import store from "../store/redux";

export interface IParamsHTTP {
  method?: "get" | "post" | "delete" | "put";
  path: string;
  payload?: any;
  params?: any;
  config?: {
    isPrivate?: boolean;
    isFormData?: boolean;
  };
  showSuccess?: boolean;
  showError?: boolean;
  convert?: (res: any) => any;
}

export class HTTPRepository {
  private service: AxiosInstance;
  constructor(baseURL?: undefined) {
    this.service = axios.create({
      baseURL: baseURL || CONFIG.API_BASE_URL,
      withCredentials: false,
    });
  }
  private getDefaultConfig({ isFormData }: any = {}) {
    const config = {
      headers: {},
    };

    if (isFormData) {
      Object.assign(config.headers, {
        "Content-Type": "multipart/form-data",
      });
    } else {
      Object.assign(config.headers, {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      });
    }
    return config;
  }
  private handleSuccess(
    response: AxiosResponse<any, any>,
    convert: ((arg0: any) => any) | undefined,
    showSuccess: boolean
  ) {
    if (showSuccess) {
      message.success(response?.data?.message);
    }
    if (convert !== undefined) {
      return Promise.resolve(convert(response.data));
    }

    return Promise.resolve(response);
  }
  private handleError(
    error: { response: { status: any; data: { message: string | number } } },
    showError: boolean
  ) {
    let status = error.response?.status;
    switch (status) {
      case 400: {
        if (showError) {
          message.error(error.response?.data?.message);
        }
        break;
      }
      case 401: {
        window.location.href = CONFIG.LOGIN_PAGE;
        break;
      }
      case 500: {
        message.error(error.response?.data?.message);
        break;
      }
      case undefined: {
        if (showError) {
          message.error(["server.networkError"]);
        }
        break;
      }
      default: {
        if (showError) {
          message.error("HTTP CODE " + status);
        }
        break;
      }
    }
    return Promise.reject(error);
  }
  execute({
    method = "get",
    path = "",
    payload,
    config = {},
    params,
    showSuccess = true,
    showError = true,
    convert = (res) => res,
  }: IParamsHTTP) {
    let args: Array<any>;
    const { isFormData = false } = config;
    switch (method) {
      case "get": {
        if (params) {
          args = [
            path,
            {
              ...this.getDefaultConfig(),
              params,
            },
          ];
        } else {
          args = [path, this.getDefaultConfig()];
        }
        break;
      }
      case "delete": {
        args = [
          path,
          {
            data: payload,
            ...this.getDefaultConfig(),
            params: params ? params : null,
          },
        ];
        break;
      }
      case "post":
      case "put": {
        let data = payload;
        if (isFormData) {
          data = new FormData();
          const arrKey = Object.getOwnPropertyNames(payload);
          data = arrKey.reduce((form, item) => {
            if (payload[item] !== undefined) {
              const value = payload[item];
              if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) {
                  const it = value[i];
                  if (typeof it === "string") {
                    form.append(`${item}[${i}]`, it);
                  } else {
                    Object.keys(it).forEach((f: any) => {
                      form.append(`${item}[${i}].${f}`, it[f]);
                    });
                  }
                }
              } else {
                form.append(item, value);
              }
            }
            return form;
          }, new FormData());
        }
        args = [path, data, this.getDefaultConfig({ isFormData })];
        break;
      }

      default:
        break;
    }
    //@ts-ignore
    return this.service[method](...args)
      .then((response) => {
        return this.handleSuccess(response, convert, showSuccess);
      })
      .catch((error) => this.handleError(error, showError));
  }
}

const httpRepository = new HTTPRepository();

export default httpRepository;
