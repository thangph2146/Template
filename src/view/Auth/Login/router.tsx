import { IRouter } from "../../../routers/interface";

 
export const routerLogin: IRouter = {
  path: '/login',
  exact:true,
  loader: import("./index"),
  name: 'login.name', //translate here for breadcrumb and sidebar
  masterLayout: true
};