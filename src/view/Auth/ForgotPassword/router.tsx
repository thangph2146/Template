import { IRouter } from "../../../routers/interface";

 
export const routerForgotPassword: IRouter = {
  path: '/forgot-password',
  exact:true,
  loader: import("./index"),
  name: 'forgotPassword.name', //translate here for breadcrumb and sidebar
};